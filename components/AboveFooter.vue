<template>
    <div>
      <!-- Other Content -->
  
      <!-- News Section -->
      <section class="container mx-auto px-4 py-8">
        <!-- Heading and clickable Khmer text links -->
        <div class="flex justify-between items-center mb-6">
          <!-- Heading without underline -->
          <h2 class="text-2xl font-semibold khmer-font">អត្ថបទថ្មីៗដែលលោកអ្នកគួរយល់ដឹង</h2>
          
          <!-- Clickable Khmer Text Links on the Right with line alignment -->
          <div class="flex items-center space-x-4 text-sm khmer-font border-b border-gray-800 pb-1">
            <NuxtLink to="#" class="text-gray-700 hover:text-red-500">សេដ្ឋកិច្ច</NuxtLink>
            <NuxtLink to="#" class="text-gray-700 hover:text-red-500">ហិរញ្ញវត្ថុ</NuxtLink>
            <NuxtLink to="#" class="text-gray-700 hover:text-red-500">អចលនទ្រព្យ</NuxtLink>
            <NuxtLink to="#" class="text-gray-700 hover:text-red-500">ជំនួញ</NuxtLink>
            <NuxtLink to="#" class="text-gray-700 hover:text-red-500">អាជីវកម្ម និងនវានុវត្ត</NuxtLink>
            <NuxtLink to="#" class="text-gray-700 hover:text-red-500">អត្ថបទពាណិជ្ជកម្ម</NuxtLink>
          </div>
        </div>
  
        <!-- News Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="news-item">
            <NuxtLink to="#">
            <img src="https://economy.ams.com.kh/wp-content/uploads/2024/08/LYNXMPEG970ID_L.jpg" alt="News Image" class="w-full h-48 object-cover mb-4">
            <h3 class="text-lg font-semibold mb-2 khmer-font">កំណើនសេដ្ឋកិច្ចបារាំងក្នុងត្រីមាសទី ៣</h3>
            <p class="text-gray-600 khmer-font">ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច • 15/08/2024</p>
            </NuxtLink>
          </div>
          <div class="news-item">
            <NuxtLink to="#">
            <img src="https://economy.ams.com.kh/wp-content/uploads/2024/08/2024-08-15-14.36.10.jpg" alt="News Image" class="w-full h-48 object-cover mb-4">
            <h3 class="text-lg font-semibold mb-2 khmer-font">វិស័យអាហាររបស់អាម៉េរិក បានឈានជើងចូល</h3>
            <p class="text-gray-600 khmer-font">ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច • 15/08/2024</p>
            </NuxtLink>
          </div>
          <div class="news-item">
            <NuxtLink to="#">
            <img src="https://economy.ams.com.kh/wp-content/uploads/2024/08/photo_2023-11-03_09-13-13.jpeg" alt="News Image" class="w-full h-48 object-cover mb-4">
            <h3 class="text-lg font-semibold mb-2 khmer-font">អ្នកជំនាញ ៖ ការតភ្ជាប់ប្រព័ន្ធចែករំលែកទិន្នន័យ CDC</h3>
            <p class="text-gray-600 khmer-font">ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច • 15/08/2024</p>
            </NuxtLink>
          </div>
          <div class="news-item">
            <NuxtLink to="#">
            <img src="https://economy.ams.com.kh/wp-content/uploads/2024/08/gettyimages-2166089779.jpg" alt="News Image" class="w-full h-48 object-cover mb-4">
            <h3 class="text-lg font-semibold mb-2 khmer-font">នាយករដ្ឋមន្ត្រីថៃទទួលកំហុស និងព្រមដើរចេញ</h3>
            <p class="text-gray-600 khmer-font">ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច • 15/08/2024</p>
            </NuxtLink>
          </div>
          <!-- More News Items -->
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-gray-100 py-8">
        <!-- Footer content goes here -->
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PageWithNewsAndFooter',
  };
  </script>
  
  <style scoped>
  /* Import Tailwind CSS */
  @import "@/assets/css/tailwind.css";
  
  /* Import Battambang font for Khmer text */
  @import url('https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&display=swap');
  
  /* Apply Battambang font to Khmer text */
  .khmer-font {
    font-family: 'Battambang', sans-serif;
  }
  </style>
  