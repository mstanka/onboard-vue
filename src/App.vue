<template>
  <main class="h-screen max-w-screen-xl mx-auto mt-4 text-gray-500">
    <div class="flex flex-wrap justify-around items-center">
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

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => (this.users = response.data))
      .catch((error) => console.log(error));
  },
};
</script>
