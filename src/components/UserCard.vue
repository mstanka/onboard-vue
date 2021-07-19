<template>
  <div
    class="
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
    "
    :class="selectedClass"
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
      <p class="pb-0">{{ name }}</p>
      <p class="text-xs">{{ email }}</p>
    </div>
    <p>{{ company }}</p>
    <p class="text-xs">{{ phone }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    id: Number,
    name: String,
    email: String,
    company: String,
    phone: String,
    isSelected: Boolean,
  },
  emits: ['toggle-selected'],
  methods: {
    toggleSelectedUser() {
      this.$emit('toggle-selected', this.id);
    },
  },
  computed: {
    selectedClass() {
      return this.isSelected
        ? 'bg-blue-800 text-blue-100'
        : 'bg-white text-gray-700';
    },
  },
};
</script>
