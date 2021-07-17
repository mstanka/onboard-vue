<template>
  <main class="h-screen max-w-screen-xl mx-auto mt-4 text-gray-500">
    <div class="flex flex-wrap justify-around items-center">
      <div v-if="!users.length">Data loading... Please wait!</div>
      <UserCard v-for="user in users" :key="user.id" :user="user" />
    </div>
  </main>
</template>

<script>
import UserCard from './components/UserCard.vue';
import { inject } from 'vue';

export default {
  components: {
    UserCard,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    const axios = inject('$axios');

    return new Promise((resolve, reject) => {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          setTimeout(() => resolve((this.users = response.data)), 2000);
        })
        .catch((error) => reject(error));
    });
  },
};
</script>
