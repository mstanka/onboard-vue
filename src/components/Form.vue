<template>
  <div class="flex flex-wrap justify-center items-center text-center m-1">
    <input
      class="
        border border-transparent
        rounded-sm
        w-full
        md:w-1/2
        p-2
        focus:outline-none focus:ring-2 focus:ring-blue-800
      "
      placeholder="Search user by name ..."
    />
    <div
      class="
        w-full
        md:w-1/4
        sm:flex-1
        p-2
        m-1
        rounded-sm
        bg-blue-800
        text-blue-100
      "
    >
      Selected Users: {{ selectedUsers }}
    </div>
    <div
      class="
        w-full
        md:w-1/4
        sm:flex-1
        p-2
        m-1
        rounded-sm
        bg-blue-800
        text-blue-100
      "
    >
      Unselected Users: {{ unselectedUsers }}
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'Form',
  props: {
    user: Object,
    selectedUsers: Number,
    unselectedUsers: Number,
  },
};
</script>
