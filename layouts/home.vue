<template>
    <div class="bg-gray-50">
      <header class="bg-white border-b-2 border-red-500">
        <nav class="container mx-auto flex items-center justify-between p-4">
          <!-- Left Section: Logo and Menu -->
          <div class="flex items-center space-x-6">
            <!-- Logo Section -->
            <NuxtLink to="/" class="flex-shrink-0">
              <img
                src="https://economy.ams.com.kh/wp-content/uploads/2022/09/AMS-COLOUR-FULL-H28.svg"
                alt="AMS Logo"
                class="h-6 md:h-8 lg:h-10"
              />
            </NuxtLink>
  
            <!-- Navigation Links -->
            <ul class="hidden lg:flex lg:space-x-6 text-lg">
              <li class="relative group">
                <NuxtLink to="/economic" class="hover:text-red-500 flex items-center khmer-font">
                  សេដ្ឋកិច្ច
                  <svg
                    class="ml-2 w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path
                      d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z"
                    />
                  </svg>
                </NuxtLink>
                <!-- Dropdown Menu -->
                <ul
                  class="absolute left-0 mt-2 hidden bg-white border rounded-lg shadow-lg group-hover:block whitespace-nowrap z-10"
                >
                  <li>
                    <NuxtLink
                      to="/economic/daily-events"
                      class="block px-4 py-2 hover:bg-red-100 khmer-font"
                      >ព្រឹត្តិការណ៍ប្រចាំថ្ងៃ</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/economic/reports"
                      class="block px-4 py-2 hover:bg-red-100 khmer-font"
                      >បទយកការណ៍</NuxtLink
                    >
                  </li>
                </ul>
              </li>
              <!-- Repeat similar structure for other menu items -->
              <li class="relative group">
                <NuxtLink to="/finance" class="hover:text-red-500 flex items-center khmer-font">
                  ហិរញ្ញវត្ថុ
                  <svg
                    class="ml-2 w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z"
                    />
                  </svg>
                </NuxtLink>
                <!-- Dropdown Menu -->
                <ul
                  class="absolute left-0 mt-2 hidden bg-white border rounded-lg shadow-lg group-hover:block whitespace-nowrap z-10"
                >
                  <li>
                    <NuxtLink
                      to="/finance/daily-events"
                      class="block px-4 py-2 hover:bg-red-100 khmer-font"
                      >ព្រឹត្តិការណ៍ប្រចាំថ្ងៃ</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/finance/reports"
                      class="block px-4 py-2 hover:bg-red-100 khmer-font"
                      >បទយកការណ៍</NuxtLink
                    >
                  </li>
                </ul>
              </li>
              <!-- Add more menu items as needed -->
            </ul>
          </div>
  
          <!-- Right Section: Colorful Blocks -->
          <div class="flex items-center space-x-2">
            <NuxtLink
              to="/khmer-insider"
              class="block px-4 py-2 bg-yellow-500 text-white font-bold khmer-font"
            >
              Khmer Insider
            </NuxtLink>
            <NuxtLink
              to="/international"
              class="block px-4 py-2 bg-blue-900 text-white font-bold khmer-font"
            >
              វិស័យអន្តរជាតិ
            </NuxtLink>
            <NuxtLink
              to="/marketing"
              class="block px-4 py-2 bg-gray-600 text-white font-bold khmer-font"
            >
              ម៉ាកីតិងត
            </NuxtLink>
            <NuxtLink
              to="/cambodia360"
              class="block px-4 py-2 bg-red-600 text-white font-bold khmer-font"
            >
              កម្ពុជាទំនើប 360°
            </NuxtLink>
  
            <!-- Icons Section -->
            <NuxtLink to="/search" class="block text-gray-700">
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 1114 0 7 7 0 01-14 0z"
                />
              </svg>
            </NuxtLink>
            <NuxtLink to="/dark-mode" class="block text-gray-700">
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v2m0 14v2m9-10h2M3 12H1m16.364 7.364l-1.414-1.414M7.05 7.05l-1.414-1.414M16.364 4.636l-1.414 1.414M7.05 16.95l-1.414 1.414"
                />
              </svg>
            </NuxtLink>
            <NuxtLink to="/profile" class="block text-gray-700">
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4z"
                />
              </svg>
            </NuxtLink>
          </div>
        </nav>
      </header>
  
      <!-- Output the page content -->
      <div class="container mx-auto p-4">
        <slot />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
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
  @import "@/assets/css/tailwind.css"; /* Import Tailwind CSS */
  
  @import url('https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&display=swap');
  
  /* Apply Battambang font to Khmer text */
  .khmer-font {
    font-family: 'Battambang', sans-serif;
  }
  
  /* Additional styles to ensure the logo is responsive */
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* Dropdown styles */
  .group:hover .group-hover\:block {
    display: block;
  }
  
  /* Ensure dropdowns are visible and clickable */
  .z-10 {
    z-index: 10;
  }
  </style>
  