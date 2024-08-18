<template>
    <footer class="bg-gray-100 py-8">
      <!-- Top Section: Logo and Social Media -->
      <div class="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
        <!-- Logo Section -->
        <div class="flex justify-center md:justify-start">
          <NuxtLink to="/">
            <img
              src="https://economy.ams.com.kh/wp-content/uploads/2022/09/APSARA-MEDIA-SERVICES-COLOUR-FULL-H58.svg"
              alt="Apsara Media Services Logo"
              class="h-14"
            />
          </NuxtLink>
        </div>
  
        <!-- Social Media Links -->
        <div class="flex justify-center md:justify-end flex-wrap gap-x-4 gap-y-2 text-gray-700">
          <a href="#" class="flex items-center space-x-2 hover:text-gray-900">
            <i class="fab fa-facebook"></i>
            <span>Facebook</span>
          </a>
          <a href="#" class="flex items-center space-x-2 hover:text-gray-900">
            <i class="fab fa-twitter"></i>
            <span>Twitter</span>
          </a>
          <a href="#" class="flex items-center space-x-2 hover:text-gray-900">
            <i class="fab fa-instagram"></i>
            <span>Instagram</span>
          </a>
          <a href="#" class="flex items-center space-x-2 hover:text-gray-900">
            <i class="fab fa-tiktok"></i>
            <span>TikTok</span>
          </a>
          <a href="#" class="flex items-center space-x-2 hover:text-gray-900">
            <i class="fab fa-telegram"></i>
            <span>Telegram</span>
          </a>
          <a href="#" class="flex items-center space-x-2 hover:text-gray-900">
            <i class="fab fa-youtube"></i>
            <span>YouTube</span>
          </a>
        </div>
      </div>
  
      <!-- Underline Divider -->
      <div class="border-b border-gray-300 my-4"></div>
  
      <!-- Middle Section: Footer Links -->
      <div class="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <!-- Column 1: AMS Economy -->
        <div>
          <h3 class="font-semibold text-gray-900 mb-4 text-lg khmer-font">AMS Economy</h3>
          <!-- Two Column Layout for AMS Economy Links -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            <ul class="space-y-2 text-gray-600 khmer-font">
              <li><NuxtLink to="#" class="hover:text-red-500">សេដ្ឋកិច្ច</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-red-500">ហិរញ្ញវត្ថុ</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-red-500">អចលនទ្រព្យ</NuxtLink></li>
            </ul>
            <ul class="space-y-2 text-gray-600 khmer-font">
              <li><NuxtLink to="#" class="hover:text-red-500">ជំនួញ</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-red-500">អាជីវកម្មថ្មី និងនវានុវត្ត</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-red-500">អត្ថបទពាណិជ្ជកម្ម</NuxtLink></li>
            </ul>
          </div>
        </div>
  
        <!-- Column 2: AMS Group -->
        <div>
          <h3 class="font-semibold text-gray-900 mb-4 text-lg khmer-font">បណ្តាញព័ត៌មានផ្សេងៗទៀតពី AMS GROUP
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            <ul class="space-y-2 text-gray-600">
              <li><NuxtLink to="#" class="hover:text-red-500">AMS Education</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-red-500">AMS Economy</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-red-500">AMS Infotainment</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-red-500">AMS Khmer Civilization</NuxtLink></li>
            </ul>
            <ul class="space-y-2 text-gray-600">
              <li><NuxtLink to="#" class="hover:text-red-500">AMS Central</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-red-500">AMS Sports</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-red-500">AMS TV11</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-red-500">AMS Radio</NuxtLink></li>
            </ul>
          </div>
        </div>
        <!-- Column 3: Third Section in Khmer -->
        <div>
          <h3 class="font-semibold text-gray-900 mb-4 text-lg khmer-font">ស្វែងយល់បន្ថែម</h3>
          <ul class="space-y-2 text-gray-600 khmer-font">
            <li><NuxtLink to="#" class="hover:text-red-500">ទំនាក់ទំនង</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-red-500">សំនួរដែលតែងសួរ</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-red-500">ផ្នែកការងារផ្សេងៗ</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-red-500">ប្រើប្រាស់គន្លឹះ</NuxtLink></li>
          </ul>
        </div>
      </div>
  
      <!-- Bottom Section: Copyright -->
      <div class="bg-black py-4 mt-8">
        <div class="container mx-auto text-center text-gray-500 text-sm khmer-font">
          &copy; 2020 - 2024 Apsara Media Services. All rights reserved.
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  