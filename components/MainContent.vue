<template>
  <div class="bg-gray-50 dark:bg-gray-900 py-8">
    <!-- Loading State -->
    <div v-if="isLoading" class="text-center py-16">Loading...</div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center text-red-500 py-16">{{ error }}</div>

    <!-- Main Content -->
    <div v-else>
      <div class="container mx-auto px-4">
        <!-- Header Section -->
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
          <h1 class="text-2xl lg:text-3xl font-bold khmer-font mb-4 lg:mb-0 text-gray-900 dark:text-gray-100">
            ព្រឹត្តិការណ៍ប្រចាំថ្ងៃ
          </h1>
          <div class="space-x-4">
            <NuxtLink to="/#" class="text-blue-600 dark:text-blue-400 hover:underline khmer-font">ថ្ងៃនេះ</NuxtLink>
            <NuxtLink to="/#" class="text-blue-600 dark:text-blue-400 hover:underline khmer-font">ម្សិលមិញ</NuxtLink>
            <NuxtLink to="/#" class="text-blue-600 dark:text-blue-400 hover:underline khmer-font">ម្សិលមង់</NuxtLink>
          </div>
        </div>

        <!-- Grid Content Below -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <!-- Large Main News Item -->
          <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <NuxtLink to="/post/main">
              <img src="https://economy.ams.com.kh/wp-content/uploads/2024/08/photo_2024-08-25_12-28-19.jpg" alt="Main News Image"
                class="w-full h-64 lg:h-96 object-cover" loading="lazy" />
            </NuxtLink>
            <div class="p-4">
              <NuxtLink to="/post/main" class="block">
                <h2 class="text-lg font-semibold mb-2 khmer-font hover:text-red-500 dark:hover:text-red-400 text-gray-900 dark:text-gray-100">
                  ស្ថាបនិក Telegram ចាប់ខ្លួននៅបារាំងភ្លាម រុស្ស៊ីស្នើសុំឲ្យមានការដោះលែង
                </h2>
              </NuxtLink>
              <p class="text-gray-600 dark:text-gray-400 khmer-font">ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច</p>
            </div>
          </div>

          <!-- Smaller News Items -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:col-span-2">
            <div v-for="(article, index) in fourArticles" :key="index" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <NuxtLink :to="article.link || '#'">
                <img :src="article.image || '/default-image.jpg'" alt="News Image" class="w-full h-48 object-cover" loading="lazy" />
              </NuxtLink>
              <div class="p-4">
                <NuxtLink :to="article.link || '#'" class="block">
                  <h2 class="text-lg font-semibold mb-2 khmer-font hover:text-red-500 dark:hover:text-red-400 text-gray-900 dark:text-gray-100">
                    {{ article.title || 'No title available' }}
                  </h2>
                </NuxtLink>
                <p class="text-gray-600 dark:text-gray-400 khmer-font">{{ article.category || 'No category' }}</p>
              </div>
            </div>
          </div>
        </div>
         
        <!-- Underline 'See More' -->
        <div class="relative flex items-center justify-center mt-12 mb-8">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300 dark:border-gray-700"></div>
          </div>
          <div class="relative bg-gradient-to-r from-red-600 to-red-400 text-white px-6 py-2 rounded-full shadow-lg">
            <NuxtLink to="/#" class="text-white font-semibold khmer-font">មើលទាំងអស់</NuxtLink>
          </div>
        </div>
      </div>

      <!-- Bottom Section with Articles and Featured Content -->
      <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left Sidebar (News List) -->
          <div class="lg:col-span-1 space-y-6">
            <div class="border-b-2 border-gray-300 dark:border-gray-700 pb-2 flex justify-between items-center">
              <h1 class="text-2xl lg:text-3xl font-bold khmer-font text-gray-900 dark:text-gray-100">ព័ត៌មានពេញនិយម</h1>
              <NuxtLink to="/#" class="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white khmer-font">មើលព័ត៌មានផ្សេងទៀត</NuxtLink>
            </div>

            <div v-if="limitedArticles.length" class="space-y-6">
              <div v-for="(article, index) in limitedArticles" :key="index" class="flex items-start space-x-4">
                <img :src="article.image || '/default-image.jpg'" alt="Article Image"
                  class="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg" loading="lazy" />
                <div class="flex-1">
                  <NuxtLink :to="article.link || '/#'" class="block font-bold hover:underline khmer-font dark:text-gray-100 dark:hover:text-blue-400">
                    {{ article.title || 'No title available' }}
                  </NuxtLink>
                  <p class="text-gray-500 text-sm khmer-font dark:text-gray-400">{{ article.date || 'No date' }}</p>
                </div>
              </div>
              <!-- Responsive Swiper Slider Under the Articles -->
              <div class="mt-12">
    <div class="rounded-lg shadow-lg overflow-hidden">
      <img 
        src="/Images/ads-01.png" 
        alt="Advertisement Image" 
        class="w-full h-auto object-cover" 
        loading="lazy" 
      />
    </div>
    <!-- If you have more images, add more image elements here -->
  </div>
            </div>
            
            <!-- Empty State -->
            <div v-else class="text-gray-500 dark:text-gray-400 khmer-font">គ្មានព័ត៌មាន</div>
          </div>

          <!-- Right Content (Featured Article or Banner) -->
          <div class="lg:col-span-2 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
            <div class="flex justify-between items-center p-4 border-b-2 border-gray-300 dark:border-gray-700">
              <h2 class="text-xl font-bold khmer-font text-gray-900 dark:text-gray-100">របាយការណ៍ថ្មីៗ</h2>
              <NuxtLink to="/#" class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 khmer-font">មើលទាំងអស់</NuxtLink>
            </div>
            <img src="https://economy.ams.com.kh/wp-content/uploads/2023/11/01_ECOBU006_CPT.jpg" alt="Featured Article Image"
              class="w-full h-64 lg:h-96 object-cover" loading="lazy" />
            <div class="p-4">
              <NuxtLink to="/#">
                <h2 class="text-2xl font-bold mb-2 khmer-font hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400">អាជីវកម្មយកសំបុកត្រចៀកកាំក្នុងស្រុកកំពុងមានទីផ្សារ</h2>
              </NuxtLink>
              <p class="text-gray-600 dark:text-gray-400 khmer-font">គ្រាន់តែឮពាក្យថា សំបុកត្រចៀកកាំ ភាគច្រើនគេតែងតែគិតពីរសជាតិ និងគុណតម្លៃចំពោះសុខភាព...</p>
              <p class="text-gray-500 text-sm mt-2 dark:text-gray-400 khmer-font">ជំនួញ, បទយកការណ៍ - 15/08/2024</p>
            </div>

            <!-- Five-Column Articles Section -->
            <div class="container mx-auto px-4 py-8">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-1 gap-6">
                <div v-for="(article, index) in fiveColumnArticles" :key="index" class="flex flex-col h-full items-center lg:flex-row lg:items-start">
                  <img :src="article.image || '/default-image.jpg'" alt="Article Image"
                    class="w-full h-48 object-cover rounded-lg lg:w-[250px] lg:h-[150px]" loading="lazy" />
                  <div class="flex-1 mt-4 lg:mt-0 lg:ml-4">
                    <NuxtLink :to="article.link || '/#'" class="block font-bold mb-2 khmer-font hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400">
                      {{ article.title || 'No title available' }}
                    </NuxtLink>
                    <p class="text-gray-500 text-sm khmer-font dark:text-gray-400">{{ article.date || 'No date' }}</p>
                    <p class="text-gray-600 dark:text-gray-400 khmer-font mt-2 line-clamp-2">{{ article.description || 'No description available' }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NewsBlogSection/>
    <PictureAd/>
    <NewsBlogNews01/>
    <KhmerInsiderBlog/>
    <NewsBlogNews02/>
    <NewsBlogNews03/>
    <NewsSection/>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';

export default {
  name: 'MainContent',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      articles: [],
      isLoading: true,
      error: null,
    };
  },
  async created() {
    try {
      // Ensure the JSON file is accessible under the public folder
      const response = await fetch('/articles.json');
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      this.articles = await response.json();
    } catch (error) {
      this.error = 'Error loading articles. Please try again later.';
      console.error('Error fetching articles:', error);
    } finally {
      this.isLoading = false;
    }
  },
  computed: {
    // Get the first 4 articles for the smaller news items
    fourArticles() {
      return this.articles.slice(0, 4);
    },
    // Get the first 10 articles for another section
    limitedArticles() {
      return this.articles.slice(0, 10);
    },
    // Get exactly 5 articles for the five-column section
    fiveColumnArticles() {
      return this.articles.slice(0, 8);
    },
  },
};
</script>


<style scoped>
/* Add any necessary scoped styles */
</style>
