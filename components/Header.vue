<template>
  <header class="bg-white border-b-2 border-red-500">
    <nav class="container mx-auto flex items-center justify-between p-4">
      <!-- Left Section: Logo and Menu -->
      <div class="flex items-center w-full">
        <!-- Logo Section -->
        <NuxtLink to="/" class="flex-shrink-0 mr-8">
          <img
            src="https://economy.ams.com.kh/wp-content/uploads/2022/09/AMS-COLOUR-FULL-H28.svg"
            alt="AMS Logo"
            class="h-6 md:h-8 lg:h-10"
          />
        </NuxtLink>

        <!-- Desktop Navigation Links -->
        <ul class="hidden lg:flex flex-grow justify-center space-x-6 text-base khmer-font">
          <DropdownMenu
            title="សេដ្ឋកិច្ច"
            :link="'/economic'"
            :items="[
              { text: 'ព្រឹត្តិការណ៍ប្រចាំថ្ងៃ', link: '/economy/daily-events' },
              { text: 'បទយកការណ៍', link: '/economic/reports' }
            ]"
          />
          <DropdownMenu
            title="ហិរញ្ញវត្ថុ"
            :link="'/finance'"
            :items="[
              { text: 'ព្រឹត្តិការណ៍ប្រចាំថ្ងៃ', link: '/finance/daily-events' },
              { text: 'បទយកការណ៍', link: '/finance/reports' }
            ]"
          />
          <DropdownMenu
            title="អចលនទ្រព្យ"
            :link="'/real-estate'"
            :items="[
              { text: 'ព្រឹត្តិការណ៍ប្រចាំថ្ងៃ', link: '/real-estate/daily-events' },
              { text: 'បទយកការណ៍', link: '/real-estate/reports' }
            ]"
          />
          <DropdownMenu
            title="ជំនួញ"
            :link="'/business'"
            :items="[
              { text: 'ព្រឹត្តិការណ៍ប្រចាំថ្ងៃ', link: '/business/daily-events' },
              { text: 'បទយកការណ៍', link: '/business/reports' }
            ]"
          />
          <DropdownMenu
            title="អត្ថបទពាណិជ្ជកម្ម"
            :link="'/pr'"
            :items="[
              { text: 'ព្រឹត្តិការណ៍ប្រចាំថ្ងៃ', link: '/pr/daily-events' },
              { text: 'បទយកការណ៍', link: '/pr/reports' }
            ]"
          />
          <DropdownMenu
            title="អាជីវកម្មថ្មី និងនវានុវត្ត"
            :link="'/start-up-innovation'"
            :items="[
              { text: 'ព្រឹត្តិការណ៍ប្រចាំថ្ងៃ', link: '/start-up-innovation/daily-events' },
              { text: 'បទយកការណ៍', link: '/start-up-innovation/reports' }
            ]"
          />
          <!-- Add more DropdownMenu items as needed -->
        </ul>

        <!-- Responsive Navigation Links (Hidden on Small Screens) -->
        <ul class="hidden md:flex space-x-2">
          <li class="nav-item-small bg-yellow-500">
            <NuxtLink to="/khmer-insider" class="nav-link khmer-font">Khmer Insider</NuxtLink>
          </li>
          <li class="nav-item-small bg-blue-900">
            <NuxtLink to="/politics" class="nav-link khmer-font">វិថីហិរញ្ញវត្ថុ</NuxtLink>
          </li>
          <li class="nav-item-small bg-gray-600">
            <NuxtLink to="/world-news" class="nav-link khmer-font">មរតកគំនិត</NuxtLink>
          </li>
          <li class="nav-item-small bg-red-600">
            <NuxtLink to="/social" class="nav-link khmer-font">កម្ពុជា 360°</NuxtLink>
          </li>
        </ul>

        <!-- Dark Mode Dropdown Button -->
        <div class="relative ml-4" v-click-outside="closeDropdown">
          <button
            @click="toggleDropdown"
            class="p-2 rounded-full bg-gray-800 text-white dark:bg-gray-200 dark:text-black focus:outline-none"
            aria-label="Toggle theme options"
          >
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                v-if="isDarkMode"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v2m0 14v2m9-10h2M3 12H1m16.364 7.364l-1.414-1.414M7.05 7.05l-1.414-1.414M16.364 4.636l-1.414 1.414M7.05 16.95l-1.414 1.414"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 2a10 10 0 110 20 10 10 0 010-20z"
              />
            </svg>
          </button>

          <!-- Dropdown Menu -->
          <div
            v-if="isDropdownOpen"
            class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg py-2 z-50"
          >
            <a
              href="#"
              @click.prevent="setTheme('light')"
              class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white"
            >
              <svg class="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a10 10 0 110 20 10 10 0 010-20z" />
              </svg>
              <span class="khmer-font">ភ្លឺ</span>
            </a>
            <a
              href="#"
              @click.prevent="setTheme('dark')"
              class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white"
            >
              <svg class="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v2m0 14v2m9-10h2M3 12H1m16.364 7.364l-1.414-1.414M7.05 7.05l-1.414-1.414M16.364 4.636l-1.414 1.414M7.05 16.95l-1.414 1.414"
                />
              </svg>
              <span class="khmer-font">ងងឹត</span>
            </a>
            <a
              href="#"
              @click.prevent="setTheme('system')"
              class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white"
            >
              <svg class="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6a8 8 0 000 12h4a8 8 0 000-12h-4z"
                />
              </svg>
              <span class="khmer-font">តាមពេលវេលា</span>
            </a>
          </div>
        </div>

        <!-- Icons Section (Desktop Only) -->
        <div class="hidden lg:flex items-center space-x-4">
          <NuxtLink to="/search" class="block text-gray-700">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 1114 0 7 7 0 01-14 0z" />
            </svg>
          </NuxtLink>
          <NuxtLink to="/profile" class="block text-gray-700">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4z"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>

      <!-- Mobile Menu Icon -->
      <button @click="toggleMenu" class="lg:hidden flex items-center text-gray-700 focus:outline-none" aria-label="Toggle Menu">
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Navigation Menu -->
    <div v-if="isMenuOpen" class="lg:hidden bg-white dark:bg-gray-800 shadow-md">
      <ul class="space-y-4 text-base p-4">
        <li class="flex items-center space-x-2">
          <svg class="w-6 h-6 text-gray-500 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4a9 9 0 0118 0v4M16 3.13a4 4 0 01.88 7.9m3.12 6.1v-4a9 9 0 00-18 0v4" />
          </svg>
          <NuxtLink to="/economic" class="block hover:text-red-500 dark:hover:text-red-400 khmer-font" @click="toggleMenu">សេដ្ឋកិច្ច</NuxtLink>
        </li>
        <!-- Repeat for other menu items -->
      </ul>
    </div>

    <div v-if="isMenuOpen" class="lg:hidden bg-white dark:bg-gray-800 shadow-md">
      <ul class="space-y-4 text-base p-4">
        <li class="flex items-center space-x-2">
          <svg class="w-6 h-6 text-gray-500 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c3.31 0 6-2.69 6-6S15.31 0 12 0 6 2.69 6 6s2.69 6 6 6zm-4 8v-4c0-2.21 1.79-4 4-4s4 1.79 4 4v4H8zm12 0v-4a4 4 0 00-8 0v4h8zM16 3.13a4 4 0 00-.88 7.9m3.12 6.1v-4a9 9 0 00-18 0v4" />
          </svg>
          <NuxtLink to="/finance" class="block hover:text-red-500 dark:hover:text-red-400 khmer-font" @click="toggleMenu">ហិរញ្ញវត្ថុ</NuxtLink>
        </li>
        <!-- Repeat for other menu items -->
      </ul>
    </div>

    <div v-if="isMenuOpen" class="lg:hidden bg-white dark:bg-gray-800 shadow-md">
      <ul class="space-y-4 text-base p-4">
        <li class="flex items-center space-x-2">
          <svg class="w-6 h-6 text-gray-500 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <NuxtLink to="/real-estate" class="block hover:text-red-500 dark:hover:text-red-400 khmer-font" @click="toggleMenu">អចលនទ្រព្យ</NuxtLink>
        </li>
        <!-- Repeat for other menu items -->
      </ul>
    </div>
<!-- Repeat the structure for other sections -->
  </header>
</template>

<script>
export default {
  props: {
    isDarkMode: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isMenuOpen: false,
      isDropdownOpen: false, // Controls the dropdown visibility
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    },
    setTheme(theme) {
      this.$emit('setTheme', theme);
      this.closeDropdown();
    },
  },
  directives: {
    clickOutside: {
      bind(el, binding, vnode) {
        el.clickOutsideEvent = function(event) {
          if (!(el === event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
      },
      unbind(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
      },
    },
  },
};
</script>

<style scoped>
</style>
