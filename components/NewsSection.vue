<template>
  <div>
    <!-- News Section -->
    <section class="container mx-auto px-4 py-8">
      <!-- Heading and Clickable Khmer Text Links -->
      <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
        <h2 class="text-2xl font-semibold khmer-font mb-4 lg:mb-0 text-gray-900 dark:text-gray-100">
          អត្ថបទពាណិជ្ជកម្ម
        </h2>
        
        <!-- Clickable Links -->
        <div class="flex flex-wrap space-x-4 text-sm khmer-font border-b border-gray-800 dark:border-gray-700 pb-1">
          <NuxtLink to="#" class="text-gray-700 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400">
            សេដ្ឋកិច្ច
          </NuxtLink>
          <NuxtLink to="#" class="text-gray-700 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400">
            ហិរញ្ញវត្ថុ
          </NuxtLink>
          <NuxtLink to="#" class="text-gray-700 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400">
            អចលនទ្រព្យ
          </NuxtLink>
          <NuxtLink to="#" class="text-gray-700 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400">
            ជំនួញ
          </NuxtLink>
          <NuxtLink to="#" class="text-gray-700 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400">
            អាជីវកម្ម និងនវានុវត្ត
          </NuxtLink>
          <NuxtLink to="#" class="text-gray-700 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400">
            អត្ថបទពាណិជ្ជកម្ម
          </NuxtLink>
        </div>
      </div>

      <!-- News Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="news-item">
          <NuxtLink to="#">
            <img
              src="https://economy.ams.com.kh/wp-content/uploads/2024/08/LYNXMPEG970ID_L.jpg"
              alt="News Image"
              class="w-full h-48 object-cover mb-4"
            />
            <h3 class="text-lg font-semibold mb-2 khmer-font text-gray-900 dark:text-gray-100 hover:text-red-500 dark:hover:text-red-400">
              កំណើនសេដ្ឋកិច្ចបារាំងក្នុងត្រីមាសទី ៣
            </h3>
            <p class="text-gray-600 dark:text-gray-400 khmer-font">
              ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច • 15/08/2024
            </p>
          </NuxtLink>
        </div>

        <div class="news-item">
          <NuxtLink to="#">
            <img
              src="https://economy.ams.com.kh/wp-content/uploads/2024/08/2024-08-15-14.36.10.jpg"
              alt="News Image"
              class="w-full h-48 object-cover mb-4"
            />
            <h3 class="text-lg font-semibold mb-2 khmer-font text-gray-900 dark:text-gray-100 hover:text-red-500 dark:hover:text-red-400">
              វិស័យអាហាររបស់អាម៉េរិក បានឈានជើងចូល
            </h3>
            <p class="text-gray-600 dark:text-gray-400 khmer-font">
              ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច • 15/08/2024
            </p>
          </NuxtLink>
        </div>

        <div class="news-item">
          <NuxtLink to="#">
            <img
              src="https://economy.ams.com.kh/wp-content/uploads/2024/08/photo_2023-11-03_09-13-13.jpeg"
              alt="News Image"
              class="w-full h-48 object-cover mb-4"
            />
            <h3 class="text-lg font-semibold mb-2 khmer-font text-gray-900 dark:text-gray-100 hover:text-red-500 dark:hover:text-red-400">
              អ្នកជំនាញ ៖ ការតភ្ជាប់ប្រព័ន្ធចែករំលែកទិន្នន័យ CDC
            </h3>
            <p class="text-gray-600 dark:text-gray-400 khmer-font">
              ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច • 15/08/2024
            </p>
          </NuxtLink>
        </div>

        <div class="news-item">
          <NuxtLink to="#">
            <img
              src="https://economy.ams.com.kh/wp-content/uploads/2024/08/gettyimages-2166089779.jpg"
              alt="News Image"
              class="w-full h-48 object-cover mb-4"
            />
            <h3 class="text-lg font-semibold mb-2 khmer-font text-gray-900 dark:text-gray-100 hover:text-red-500 dark:hover:text-red-400">
              នាយករដ្ឋមន្ត្រីថៃទទួលកំហុស និងព្រមដើរចេញ
            </h3>
            <p class="text-gray-600 dark:text-gray-400 khmer-font">
              ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច • 15/08/2024
            </p>
          </NuxtLink>
        </div>

        <!-- Add more news items here as needed -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NewsSection',
};
</script>

<style scoped>
/* Custom styles can go here if needed */
.news-item:hover h3 {
  transition: color 0.3s;
}
</style>
