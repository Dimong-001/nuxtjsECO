<template>
  <div>
    <Header @toggleMenu="toggleMenu"/>
    <main>
      <CategoryAllNews/>
      <!-- <MainContent/>      -->
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Header,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Add any layout-specific styles */
</style>