<template>
    <div class="bg-gray-50 py-8">
      <div class="container mx-auto px-4">
        <!-- Bottom Section with Articles and Featured Content -->
        <div class="container mx-auto px-4 py-8">
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
  
              <!-- Articles List with Space Between Articles -->
              <div v-if="limitedArticles.length" class="space-y-6"> <!-- Added space-y-6 -->
                <div 
                  v-for="(article, index) in limitedArticles" 
                  :key="index" 
                  class="flex items-start space-x-4"
                >
                  <img 
                    :src="article.image || '/default-image.jpg'" 
                    alt="Article Image" 
                    class="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg" 
                    loading="lazy" 
                  />
                  <div class="flex-1">
                    <NuxtLink 
                      :to="article.link || '/#'" 
                      class="block font-bold hover:underline khmer-font"
                    >
                      {{ article.title || 'No title available' }}
                    </NuxtLink>
                    <p class="text-blue-600 khmer-font">{{ article.category || 'No category' }}</p>
                    <p class="text-gray-500 text-sm">{{ article.date || 'No date' }}</p>
                  </div>
                </div>
  
                <!-- Responsive Swiper Slider Under the Articles -->
                <div class="mt-12">
                  <swiper
                    :slides-per-view="1"
                    :space-between="10"
                    breakpoints="{ 640: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 3, spaceBetween: 30 } }"
                    pagination="true"
                    navigation="true"
                    class="mySwiper"
                  >
                    <swiper-slide v-for="(article, index) in sliderArticles" :key="index">
                      <div class="bg-white p-4 rounded-lg shadow-lg">
                        <img 
                          :src="article.image || '/default-image.jpg'" 
                          alt="Article Image" 
                          class="w-full h-40 object-cover rounded-lg mb-4" 
                          loading="lazy" 
                        />
                        <h3 class="font-bold mb-2 khmer-font">{{ article.title || 'No title available' }}</h3>
                        <p class="text-gray-500 text-sm">{{ article.date || 'No date' }}</p>
                      </div>
                    </swiper-slide>
                  </swiper>
                </div>
              </div>
  
              <!-- Empty State -->
              <div v-else class="text-gray-500 khmer-font">គ្មានព័ត៌មាន</div>
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
                loading="lazy"
              />
              <div class="p-4">
                <NuxtLink to="/#">
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
  
              <!-- Five-Column Articles Section -->
              <div class="space-y-8 mt-8"> <!-- Added space-y-8 -->
                <div 
                  v-for="(article, index) in fiveColumnArticles" 
                  :key="index" 
                  class="flex items-start space-x-4"
                >
                  <img 
                    :src="article.image || '/default-image.jpg'" 
                    alt="Article Image" 
                    class="w-32 h-32 lg:w-48 lg:h-48 object-cover rounded-lg" 
                    loading="lazy" 
                  />
                  <div class="flex-1">
                    <NuxtLink 
                      :to="article.link || '/#'" 
                      class="block font-bold mb-2 khmer-font hover:text-blue-500"
                    >
                      {{ article.title || 'No title available' }}
                    </NuxtLink>
                    <p class="text-gray-500 text-sm khmer-font">{{ article.date || 'No date' }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  
  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        // Sample articles data
        articles: [
          {
            image: 'https://example.com/image1.jpg',
            title: 'អត្ថបទទីមួយ',
            link: '/article-1',
            category: 'ព័ត៌មានសំខាន់',
            date: '17/08/2024',
          },
          {
            image: 'https://example.com/image2.jpg',
            title: 'អត្ថបទទីពីរ',
            link: '/article-2',
            category: 'សេដ្ឋកិច្ច',
            date: '18/08/2024',
          },
          {
            image: 'https://example.com/image3.jpg',
            title: 'អត្ថបទទីបី',
            link: '/article-3',
            category: 'សង្គម',
            date: '19/08/2024',
          },
          {
            image: 'https://example.com/image4.jpg',
            title: 'អត្ថបទទីបួន',
            link: '/article-4',
            category: 'បច្ចេកវិទ្យា',
            date: '20/08/2024',
          },
          {
            image: 'https://example.com/image5.jpg',
            title: 'អត្ថបទទីប្រាំ',
            link: '/article-5',
            category: 'កីឡា',
            date: '21/08/2024',
          },
          {
            image: 'https://example.com/image6.jpg',
            title: 'អត្ថបទទីមួយនៅឆ្អឹង',
            link: '/article-6',
            category: 'សាសនា',
            date: '22/08/2024',
          },
          {
            image: 'https://example.com/image7.jpg',
            title: 'អត្ថបទទីពីរនៅខ្សែ',
            link: '/article-7',
            category: 'នយោបាយ',
            date: '23/08/2024',
          },
          {
            image: 'https://example.com/image8.jpg',
            title: 'អត្ថបទទីបីនិងក្តៅ',
            link: '/article-8',
            category: 'វប្បធម៌',
            date: '24/08/2024',
          },
          {
            image: 'https://example.com/image9.jpg',
            title: 'អត្ថបទទីបួននិងពោរពេញ',
            link: '/article-9',
            category: 'សេដ្ឋកិច្ច',
            date: '25/08/2024',
          },
          {
            image: 'https://example.com/image10.jpg',
            title: 'អត្ថបទទីដប់',
            link: '/article-10',
            category: 'សង្គម',
            date: '26/08/2024',
          },
          
          // Articles for `fiveColumnArticles` (Next 5)
          {
            image: 'https://example.com/image11.jpg',
            title: 'អត្ថបទទីមួយផ្សេង',
            link: '/article-11',
            category: 'ព័ត៌មានសំខាន់',
            date: '27/08/2024',
          },
          {
            image: 'https://example.com/image12.jpg',
            title: 'អត្ថបទទីពីរនៅផ្សេង',
            link: '/article-12',
            category: 'សេដ្ឋកិច្ច',
            date: '28/08/2024',
          },
          {
            image: 'https://example.com/image13.jpg',
            title: 'អត្ថបទទីបីនៅផ្សេង',
            link: '/article-13',
            category: 'សង្គម',
            date: '29/08/2024',
          },
          {
            image: 'https://example.com/image14.jpg',
            title: 'អត្ថបទទីបួននៅផ្សេង',
            link: '/article-14',
            category: 'បច្ចេកវិទ្យា',
            date: '30/08/2024',
          },
          {
            image: 'https://example.com/image15.jpg',
            title: 'អត្ថបទទីប្រាំផ្សេងទៀត',
            link: '/article-15',
            category: 'កីឡា',
            date: '31/08/2024',
          },
        ],
      };
    },
    computed: {
      // Get the first 10 articles for `limitedArticles`
      limitedArticles() {
        return this.articles.slice(0, 10);
      },
      // Get the next 5 articles for `fiveColumnArticles`
      fiveColumnArticles() {
        return this.articles.slice(10, 15);
      },
      // Get another 5 articles for the slider
      sliderArticles() {
        return this.articles.slice(5, 10);  // Adjust as needed for unique content
      },
    },
  };
  </script>
  
  <style scoped>
  /* Additional custom styles */
  .flex.items-start.space-x-4 {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .w-32.h-32 {
    width: 8rem;
    height: 8rem;
  }
  
  .w-48.h-48 {
    width: 12rem;
    height: 12rem;
  }
  
  .space-y-8 > * + * {
    margin-top: 2rem;
  }
  </style>
  