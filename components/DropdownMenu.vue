<template>
  <div
    class="relative"
    @mouseenter="scheduleOpenDropdown"
    @mouseleave="scheduleCloseDropdown"
  >
    <!-- Parent Link -->
    <NuxtLink :to="link" class="hover:text-red-500 flex items-center khmer-font dark:text-gray-300 dark:hover:text-red-400">
      {{ title }}
      <svg class="ml-2 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z" />
      </svg>
    </NuxtLink>

    <!-- Dropdown Menu -->
    <ul
      v-show="isDropdownOpen"
      class="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg whitespace-nowrap z-10 transition-opacity duration-300 ease-in-out dark:bg-gray-900 dark:border-gray-700"
    >
      <li v-for="item in items" :key="item.text">
        <NuxtLink :to="item.link" class="block px-4 py-2 hover:bg-red-100 dark:hover:bg-gray-700 dark:text-gray-300 khmer-font">
          {{ item.text }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true, // Expecting an array of submenu items
    },
  },
  data() {
    return {
      isDropdownOpen: false,
      openTimeout: null, // Timeout for opening the dropdown
      closeTimeout: null, // Timeout for closing the dropdown
    };
  },
  methods: {
    scheduleOpenDropdown() {
      // Clear any pending close timeout
      clearTimeout(this.closeTimeout);

      // Add a slight delay before opening the dropdown
      this.openTimeout = setTimeout(() => {
        this.isDropdownOpen = true;
      }, 200); // Adjust the delay for opening as needed
    },
    scheduleCloseDropdown() {
      // Clear any pending open timeout
      clearTimeout(this.openTimeout);

      // Close the dropdown immediately when mouse leaves
      this.closeTimeout = setTimeout(() => {
        this.isDropdownOpen = false;
      }, 200); // Adjust the delay for closing if needed
    },
  },
  beforeDestroy() {
    // Clear any timeouts to prevent memory leaks
    clearTimeout(this.openTimeout);
    clearTimeout(this.closeTimeout);
  },
};
</script>

<style scoped>

</style>
