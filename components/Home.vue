<template>
    <div class="bg-gray-50 py-8">
      <div class="container mx-auto">
        <!-- Header Section -->
        <div class="flex items-center justify-between mb-4 border-b-2 border-gray-300 pb-2">
          <h1 class="text-3xl font-bold khmer-font">
            ព្រឹត្តិការណ៍ប្រចាំថ្ងៃ
          </h1>
  
          <!-- Links on the Right -->
          <div class="space-x-4">
            <NuxtLink to="/today" class="text-blue-600 hover:underline khmer-font">ថ្ងៃនេះ</NuxtLink>
            <NuxtLink to="/yesterday" class="text-blue-600 hover:underline khmer-font">ម្សិលមិញ</NuxtLink>
            <NuxtLink to="/daybeforeyesterday" class="text-blue-600 hover:underline khmer-font">ម្សិលម្ងៃ</NuxtLink>
          </div>
        </div>
  
        <!-- Grid Content Below -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Large Main News Item -->
          <div class="lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
            <NuxtLink to="/post/main">
              <img
                src="https://economy.ams.com.kh/wp-content/uploads/2024/08/photo1683797690.jpeg"
                alt="Main News Image"
                class="w-full h-96 object-cover"
              />
            </NuxtLink>
            <div class="p-4">
              <NuxtLink to="/post/main" class="block">
                <h2 class="text-lg font-semibold mb-2 khmer-font hover:text-red-500">
                ខេត្ត​កែប នឹង​​មានឆ្នេរថ្មីប្រវែងជិត​ ៣គីឡូម៉ែត្រ​ ជួយជំរុញ​សក្ដានុពល​ក្នុងតំបន់កាន់តែទាក់​ទាញ
                </h2>
              </NuxtLink>
              <p class="text-gray-600 khmer-font">ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច</p>
            </div>
          </div>
  
          <!-- Smaller News Items (4 in total) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-1">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <NuxtLink to="/post/1">
                <img
                  src="https://economy.ams.com.kh/wp-content/uploads/2024/08/gettyimages-2166089779.jpg"
                  alt="News Image"
                  class="w-full h-48 object-cover"
                />
              </NuxtLink>
              <div class="p-4">
                <NuxtLink to="/post/1" class="block">
                  <h2 class="text-lg font-semibold mb-2 khmer-font hover:text-red-500">
                    ប្រជាពលរដ្ឋចង់ដឹងពីកំហុសបច្ចេកទេសនៅក្នុង...
                  </h2>
                </NuxtLink>
                <p class="text-gray-600 khmer-font">ព្រឹត្តិការណ៍, ហិរញ្ញវត្ថុ</p>
              </div>
            </div>
  
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <NuxtLink to="/post/2">
                <img
                  src="https://economy.ams.com.kh/wp-content/uploads/2024/08/Scam.jpg"
                  alt="News Image"
                  class="w-full h-48 object-cover"
                />
              </NuxtLink>
              <div class="p-4">
                <NuxtLink to="/post/2" class="block">
                  <h2 class="text-lg font-semibold mb-2 khmer-font hover:text-red-500">
                    អ្នកជំនាញប្រាប់ថា ទីភ្នាក់ងារអន្តរជាតិ CDC...
                  </h2>
                </NuxtLink>
                <p class="text-gray-600 khmer-font">ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច</p>
              </div>
            </div>
  
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <NuxtLink to="/post/3">
                <img
                  src="https://economy.ams.com.kh/wp-content/uploads/2024/08/LYNXMPEG970ID_L.jpg"
                  alt="News Image"
                  class="w-full h-48 object-cover"
                />
              </NuxtLink>
              <div class="p-4">
                <NuxtLink to="/post/3" class="block">
                  <h2 class="text-lg font-semibold mb-2 khmer-font hover:text-red-500">
                    ប្រធានក្រុម NASA បញ្ជាក់ពីតម្រូវការសំខាន់បំផុត...
                  </h2>
                </NuxtLink>
                <p class="text-gray-600 khmer-font">ព្រឹត្តិការណ៍, ពាណិជ្ជកម្ម</p>
              </div>
            </div>
  
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <NuxtLink to="/post/4">
                <img
                  src="https://economy.ams.com.kh/wp-content/uploads/2024/08/2024-08-15-14.36.10.jpg"
                  alt="News Image"
                  class="w-full h-48 object-cover"
                />
              </NuxtLink>
              <div class="p-4">
                <NuxtLink to="/post/4" class="block">
                  <h2 class="text-lg font-semibold mb-2 khmer-font hover:text-red-500">
                    ប្រជាពលរដ្ឋចង់ដឹងពីកំហុសបច្ចេកទេសនៅក្នុង...
                  </h2>
                </NuxtLink>
                <p class="text-gray-600 khmer-font">ព្រឹត្តិការណ៍, ពាណិជ្ជកម្ម</p>
              </div>
            </div>
          </div>
        </div>
        <!-- underline see more  -->
        <div class="relative flex items-center justify-center mt-12 mb-8">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative bg-gradient-to-r from-red-600 to-red-400 text-white px-6 py-2 rounded-full shadow-lg">
          <NuxtLink to="/#" class="text-white font-semibold khmer-font">
            មើលទាំងអស់
          </NuxtLink>
        </div>
      </div>
      <!-- fixxx underline -->
      <div class="container mx-auto px-4 py-8">
        <!-- Main Grid Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Left Sidebar (News List) -->
        <div class="lg:col-span-1 space-y-6">
            <!-- Header Section -->
            <div class="border-b-2 border-gray-300 pb-2 flex justify-between items-center">
            <h1 class="text-2xl lg:text-3xl font-bold khmer-font">ព័ត៌មានពេញនិយម</h1>
            <NuxtLink to="/#" class="text-gray-500 hover:text-black khmer-font">
                មើលព័ត៌មានផ្សេងទៀត
            </NuxtLink>
            </div>

            <!-- Articles List -->
            <div v-for="(article, index) in articles" :key="index" class="flex items-start space-x-4">
            <!-- Article Image -->
            <img :src="article.image" alt="Article Image" class="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg" />

            <!-- Article Text -->
            <div class="flex-1">
                <NuxtLink :to="article.link" class="block font-bold hover:underline khmer-font">
                {{ article.title }}
                </NuxtLink>
                <p class="text-blue-600 khmer-font">{{ article.category }}</p>
                <p class="text-gray-500 text-sm">{{ article.date }}</p>
            </div>
            </div>
        </div>

        <!-- Right Content (Featured Article or Banner) -->
        <div class="lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
            <!-- New Line with Two Words and Underline -->
            <div class="flex justify-between items-center p-4 border-b-2 border-gray-300">
            <h2 class="text-xl font-bold khmer-font">របាយការណ៍ថ្មីៗ</h2>
            <NuxtLink to="/#" class="text-blue-500 hover:text-blue-700 khmer-font">
                មើលទាំងអស់
            </NuxtLink>
            </div>
            <img
            src="https://economy.ams.com.kh/wp-content/uploads/2023/11/01_ECOBU006_CPT.jpg"
            alt="Featured Article Image"
            class="w-full h-64 lg:h-96 object-cover"
            />
            <div class="p-4">
          <NuxtLink to="/#" class="block">
            <h2 class="text-2xl font-bold mb-2 khmer-font hover:text-blue-500">
              អាជីវកម្មសំបុកគ្រាប់...
            </h2>
          </NuxtLink>
          <p class="text-gray-600 khmer-font">
            សំណុំបែបបទនៃការធ្វើអាជីវកម្មនេះត្រូវបាន...
          </p>
          <p class="text-gray-500 text-sm mt-2 khmer-font">
            ជំនួញ, បទយកការណ៍ - 15/08/2024
          </p>
        </div>
        </div>      
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import VFooter from './VFooter.vue';

  export default {
    name: 'Home',
    data() {
    return {
      articles: [
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2023/05/Russiasagricultural.jpg',
          title: 'Article 1 Title Here',
          link: '/#',
          category: 'ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច',
          date: '15/08/2024',
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2021/04/photo_2021-04-20_17-00-08.jpg.webp',
          title: 'Article 2 Title Here',
          link: '/#',
          category: 'ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច',
          date: '15/08/2024',
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2021/04/photo_2021-04-21_09-49-17.jpg.webp',
          title: 'Article 2 Title Here',
          link: '/#',
          category: 'ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច',
          date: '15/08/2024',
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2022/12/Constructionsite.jpg.webp',
          title: 'Article 2 Title Here',
          link: '/#',
          category: 'ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច',
          date: '15/08/2024',
        },
        // Add more articles as needed
      ],
    };
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
  
  /* Custom hover effect */
  .hover\:text-red-500:hover {
    color: #ef4444;
  }
  </style>
  