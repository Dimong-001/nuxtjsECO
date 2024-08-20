<template>
    <div class="bg-gray-50 py-8">
      <div class="container mx-auto px-4">
        <!-- Header Section -->
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-4 border-b-2 border-gray-300 pb-2">
          <h1 class="text-2xl lg:text-3xl font-bold khmer-font mb-4 lg:mb-0">
            ព្រឹត្តិការណ៍ប្រចាំថ្ងៃ
          </h1>
  
          <!-- Links on the Right -->
          <div class="space-x-4">
            <NuxtLink to="/#" class="text-blue-600 hover:underline khmer-font">ថ្ងៃនេះ</NuxtLink>
            <NuxtLink to="/#" class="text-blue-600 hover:underline khmer-font">ម្សិលមិញ</NuxtLink>
            <NuxtLink to="/#" class="text-blue-600 hover:underline khmer-font">ម្សិលម្ងៃ</NuxtLink>
          </div>
        </div>
  
        <!-- Grid Content Below -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <!-- Large Main News Item -->
          <div class="lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
            <NuxtLink to="/post/main">
              <img
                src="https://economy.ams.com.kh/wp-content/uploads/2024/08/photo1683797690.jpeg"
                alt="Main News Image"
                class="w-full h-64 lg:h-96 object-cover"
                loading="lazy"
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
  
          <!-- Smaller News Items (4 Columns) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:col-span-2">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <NuxtLink to="#">
                <img
                  src="https://economy.ams.com.kh/wp-content/uploads/2024/08/gettyimages-2166089779.jpg"
                  alt="News Image"
                  class="w-full h-48 object-cover"
                  loading="lazy"
                />
              </NuxtLink>
              <div class="p-4">
                <NuxtLink to="#" class="block">
                  <h2 class="text-lg font-semibold mb-2 khmer-font hover:text-red-500">
                    ប្រជាពលរដ្ឋចង់ដឹងពីកំហុសបច្ចេកទេសនៅក្នុង...
                  </h2>
                </NuxtLink>
                <p class="text-gray-600 khmer-font">ព្រឹត្តិការណ៍, ហិរញ្ញវត្ថុ</p>
              </div>
            </div>
  
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <NuxtLink to="#">
                <img
                  src="https://economy.ams.com.kh/wp-content/uploads/2024/08/Scam.jpg"
                  alt="News Image"
                  class="w-full h-48 object-cover"
                  loading="lazy"
                />
              </NuxtLink>
              <div class="p-4">
                <NuxtLink to="#" class="block">
                  <h2 class="text-lg font-semibold mb-2 khmer-font hover:text-red-500">
                    អ្នកជំនាញប្រាប់ថា ទីភ្នាក់ងារអន្តរជាតិ CDC...
                  </h2>
                </NuxtLink>
                <p class="text-gray-600 khmer-font">ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច</p>
              </div>
            </div>
  
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <NuxtLink to="#">
                <img
                  src="https://economy.ams.com.kh/wp-content/uploads/2024/08/LYNXMPEG970ID_L.jpg"
                  alt="News Image"
                  class="w-full h-48 object-cover"
                  loading="lazy"
                />
              </NuxtLink>
              <div class="p-4">
                <NuxtLink to="#" class="block">
                  <h2 class="text-lg font-semibold mb-2 khmer-font hover:text-red-500">
                    ប្រធានក្រុម NASA បញ្ជាក់ពីតម្រូវការសំខាន់បំផុត...
                  </h2>
                </NuxtLink>
                <p class="text-gray-600 khmer-font">ព្រឹត្តិការណ៍, ពាណិជ្ជកម្ម</p>
              </div>
            </div>
  
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <NuxtLink to="#">
                <img
                  src="https://economy.ams.com.kh/wp-content/uploads/2024/08/2024-08-15-14.36.10.jpg"
                  alt="News Image"
                  class="w-full h-48 object-cover"
                  loading="lazy"
                />
              </NuxtLink>
              <div class="p-4">
                <NuxtLink to="#" class="block">
                  <h2 class="text-lg font-semibold mb-2 khmer-font hover:text-red-500">
                    ប្រជាពលរដ្ឋចង់ដឹងពីកំហុសបច្ចេកទេសនៅក្នុង...
                  </h2>
                </NuxtLink>
                <p class="text-gray-600 khmer-font">ព្រឹត្តិការណ៍, ពាណិជ្ជកម្ម</p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Underline 'See More' -->
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
      </div>
      <Section/>
      <NewsBlogSection/>
      <PictureAd/>
      <NewsBlogNews01/>
      <khmer-insider-blog/>
      <news-blog-news-02/>
      <news-blog-news-03/>
      <NewsSection/>     
    </div> 
  </template>
  
  <script>
import KhmerInsiderBlog from './KhmerInsiderBlog.vue';
import NewsBlogNews02 from './NewsBlogNews02.vue';
import NewsBlogNews03 from './NewsBlogNews03.vue';
  export default {
  components: { KhmerInsiderBlog, NewsBlogNews02, NewsBlogNews03 },
    name: 'Home',
  };
  </script>