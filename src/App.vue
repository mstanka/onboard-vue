<template>
  <main class="h-screen max-w-screen-xl mx-auto mt-4 text-gray-500">
    <Form :selectedUsers="selectedUsers" :unselectedUsers="unselectedUsers" />
    <div class="flex flex-wrap justify-around items-center">
      <div v-if="!users.length">Data loading... Please wait!</div>
      <UserCard
        v-for="user in users"
        :key="user.id"
        :user="user"
        @update-users-count="updateUsersCount"
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
            selectedUser: false,
          }));
          setTimeout(() => resolve((this.users = updatedUsers)), 2000);
        })
        .catch((error) => reject(error));
    });
  },
  methods: {
    updateUsersCount() {
      if (this.selectedUsers < 10 || this.unselectedUsers > 0) {
        this.selectedUsers += 1;
        this.unselectedUsers -= 1;
      } else {
        this.selectedUsers -= 1;
        this.unselectedUsers += 1;
      }
    },
  },
};
</script>
