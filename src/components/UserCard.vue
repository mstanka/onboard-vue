<template>
  <div
    class="
      `${user.isSelected
      ?
      '
      bg-blue-800
      text-blue-100
      '
      :
      '
      bg-white text-gray-700
      '
      }
      max-w-card
      w-full
      h-72
      flex flex-col
      justify-between
      items-center
      border
      rounded-md
      shadow
      p-6
      mb-4
      cursor-pointer
      hover:shadow-xl
      `
    "
    @click="toggleSelectedUser"
  >
    <div class="text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-12 w-12 block m-auto"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd"
        />
      </svg>
      <p>{{ user.isSelected }}</p>
      <p class="pb-0 text-blue-800">{{ user.name }}</p>
      <p class="text-xs">{{ user.email }}</p>
    </div>
    <p class="text-black">{{ user.company.name }}</p>
    <p class="text-xs">{{ user.phone }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: Object,
  },
  emits: ['toggle-selected'],
  methods: {
    toggleSelectedUser() {
      this.$emit('toggle-selected', this.user.id);
    },
  },
};
</script>
