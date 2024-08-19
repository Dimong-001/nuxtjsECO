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
  
            <!-- Desktop Navigation Links -->
            <ul class="hidden lg:flex lg:space-x-6 text-base">
              <li class="relative group">
                <NuxtLink to="/economic" class="hover:text-red-500 flex items-center khmer-font">
                  សេដ្ឋកិច្ច
                  <svg class="ml-2 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z" />
                  </svg>
                </NuxtLink>
                <!-- Dropdown Menu -->
                <ul
                  class="absolute left-0 mt-2 hidden bg-white border rounded-lg shadow-lg group-hover:block whitespace-nowrap z-10"
                >
                  <li>
                    <NuxtLink to="/economic/daily-events" class="block px-4 py-2 hover:bg-red-100 khmer-font">
                      ព្រឹត្តិការណ៍ប្រចាំថ្ងៃ
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/economic/reports" class="block px-4 py-2 hover:bg-red-100 khmer-font">
                      បទយកការណ៍
                    </NuxtLink>
                  </li>
                </ul>
              </li>
  
              <!-- Repeat for other menu items -->
              <!-- Other navigation items are the same structure -->
            </ul>
            <ul class="hidden lg:flex lg:space-x-6 text-base">
              <li class="relative group">
                <NuxtLink to="/finance" class="hover:text-red-500 flex items-center khmer-font">
                ហិរញ្ញវត្ថុ
                  <svg class="ml-2 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z" />
                  </svg>
                </NuxtLink>
                <!-- Dropdown Menu -->
                <ul
                  class="absolute left-0 mt-2 hidden bg-white border rounded-lg shadow-lg group-hover:block whitespace-nowrap z-10"
                >
                  <li>
                    <NuxtLink to="/economic/daily-events" class="block px-4 py-2 hover:bg-red-100 khmer-font">
                      ព្រឹត្តិការណ៍ប្រចាំថ្ងៃ
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/economic/reports" class="block px-4 py-2 hover:bg-red-100 khmer-font">
                      បទយកការណ៍
                    </NuxtLink>
                  </li>
                </ul>
              </li>
  
              <!-- Repeat for other menu items -->
              <!-- Other navigation items are the same structure -->
            </ul>
            <ul class="hidden lg:flex lg:space-x-6 text-base">
              <li class="relative group">
                <NuxtLink to="/real-estate" class="hover:text-red-500 flex items-center khmer-font">
                អចលនទ្រព្យ
                  <svg class="ml-2 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z" />
                  </svg>
                </NuxtLink>
                <!-- Dropdown Menu -->
                <ul
                  class="absolute left-0 mt-2 hidden bg-white border rounded-lg shadow-lg group-hover:block whitespace-nowrap z-10"
                >
                  <li>
                    <NuxtLink to="/economic/daily-events" class="block px-4 py-2 hover:bg-red-100 khmer-font">
                      ព្រឹត្តិការណ៍ប្រចាំថ្ងៃ
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/economic/reports" class="block px-4 py-2 hover:bg-red-100 khmer-font">
                      បទយកការណ៍
                    </NuxtLink>
                  </li>
                </ul>
              </li>
  
              <!-- Repeat for other menu items -->
              <!-- Other navigation items are the same structure -->
            </ul>
            <ul class="hidden lg:flex lg:space-x-6 text-base">
              <li class="relative group">
                <NuxtLink to="/business" class="hover:text-red-500 flex items-center khmer-font">
                ជំនួញ
                  <svg class="ml-2 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z" />
                  </svg>
                </NuxtLink>
                <!-- Dropdown Menu -->
                <ul
                  class="absolute left-0 mt-2 hidden bg-white border rounded-lg shadow-lg group-hover:block whitespace-nowrap z-10"
                >
                  <li>
                    <NuxtLink to="/economic/daily-events" class="block px-4 py-2 hover:bg-red-100 khmer-font">
                      ព្រឹត្តិការណ៍ប្រចាំថ្ងៃ
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/economic/reports" class="block px-4 py-2 hover:bg-red-100 khmer-font">
                      បទយកការណ៍
                    </NuxtLink>
                  </li>
                </ul>
              </li>
  
              <!-- Repeat for other menu items -->
              <!-- Other navigation items are the same structure -->
            </ul>
            <ul class="hidden lg:flex lg:space-x-6 text-base">
              <li class="relative group">
                <NuxtLink to="/pr" class="hover:text-red-500 flex items-center khmer-font">
                 អត្ថបទពាណិជ្ជកម្ម
                  <svg class="ml-2 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z" />
                  </svg>
                </NuxtLink>
                <!-- Dropdown Menu -->
                <ul
                  class="absolute left-0 mt-2 hidden bg-white border rounded-lg shadow-lg group-hover:block whitespace-nowrap z-10"
                >
                  <li>
                    <NuxtLink to="/economic/daily-events" class="block px-4 py-2 hover:bg-red-100 khmer-font">
                      ព្រឹត្តិការណ៍ប្រចាំថ្ងៃ
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/economic/reports" class="block px-4 py-2 hover:bg-red-100 khmer-font">
                      បទយកការណ៍
                    </NuxtLink>
                  </li>
                </ul>
              </li>
  
              <!-- Repeat for other menu items -->
              <!-- Other navigation items are the same structure -->
            </ul>
            <ul class="hidden lg:flex lg:space-x-6 text-base">
              <li class="relative group">
                <NuxtLink to="/start-up-innovation" class="hover:text-red-500 flex items-center khmer-font">
                អាជីវកម្មថ្មី និងនវានុវត្ត
                  <svg class="ml-2 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z" />
                  </svg>
                </NuxtLink>
                <!-- Dropdown Menu -->
                <ul
                  class="absolute left-0 mt-2 hidden bg-white border rounded-lg shadow-lg group-hover:block whitespace-nowrap z-10"
                >
                  <li>
                    <NuxtLink to="/economic/daily-events" class="block px-4 py-2 hover:bg-red-100 khmer-font">
                      ព្រឹត្តិការណ៍ប្រចាំថ្ងៃ
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/economic/reports" class="block px-4 py-2 hover:bg-red-100 khmer-font">
                      បទយកការណ៍
                    </NuxtLink>
                  </li>
                </ul>
              </li>
  
              <!-- Repeat for other menu items -->
              <!-- Other navigation items are the same structure -->
            </ul>
  
            <!-- Mobile Menu Icon -->
            <button
              @click="toggleMenu"
              class="lg:hidden flex items-center text-gray-700 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
  
          <!-- Right Section: Colorful Blocks -->
          <div class="hidden lg:flex items-center space-x-2">
            <NuxtLink to="/#" class="block px-4 py-2 bg-yellow-500 text-white font-bold khmer-font">
              Khmer Insider
            </NuxtLink>
            <NuxtLink to="/#" class="block px-4 py-2 bg-blue-900 text-white font-bold khmer-font">
              វិថីហិរញ្ញវត្ថុ
            </NuxtLink>
            <NuxtLink to="/#" class="block px-4 py-2 bg-gray-600 text-white font-bold khmer-font">
              មរតកគំនិត
            </NuxtLink>
            <NuxtLink to="/#" class="block px-4 py-2 bg-red-600 text-white font-bold khmer-font">
              កម្ពុជា 360°
            </NuxtLink>
  
            <!-- Icons Section -->
            <NuxtLink to="/#" class="block text-gray-700" aria-label="Search">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 1114 0 7 7 0 01-14 0z" />
              </svg>
            </NuxtLink>
            <NuxtLink to="/#" class="block text-gray-700" aria-label="Notifications">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v2m0 14v2m9-10h2M3 12H1m16.364 7.364l-1.414-1.414M7.05 7.05l-1.414-1.414M16.364 4.636l-1.414 1.414M7.05 16.95l-1.414 1.414"
                />
              </svg>
            </NuxtLink>
            <NuxtLink to="/#" class="block text-gray-700" aria-label="Profile">
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
        </nav>
  
        <!-- Mobile Navigation Menu -->
        <div v-if="isMenuOpen" class="lg:hidden bg-white shadow-md">
        <ul class="space-y-4 text-base p-4">
          <li class="flex items-center space-x-2">
            <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4a9 9 0 0118 0v4M16 3.13a4 4 0 01.88 7.9m3.12 6.1v-4a9 9 0 00-18 0v4" />
            </svg>
            <NuxtLink to="/economic" class="block hover:text-red-500 khmer-font" @click="toggleMenu">សេដ្ឋកិច្ច</NuxtLink>
          </li>
          <!-- Repeat for other menu items -->
        </ul>
        </div>
        <div v-if="isMenuOpen" class="lg:hidden bg-white shadow-md">
        <ul class="space-y-4 text-base p-4">
          <li class="flex items-center space-x-2">
            <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c3.31 0 6-2.69 6-6S15.31-4 12 0 6 2.69 6 6s2.69 6 6 6zm-4 8v-4c0-2.21 1.79-4 4-4s4 1.79 4 4v4H8zm12 0v-4a4 4 0 00-8 0v4h8zM16 3.13a4 4 0 00-.88 7.9m3.12 6.1v-4a9 9 0 00-18 0v4" />
            </svg>
            <NuxtLink to="/finance" class="block hover:text-red-500 khmer-font" @click="toggleMenu">ហិរញ្ញវត្ថុ</NuxtLink>
          </li>
          <!-- Repeat for other menu items -->
        </ul>
        </div>
        <div v-if="isMenuOpen" class="lg:hidden bg-white shadow-md">
        <ul class="space-y-4 text-base p-4">
          <li class="flex items-center space-x-2">
            <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <NuxtLink to="/real-estate" class="block hover:text-red-500 khmer-font" @click="toggleMenu">អចលនទ្រព្យ</NuxtLink>
          </li>
          <!-- Repeat for other menu items -->
        </ul>
        </div>
        <div v-if="isMenuOpen" class="lg:hidden bg-white shadow-md">
        <ul class="space-y-4 text-base p-4">
          <li class="flex items-center space-x-2">
            <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6M9 16h6M9 8h6M3 7V5a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1zm12-2h6a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1V5a1 1 0 011-1zm0 10h6a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2a1 1 0 011-1zM3 17v-2a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1z" />
            </svg>
            <NuxtLink to="/business" class="block hover:text-red-500 khmer-font" @click="toggleMenu">ជំនួញ</NuxtLink>
          </li>
          <!-- Repeat for other menu items -->
        </ul>
        </div>
        <div v-if="isMenuOpen" class="lg:hidden bg-white shadow-md">
        <ul class="space-y-4 text-base p-4">
          <li class="flex items-center space-x-2">
            <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c3.31 0 6-2.69 6-6S15.31 0 12 0 6 2.69 6 6s2.69 6 6 6z" />
            </svg>
            <NuxtLink to="/pr" class="block hover:text-red-500 khmer-font" @click="toggleMenu">អត្ថបទពាណិជ្ជកម្ម</NuxtLink>
          </li>
          <!-- Repeat for other menu items -->
        </ul>
        </div>
        <div v-if="isMenuOpen" class="lg:hidden bg-white shadow-md">
        <ul class="space-y-4 text-base p-4">
          <li class="flex items-center space-x-2">
            <svg class="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h6a2 2 0 012 2v7h-8V9a2 2 0 012-2z" />
            </svg>
            <NuxtLink to="/start-up-innovation" class="block hover:text-red-500 khmer-font" @click="toggleMenu">អាជីវកម្មថ្មី និងនវានុវត្ត</NuxtLink>
          </li>
          <!-- Repeat for other menu items -->
        </ul>
        </div>
      </header>
  
      <!-- Output the page content -->
      <div class="container mx-auto p-4">
        <slot />
      </div>
    </div>
  </template>
  
  <script>
  export default {
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
  