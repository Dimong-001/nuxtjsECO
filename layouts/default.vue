<template>
  <div :class="{ dark: isDarkMode }">
    <!-- Header Component -->
    <Header
      :isMenuOpen="isMenuOpen"
      @toggleMenu="toggleMenu"
      :isDarkMode="isDarkMode"
      @setTheme="setTheme"
    />

    <!-- Main Content Area -->
    <main>
      <!-- Conditionally Render Components Based on the Route -->
       <!-- <ArticlesNews/> -->
      <MainContent :key="mainContentKey" v-if="isHomePage" />
      <CategoryAllNews v-if="isEconomicPage" />
      <Nuxt v-if="!isHomePage && !isEconomicPage" />
    </main>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
import { ref, watch, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import MainContent from '~/components/MainContent.vue';
import CategoryAllNews from '~/components/CategoryAllNews.vue';

export default {
  components: {
    Header,
    Footer,
    MainContent,
    CategoryAllNews,
  },
  setup() {
    const route = useRoute(); // Get the current route
    const mainContentKey = ref(0); // Key to force re-render
    const isMenuOpen = ref(false); // For controlling the mobile menu
    const isDarkMode = ref(false); // For dark mode state

    // Computed properties to check if the current route matches specific pages
    const isHomePage = computed(() => route.path === '/');
    const isEconomicPage = computed(() => route.path.startsWith('/economic'));

    // Watch for route changes and force a re-render of MainContent when navigating to the home page
    watch(route, () => {
      if (route.path === '/') {
        mainContentKey.value += 1; // Change the key to trigger re-render
      }
    });

    // Initialize theme based on user preference or system preference
    onMounted(() => {
      initializeTheme();
    });

    // Methods for managing state
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const initializeTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        setDarkMode(true);
      } else if (savedTheme === 'light') {
        setDarkMode(false);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDark);
      }
    };

    const setTheme = (theme) => {
      if (theme === 'light') {
        setDarkMode(false);
        localStorage.setItem('theme', 'light');
      } else if (theme === 'dark') {
        setDarkMode(true);
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.removeItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDark);
      }
    };

    const setDarkMode = (isDark) => {
      isDarkMode.value = isDark;
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    return {
      mainContentKey,
      isHomePage,
      isEconomicPage,
      isMenuOpen,
      isDarkMode,
      toggleMenu,
      setTheme,
    };
  },
};
</script>

<style scoped>
/* Add your layout styles here */
</style>
