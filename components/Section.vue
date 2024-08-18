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
            <div v-if="limitedArticles.length" class="space-y-6">
              <div v-for="(article, index) in limitedArticles" :key="index" class="flex items-start space-x-4">
                <img 
                  :src="article.image || '/default-image.jpg'" 
                  alt="Article Image" 
                  class="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg" 
                  loading="lazy" 
                />
                <div class="flex-1">
                  <NuxtLink :to="article.link || '/#'" class="block font-bold hover:underline khmer-font">
                    {{ article.title || 'No title available' }}
                  </NuxtLink>
                  <!-- <p class="text-blue-600 khmer-font">{{ article.category || 'No category' }}</p> -->
                  <p class="text-gray-500 text-sm khmer-font">{{ article.date || 'No date' }}</p>
                </div>
              </div>
              <!-- Responsive Swiper Slider Under the Articles -->
              <div class="mt-12">
              <swiper
                :slides-per-view="1"
                :space-between="10"
                pagination="true"
                navigation="true"
                class="mySwiper"
              >
                <swiper-slide>
                  <div class="rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src="https://i.ibb.co/1ZMVHLr/Screenshot-2024-08-18-220145.png" 
                      alt="Advertisement Image" 
                      class="w-full h-auto object-cover" 
                      loading="lazy" 
                    />
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            </div>

            <!-- Empty State -->
            <div v-else class="text-gray-500 khmer-font">គ្មានព័ត៌មាន</div>
          </div>

          <!-- Right Content (Featured Article or Banner) -->
          <div class="lg:col-span-2 rounded-lg overflow-hidden bg-white shadow-lg">
            <!-- Header Section -->
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
                  អាជីវកម្មយកសំបុកត្រចៀកកាំក្នុងស្រុកកំពុងមានទីផ្សារ
                </h2>
              </NuxtLink>
              <p class="text-gray-600 khmer-font">
                គ្រាន់តែឮពាក្យថា សំបុកត្រចៀកកាំ ភាគច្រើនគេតែងតែគិតពីរសជាតិ និងគុណតម្លៃចំពោះសុខភាពដែលទទួលបានពីការទទួលទានភេសជ្ជៈ ឬអាហារដែលចម្រាញ់ចេញពីសំបុកត្រចៀកកាំ។
              </p>
              <p class="text-gray-500 text-sm mt-2 khmer-font">
                ជំនួញ, បទយកការណ៍ - 15/08/2024
              </p>
            </div>

            <!-- Five-Column Articles Section -->
            <div class="container mx-auto px-4 py-8">
              <!-- Responsive Grid with Single Column on Large and Extra-Large Screens -->
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-1 gap-6">
                <div v-for="(article, index) in fiveColumnArticles" :key="index" class="flex flex-col h-full items-center lg:flex-row lg:items-start">
                  <!-- Image with Conditional Sizing -->
                  <img 
                    :src="article.image || '/default-image.jpg'" 
                    alt="Article Image" 
                    class="w-full h-48 object-cover rounded-lg lg:w-[250px] lg:h-[150px] lg:object-cover" 
                    loading="lazy" 
                  />
                  <div class="flex-1 mt-4 lg:mt-0 lg:ml-4">
                    <NuxtLink 
                      :to="article.link || '/#'" 
                      class="block font-bold mb-2 khmer-font hover:text-blue-500"
                    >
                      {{ article.title || 'No title available' }}
                    </NuxtLink>
                    <p class="text-gray-500 text-sm khmer-font">{{ article.date || 'No date' }}</p>
                    <p class="text-gray-600 khmer-font mt-2 line-clamp-2">
                      {{ article.description || 'No description available' }}
                    </p>
                  </div>
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
import { Navigation, Pagination } from 'swiper/modules';

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
          image: 'https://economy.ams.com.kh/wp-content/uploads/2023/12/photo_2023-11-24-2.jpg',
          title: 'ប្រជាកសិករ រីករាយនឹងការប្រមូលផលស្រូវដោយទទួលបានតម្លៃខ្ពស់ជាងឆ្នាំមុនៗ',
          link: '/article-1',
          category: 'ព័ត៌មានសំខាន់',
          date: 'ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច • 17/08/2024',
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2022/08/SecuritiesRegulatorofCambodia.jpg.webp',
          title: 'និយ័ត​ករ​មូល​ប​ត្រ​កម្ពុជារៀបចំ​វគ្គ​បណ្តុះបណ្តាលជាប្រចាំដើម្បី​ផ្សព្វផ្សាយ និង​លើកកម្ពស់​​ផ្សា​រ',
          link: '/article-2',
          category: 'សេដ្ឋកិច្ច',
          date: 'ព្រឹត្តិការណ៍, ហិរញ្ញវត្ថុ • 17/08/2022',
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2021/12/s-1.jpg.webp',
          title: 'World Bank ៖ កម្ពុជា កំពុងស្តារសេដ្ឋកិច្ចឱ្យកាន់តែមានភាពល្អប្រសើរ បន្ទាប់ពីរងផលប៉ះពាល់',
          link: '/article-3',
          category: 'សង្គម',
          date: 'ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច • 09/12/2021',
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2022/03/war-pic.jpg.webp',
          title: 'ស្វែងយល់ពីសង្គ្រាមនៅអ៊ុយក្រែន និងផលប៉ះពាល់នៃការងើបឡើងវិញនៃសេដ្ឋកិច្ចសកលលោក',
          link: '/article-4',
          category: 'បច្ចេកវិទ្យា',
          date: 'ព្រឹត្តិការណ៍, អាជីវកម្មថ្មី និងនវានុវត្ត • 02/03/2022',
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2023/07/banking_system-2048x1366.jpg',
          title: 'ប្រជាពលរដ្ឋមានទំនុកចិត្តកាន់តែខ្លាំងជាងមុនលើប្រព័ន្ធធនាគារនៅកម្ពុជា ទាំងមុន',
          link: '/article-5',
          category: 'កីឡា',
          date: 'ព្រឹត្តិការណ៍, ហិរញ្ញវត្ថុ • 25/07/2023',
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2024/01/ABA-basic-banking-new_22.jpg',
          title: 'ទំនុកចិត្តសាធារណៈជន គឺជាកត្តាចម្បងដែលនាំឱ្យវិស័យធនាគារដំណើរការបានល្អ',
          link: '/article-6',
          category: 'សាសនា',
          date: 'ព្រឹត្តិការណ៍, ហិរញ្ញវត្ថុ • 29/01/2024',
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2024/03/151500001.jpg',
          title: 'សញ្ញា​វិជ្ជមាន​ ! ​២ខែ​ដំបូង ឆ្នាំ២០២៤ ​គម្រោ​ងវិនិយោគ​ចំនួន ​​៦៩​ ត្រូវបានចុះបញ្ជី',
          link: '/article-7',
          category: 'នយោបាយ',
          date: 'ព្រឹត្តិការណ៍, អចលនទ្រព្យ • 13/03/2024',
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2024/07/lylyfoodcompanySME.jpg',
          title: 'ចំណុចសំខាន់ចំនួន ២ អាចជួយឱ្យម្ចាស់ MSMEs ឈរជើងក្នុងទីផ្សារបានរឹងមាំ ',
          link: '/article-8',
          category: 'វប្បធម៌',
          date: 'ព្រឹត្តិការណ៍, អចលនទ្រព្យ • 13/03/2024',
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2024/07/lylyfoodcompanySME.jpg',
          title: 'អត្ថបទទីបួននិងពោរពេញ',
          link: '/article-9',
          category: 'សេដ្ឋកិច្ច',
          date: '25/08/2024',
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2024/07/lylyfoodcompanySME.jpg',
          title: 'អត្ថបទទីដប់',
          link: '/article-10',
          category: 'សង្គម',
          date: '26/08/2024',
        },
        // Five-column articles
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2023/09/01_ECOBU007_CPT.jpg',
          title: 'អាជីវកម្មយកសំបុកត្រចៀកកាំក្នុងស្រុកកំពុងមានទីផ្សារ',
          link: '/article-11',
          category: 'ព័ត៌មានសំខាន់',
          date: 'ជំនួញ, បទយកការណ៍ • 15/12/2023',
          description: 'គ្រាន់តែឮពាក្យថា សំបុកត្រចៀកកាំ ភាគច្រើនគេតែងតែគិតពីរសជាតិ និងគុណតម្លៃចំពោះសុខភាពដែលទទួលបានពីការទទួលទានភេសជ្ជៈ ឬអាហារដែលចម្រាញ់ចេញពីសំបុកត្រចៀកកាំ។'
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2023/09/02_ECOBU005_CPT.jpg',
          title: 'អាជីវកម្មថ្មី ប្លែក យកក្រដាសលុយរៀលច្នៃជាបាច់ផ្កាគួរឱ្យទាក់ទាញ កំពុងទទួលបានការគាំទ្រខ្លាំង',
          link: '/article-12',
          category: 'សេដ្ឋកិច្ច',
          date: 'ជំនួញ, បទយកការណ៍ • 20/10/2023',
          description: 'អត្ថបទនេះពិភាក្សាអំពីវិស័យសេដ្ឋកិច្ចក្នុងស្រុក និងផលប៉ះពាល់របស់វាទៅលើប្រជាជន។'
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2023/08/01_ECOBU004_CPT.jpg',
          title: 'សិប្បកម្មកែច្នៃត្រីបឹងរំពេរ មានសមត្ថភាពកែច្នៃត្រីគ្រប់ប្រភេទ និងកំពុងជំរុញផលិតផលចូលទីផ្សារឱ្យបានច្រើន',
          link: '/article-13',
          category: 'សង្គម',
          date: 'ជំនួញ, បទយកការណ៍ • 15/09/2023',
          description: 'កំពង់ធំ ៖ សិប្បកម្មស្ត្រីកែច្នៃត្រីបឹងរំពេរ គឺជាសិប្បកម្មកែច្នៃត្រីមួយកន្លែងស្ថិតនៅភូមិចំបក់ ឃុំតាំងក្រសាំង ស្រុកសន្ទុក ខេត្តកំពង់ធំ បានប្រកាសថាខ្លួនមានសមត្ថភាពផលិតត្រីប្រកបដោយគុណភាព.....'
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2023/01/01_ECOBU003-COVER-POSTER.jpg',
          title: 'ក្រូចឆ្មារសហគមន៍ពោធិ៍សាត់ កំពុងមានតម្រូវការខ្ពស់តាមរយៈការលក់របស់សហគមន៍',
          link: '/article-14',
          category: 'បច្ចេកវិទ្យា',
          date: 'ជំនួញ, បទយកការណ៍ • 27/01/2023',
          description: 'ក្រូចឆ្មារ មានតម្រូវការទីផ្សារខ្ពស់ ទើបសហគមន៍មួយនៅខេត្តពោធិ៍សាត់បានប្រមូលផ្ដុំគ្នាដាំ និងចែកចាយក្រូចឆ្មារទៅកាន់អតិថិជនទូទាំងប្រទេស.....'
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2023/01/02_COVER-SLIDER.jpg',
          title: 'អាជីវកម្មកំប៉ុសគោក ចំណេញទាំងបរិស្ថាន ល្អទាំងដំណាំ ថែមទាំងលើកស្ទួយជីវភាពប្រជាជនក្នុងសហគមន៍',
          link: '/article-15',
          category: 'កីឡា',
          date: 'ជំនួញ, បទយកការណ៍ • 25/01/2023',
          description: 'អត្ថបទនេះលើកឡើងអំពីកីឡា និងការសម្តែងរបស់កីឡាករនៅក្នុងការប្រកួតថ្មីៗ។'
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2023/01/02_COVER-SLIDER.jpg',
          title: 'អាជីវកម្មកំប៉ុសគោក ចំណេញទាំងបរិស្ថាន ល្អទាំងដំណាំ ថែមទាំងលើកស្ទួយជីវភាពប្រជាជនក្នុងសហគមន៍',
          link: '/article-15',
          category: 'កីឡា',
          date: 'ជំនួញ, បទយកការណ៍ • 25/01/2023',
          description: 'អត្ថបទនេះលើកឡើងអំពីកីឡា និងការសម្តែងរបស់កីឡាករនៅក្នុងការប្រកួតថ្មីៗ។'
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2023/01/02_COVER-SLIDER.jpg',
          title: 'អាជីវកម្មកំប៉ុសគោក ចំណេញទាំងបរិស្ថាន ល្អទាំងដំណាំ ថែមទាំងលើកស្ទួយជីវភាពប្រជាជនក្នុងសហគមន៍',
          link: '/article-15',
          category: 'កីឡា',
          date: 'ជំនួញ, បទយកការណ៍ • 25/01/2023',
          description: 'អត្ថបទនេះលើកឡើងអំពីកីឡា និងការសម្តែងរបស់កីឡាករនៅក្នុងការប្រកួតថ្មីៗ។'
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2023/01/02_COVER-SLIDER.jpg',
          title: 'អាជីវកម្មកំប៉ុសគោក ចំណេញទាំងបរិស្ថាន ល្អទាំងដំណាំ ថែមទាំងលើកស្ទួយជីវភាពប្រជាជនក្នុងសហគមន៍',
          link: '/article-15',
          category: 'កីឡា',
          date: 'ជំនួញ, បទយកការណ៍ • 25/01/2023',
          description: 'អត្ថបទនេះលើកឡើងអំពីកីឡា និងការសម្តែងរបស់កីឡាករនៅក្នុងការប្រកួតថ្មីៗ។'
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2023/01/02_COVER-SLIDER.jpg',
          title: 'អាជីវកម្មកំប៉ុសគោក ចំណេញទាំងបរិស្ថាន ល្អទាំងដំណាំ ថែមទាំងលើកស្ទួយជីវភាពប្រជាជនក្នុងសហគមន៍',
          link: '/article-15',
          category: 'កីឡា',
          date: 'ជំនួញ, បទយកការណ៍ • 25/01/2023',
          description: 'អត្ថបទនេះលើកឡើងអំពីកីឡា និងការសម្តែងរបស់កីឡាករនៅក្នុងការប្រកួតថ្មីៗ។'
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2023/01/02_COVER-SLIDER.jpg',
          title: 'អាជីវកម្មកំប៉ុសគោក ចំណេញទាំងបរិស្ថាន ល្អទាំងដំណាំ ថែមទាំងលើកស្ទួយជីវភាពប្រជាជនក្នុងសហគមន៍',
          link: '/article-15',
          category: 'កីឡា',
          date: 'ជំនួញ, បទយកការណ៍ • 25/01/2023',
          description: 'អត្ថបទនេះលើកឡើងអំពីកីឡា និងការសម្តែងរបស់កីឡាករនៅក្នុងការប្រកួតថ្មីៗ។'
        }
      ]
    };
  },
  computed: {
    limitedArticles() {
      return this.articles.slice(0, 10);
    },
    fiveColumnArticles() {
      return this.articles.slice(10, 18);
    },
    sliderArticles() {
      return this.articles.slice(5, 10);
    }
  },
  // Swiper modules
  mounted() {
    this.swiperOptions = {
      modules: [Navigation, Pagination],
    };
  }
};
</script>
