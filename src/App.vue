<template>
  <main class="h-screen max-w-screen-xl mx-auto mt-4 text-gray-500">
    <Form
      :selectedUsers="selectedUsers"
      :unselectedUsers="unselectedUsers"
      @searched-item="filterUsers"
    />
    <div class="flex flex-wrap justify-around items-center">
      <div v-if="!users.length">Data loading... Please wait!</div>
      <UserCard
        v-for="user in users"
        :key="user.id"
        :id="user.id"
        :name="user.name"
        :email="user.email"
        :company="user.company.name"
        :phone="user.phone"
        :isSelected="user.isSelected"  
        @toggle-selected="toggleSelectedCounts"
      />
    </div>
  </main>
</template>

<script>
import UserCard from './components/UserCard.vue';
import Form from './components/Form.vue';
import { inject } from 'vue';

export default {
  components: {
    UserCard,
    Form,
  },
  data() {
    return {
      users: [],
      selectedUsers: 0,
      unselectedUsers: 10,
    };
  },
  created() {
    const axios = inject('$axios');

    return new Promise((resolve, reject) => {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          const responseUsers = response.data;
          const updatedUsers = responseUsers.map((user) => ({
            ...user,
            isSelected: false,
          }));
          setTimeout(() => resolve((this.users = updatedUsers)), 2000);
        })
        .catch((error) => reject(error));
    });
  },

  methods: {
    toggleSelectedCounts(userId) {
      const selectedUser = this.users.find((user) => user.id === userId);
      selectedUser.isSelected = !selectedUser.isSelected;

      this.selectedUsers = this.users.filter(
        (user) => user.isSelected === true,
      ).length;

      this.unselectedUsers = this.users.filter(
        (user) => user.isSelected === false,
      ).length;
    },
    filterUsers(searchResult) {
      this.users = this.users.filter((user) =>
        user.name.toLowerCase().includes(searchResult.toLowerCase()),
      );
    },
  },
};
</script>
