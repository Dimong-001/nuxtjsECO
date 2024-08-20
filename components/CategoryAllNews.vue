<template>
  <!-- Root element -->
  <div>
    <!-- New Block for the Text -->
    <div class="w-full text-center bg-gray-100 py-4">
      <div class="text-gray-700 font-semibold khmer-font">
        មាតិកា : ព្រឹត្តិការណ៏​
      </div>
    </div>

    <div class="bg-white-100 py-8"> <!-- Changed bg-white-100 to bg-gray-100 -->
      <div class="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-8" style="font-size: 14px">
          
          <!-- Featured Article -->
          <div class="relative overflow-hidden ">
            <img
              :src="featuredArticle.imageUrl"
              :alt="featuredArticle.title"
              class="w-full h-auto object-cover"
              loading="lazy"
            />

            <div class="p-4" style="font-size: 14px;">
              <h2 class="text-xl lg:text-2xl font-semibold mb-2 khmer-font" style="font-size: 16px">
                {{ featuredArticle.title }}
              </h2>
              <p class="text-gray-600 khmer-font" style="font-size: 14px">{{ featuredArticle.category }}, {{ featuredArticle.date }}</p>
            </div>
          </div>

          <!-- Additional News Articles -->
          <div class="space-y-6" style="font-size: 14px">
            <div
              v-for="article in newsArticles"
              :key="article.id"
              class="flex flex-col sm:flex-row bg-white overflow-hidden khmer-font"
            >
              <img
                :src="article.imageUrl"
                :alt="article.title"
                class="w-[347px] h-[218px] sm:w-[360px] h-auto sm:h-[202.5px] object-cover"
                loading="lazy"
              />
              <div class="p-4 w-full" style="font-size: 14px">
                <h3 class="text-lg sm:text-xl font-semibold mb-2" style="font-size: 16px">
                  {{ article.title }}
                </h3>
                <p class="text-gray-600">{{ article.category }}, {{ article.date }}</p>
                <p class="mt-2 text-gray-700">{{ article.description }}</p>
              </div>
            </div>

            <!-- Pagination -->
            <div class="mt-8">
              <nav class="flex justify-center">
                <ul class="inline-flex items-center -space-x-px">
                  <li>
                    <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">1</a>
                  </li>
                  <li>
                    <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                  </li>
                  <li>
                    <span class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300">...</span>
                  </li>
                  <li>
                    <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">10</a>
                  </li>
                  <li>
                    <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">Next Page</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-8">
          <!-- Advertisement Section on Top -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://i.ibb.co/nnDQdm0/Screenshot-2024-08-20-152936.png"
              alt="Advertisement"
              class="w-[490px] h-[660px] object-cover"
              loading="lazy"
            />
          </div>

          <!-- First Related News Section -->
          <div class="bg-white rounded-lg overflow-hidden relative">
            <!-- Top Text Overlay -->
            <div class="flex justify-between items-center bg-gray-100 p-4">
              <span class="text-lg font-bold text-gray-800 khmer-font">ព្រឹត្តិការណ៍ប្រចាំថ្ងៃ</span>
              
              <!-- Clickable "See More" Link -->
              <NuxtLink to="/all-events" class="text-lg font-bold text-blue-600 hover:text-blue-800 khmer-font">
                មើលទាំងអស់
              </NuxtLink>
            </div>          
            <!-- Image -->
            <img
              src="https://economy.ams.com.kh/wp-content/uploads/2023/11/01_ECOBU006_CPT.jpg"
              alt="Top Image"
              class="w-[488px] h-[200px] object-cover mx-auto mt-4"
              loading="lazy"
            />

            <!-- Description -->
            <div class="p-4 text-center">
              <p class="text-black-600 text-sm khmer-font">
                គ្រឹះ​ស្ថាន ខេមា រៀប​ចំ​កម្ម​វិធី​ជំរុញ​ការ​ដាំ​ដើម​ឈើ​ហូប​ផ្លែ​តាម​សហ​គមន៍
              </p>
            </div>
          </div>
          <!-- Related News -->
          <div class="p-4">
            <!-- <h4 class="text-lg font-semibold mb-4">Related News</h4> -->
            <div class="space-y-4">
              <div
                v-for="news in relatedNews"
                :key="news.id"
                class="flex items-start space-x-4"
              >
                <img
                  :src="news.imageUrl"
                  :alt="news.title"
                  class="w-[113px] h-[75px] object-cover rounded-lg"
                  loading="lazy"
                />
                <div>
                  <h5 class="font-semibold khmer-font">{{ news.title }}</h5>
                  <!-- <p class="text-gray-600 text-sm">{{ news.category }}, {{ news.date }}</p> -->
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Sidebar Sections -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://i.ibb.co/nnDQdm0/Screenshot-2024-08-20-152936.png"
              alt="Advertisement"
              class="w-[490px] h-[660px] object-cover"
              loading="lazy"
            />
          </div>

          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://economy.ams.com.kh/wp-content/uploads/2023/11/01_ECOBU006_CPT.jpg"
              alt="Top Image"
              class="w-[488px] h-[200px] object-cover mx-auto mt-4"
              loading="lazy"
            />
            <div class="p-4">
              <!-- <h4 class="text-lg font-semibold mb-4">Related News</h4> -->
              <div class="space-y-4">
                <div
                  v-for="news in relatedNews"
                  :key="news.id"
                  class="flex items-start space-x-4"
                >
                  <img
                    :src="news.imageUrl"
                    :alt="news.title"
                    class="w-[113px] h-[75px] object-cover rounded-lg"
                    loading="lazy"
                  />
                  <div>
                    <h5 class="font-semibold khmer-font">{{ news.title }}</h5>
                    <!-- <p class="text-gray-600 text-sm">{{ news.category }}, {{ news.date }}</p> -->
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://i.ibb.co/nnDQdm0/Screenshot-2024-08-20-152936.png"
              alt="Advertisement"
              class="w-[490px] h-[660px] object-cover"
              loading="lazy"
            />
          </div>

          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://economy.ams.com.kh/wp-content/uploads/2023/11/01_ECOBU006_CPT.jpg"
              alt="Top Image"
              class="w-[488px] h-[200px] object-cover mx-auto mt-4"
              loading="lazy"
            />
            <div class="p-4">
              <!-- <h4 class="text-lg font-semibold mb-4">Related News</h4> -->
              <div class="space-y-4">
                <div
                  v-for="news in relatedNews"
                  :key="news.id"
                  class="flex items-start space-x-4"
                >
                  <img
                    :src="news.imageUrl"
                    :alt="news.title"
                    class="w-[113px] h-[75px] object-cover rounded-lg"
                    loading="lazy"
                  />
                  <div>
                    <h5 class="font-semibold khmer-font">{{ news.title }}</h5>
                    <!-- <p class="text-gray-600 text-sm">{{ news.category }}, {{ news.date }}</p> -->
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
export default {
  data() {
    return {
      featuredArticle: {
        title: 'គ្រឹះ​ស្ថាន ខេមា រៀប​ចំ​កម្ម​វិធី​ជំរុញ​ការ​ដាំ​ដើម​ឈើ​ហូប​ផ្លែ​តាម​សហ​គមន៍',
        category: 'ព្រឹត្តិការណ៍, អត្ថបទពាណិជ្ជកម្ម',
        date: '19/08/2024',
        imageUrl: 'https://economy.ams.com.kh/wp-content/uploads/2024/08/IMG_20240818_093023_033-2048x1285.jpg',
      },
      newsArticles: [
        {
          id: 1,
          title: 'ចំណូលពន្ធពីប្រតិបត្តិការពាណិជ្ជកម្មតាមប្រព័ន្ធអេឡិចត្រូនិក (e-Commerce) សម្រេចបានជិត ៤៤លានដុល្លារ ក្នុងរយៈពេល៧ខែឆ្នាំ២០២៤',
          category: 'ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច',
          date: '19/08/2024',
          imageUrl: 'https://economy.ams.com.kh/wp-content/uploads/2024/08/%E1%9E%96%E1%9E%93%E1%9F%92%E1%9E%9285_n.jpg',
          description: 'ប្រធាន សមាគមសហគ្រិនវ័យក្មេងកម្ពុជា អំពាវនាវឱ្យសហគ្រិន អាជីវករ ពាណិជ្ជករ បន្តថែរក្សាសន្តិភាព សាមគ្គីភាព សណ្តាប់ធ្នាប់សង្គម និងស្ថេរភាពសេដ្ឋកិច្ច',
        },
        {
          id: 2,
          title: 'រយៈពេល៥ឆ្នាំ​ វិនិយោគិន​សិង្ហបុរីបោះទុន​វិនិយោគ​នៅកម្ពុជា​ក្នុងទំហំទឹកប្រាក់៤០០​លានដុល្លារ​',
          category: 'ព្រឹត្តិការណ៍, អចលនទ្រព្យ',
          date: '19/08/2024',
          imageUrl: 'https://economy.ams.com.kh/wp-content/uploads/2024/08/1128.jpg',
          description: 'ប្រធាន សមាគមសហគ្រិនវ័យក្មេងកម្ពុជា អំពាវនាវឱ្យសហគ្រិន អាជីវករ ពាណិជ្ជករ បន្តថែរក្សាសន្តិភាព សាមគ្គីភាព សណ្តាប់ធ្នាប់សង្គម និងស្ថេរភាពសេដ្ឋកិច្ច',
        },
        {
          id: 3,
          title: 'រយៈពេល ៧ខែ ​កម្ពុជា​នាំ​ចេញទំនិញមានទំហំ១៤ពាន់លានដុល្លារ កើនឡើង១៤ភាគរយ',
          category: 'ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច',
          date: '19/08/2024',
          imageUrl: 'https://economy.ams.com.kh/wp-content/uploads/2024/08/cjfcghchg-1.jpg',
          description: 'ប្រធាន សមាគមសហគ្រិនវ័យក្មេងកម្ពុជា អំពាវនាវឱ្យសហគ្រិន អាជីវករ ពាណិជ្ជករ បន្តថែរក្សាសន្តិភាព សាមគ្គីភាព សណ្តាប់ធ្នាប់សង្គម និងស្ថេរភាពសេដ្ឋកិច្ច',
        },
        {
          id: 4,
          title: 'សេដ្ឋកិច្ចកម្ពុជាត្រូវបានប៉ាន់ស្មានថាអាចនឹងសម្រេចបានកំណើន ៦% ក្នុងឆ្នាំ២០២៤',
          category: 'ព្រឹត្តិការណ៍, ហិរញ្ញវត្ថុ',
          date: '19/08/2024',
          imageUrl: 'https://economy.ams.com.kh/wp-content/uploads/2024/08/1128.jpg',
          description: 'ប្រធាន សមាគមសហគ្រិនវ័យក្មេងកម្ពុជា អំពាវនាវឱ្យសហគ្រិន អាជីវករ ពាណិជ្ជករ បន្តថែរក្សាសន្តិភាព សាមគ្គីភាព សណ្តាប់ធ្នាប់សង្គម និងស្ថេរភាពសេដ្ឋកិច្ច',
        },
        {
          id: 5,
          title: 'រុស្ស៊ី កំពុងខ្វះខាតកម្លាំពលកម្មទាំងក្នុងវិស័យយោធា និងសេដ្ឋកិច្ច',
          category: 'ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច',
          date: '19/08/2024',
          imageUrl: 'https://economy.ams.com.kh/wp-content/uploads/2024/08/1128.jpg',
          description: 'ប្រធាន សមាគមសហគ្រិនវ័យក្មេងកម្ពុជា អំពាវនាវឱ្យសហគ្រិន អាជីវករ ពាណិជ្ជករ បន្តថែរក្សាសន្តិភាព សាមគ្គីភាព សណ្តាប់ធ្នាប់សង្គម និងស្ថេរភាពសេដ្ឋកិច្ច',
        },
        {
          id: 6,
          title: 'ប្រធានាធិបតីវៀតណាមថ្មី ជ្រើសយកចិនជាជាងអាមេរិក ដើម្បីបំពេញទស្សនកិច្ចក្រៅប្រទេសជាលើកដំបូង',
          category: 'ព្រឹត្តិការណ៍, អាជីវកម្មថ្មី និងនវានុវត្ត',
          date: '19/08/2024',
          imageUrl: 'https://economy.ams.com.kh/wp-content/uploads/2024/08/1128.jpg',
          description: 'ប្រធាន សមាគមសហគ្រិនវ័យក្មេងកម្ពុជា អំពាវនាវឱ្យសហគ្រិន អាជីវករ ពាណិជ្ជករ បន្តថែរក្សាសន្តិភាព សាមគ្គីភាព សណ្តាប់ធ្នាប់សង្គម និងស្ថេរភាពសេដ្ឋកិច្ច',
        },
        {
          id: 7,
          title: 'ព្រឹត្តិការណ៍ «សប្តាហ៍រូបថត និងវីដេអូអន្តរជាតិ ឆ្នាំ២០២៤» រួមគ្នាថែរក្សាប្រព័ន្ធអេកូឡូស៊ីនៃដងទន្លេមេគង្គ',
          category: 'Category',
          date: 'Date',
          imageUrl: 'https://economy.ams.com.kh/wp-content/uploads/2024/08/1128.jpg',
          description: 'ប្រធាន សមាគមសហគ្រិនវ័យក្មេងកម្ពុជា អំពាវនាវឱ្យសហគ្រិន អាជីវករ ពាណិជ្ជករ បន្តថែរក្សាសន្តិភាព សាមគ្គីភាព សណ្តាប់ធ្នាប់សង្គម និងស្ថេរភាពសេដ្ឋកិច្ច',
        },
        {
          id: 8,
          title: 'ព្រឹត្តិការណ៍ «សប្តាហ៍រូបថត និងវីដេអូអន្តរជាតិ ឆ្នាំ២០២៤» រួមគ្នាថែរក្សាប្រព័ន្ធអេកូឡូស៊ីនៃដងទន្លេមេគង្គ',
          category: 'Category',
          date: 'Date',
          imageUrl: 'https://economy.ams.com.kh/wp-content/uploads/2024/08/1128.jpg',
          description: 'ប្រធាន សមាគមសហគ្រិនវ័យក្មេងកម្ពុជា អំពាវនាវឱ្យសហគ្រិន អាជីវករ ពាណិជ្ជករ បន្តថែរក្សាសន្តិភាព សាមគ្គីភាព សណ្តាប់ធ្នាប់សង្គម និងស្ថេរភាពសេដ្ឋកិច្ច',
        },
        {
          id: 9,
          title: 'ព្រឹត្តិការណ៍ «សប្តាហ៍រូបថត និងវីដេអូអន្តរជាតិ ឆ្នាំ២០២៤» រួមគ្នាថែរក្សាប្រព័ន្ធអេកូឡូស៊ីនៃដងទន្លេមេគង្គ',
          category: 'Category',
          date: 'Date',
          imageUrl: 'https://economy.ams.com.kh/wp-content/uploads/2024/08/1128.jpg',
          description: 'ប្រធាន សមាគមសហគ្រិនវ័យក្មេងកម្ពុជា អំពាវនាវឱ្យសហគ្រិន អាជីវករ ពាណិជ្ជករ បន្តថែរក្សាសន្តិភាព សាមគ្គីភាព សណ្តាប់ធ្នាប់សង្គម និងស្ថេរភាពសេដ្ឋកិច្ច',
        },
        {
          id: 10,
          title: 'ព្រឹត្តិការណ៍ «សប្តាហ៍រូបថត និងវីដេអូអន្តរជាតិ ឆ្នាំ២០២៤» រួមគ្នាថែរក្សាប្រព័ន្ធអេកូឡូស៊ីនៃដងទន្លេមេគង្គ',
          category: 'Category',
          date: 'Date',
          imageUrl: 'https://economy.ams.com.kh/wp-content/uploads/2024/08/1128.jpg',
          description: 'ប្រធាន សមាគមសហគ្រិនវ័យក្មេងកម្ពុជា អំពាវនាវឱ្យសហគ្រិន អាជីវករ ពាណិជ្ជករ បន្តថែរក្សាសន្តិភាព សាមគ្គីភាព សណ្តាប់ធ្នាប់សង្គម និងស្ថេរភាពសេដ្ឋកិច្ច',
        },
        {
          id: 11,
          title: 'ព្រឹត្តិការណ៍ «សប្តាហ៍រូបថត និងវីដេអូអន្តរជាតិ ឆ្នាំ២០២៤» រួមគ្នាថែរក្សាប្រព័ន្ធអេកូឡូស៊ីនៃដងទន្លេមេគង្គ',
          category: 'Category',
          date: 'Date',
          imageUrl: 'https://economy.ams.com.kh/wp-content/uploads/2024/08/1128.jpg',
          description: 'ប្រធាន សមាគមសហគ្រិនវ័យក្មេងកម្ពុជា អំពាវនាវឱ្យសហគ្រិន អាជីវករ ពាណិជ្ជករ បន្តថែរក្សាសន្តិភាព សាមគ្គីភាព សណ្តាប់ធ្នាប់សង្គម និងស្ថេរភាពសេដ្ឋកិច្ច',
        },
        {
          id: 12,
          title: 'ព្រឹត្តិការណ៍ «សប្តាហ៍រូបថត និងវីដេអូអន្តរជាតិ ឆ្នាំ២០២៤» រួមគ្នាថែរក្សាប្រព័ន្ធអេកូឡូស៊ីនៃដងទន្លេមេគង្គ',
          category: 'Category',
          date: 'Date',
          imageUrl: 'https://economy.ams.com.kh/wp-content/uploads/2024/08/1128.jpg',
          description: 'ប្រធាន សមាគមសហគ្រិនវ័យក្មេងកម្ពុជា អំពាវនាវឱ្យសហគ្រិន អាជីវករ ពាណិជ្ជករ បន្តថែរក្សាសន្តិភាព សាមគ្គីភាព សណ្តាប់ធ្នាប់សង្គម និងស្ថេរភាពសេដ្ឋកិច្ច',
        },
        {
          id: 13,
          title: 'ព្រឹត្តិការណ៍ «សប្តាហ៍រូបថត និងវីដេអូអន្តរជាតិ ឆ្នាំ២០២៤» រួមគ្នាថែរក្សាប្រព័ន្ធអេកូឡូស៊ីនៃដងទន្លេមេគង្គ',
          category: 'Category',
          date: 'Date',
          imageUrl: 'https://economy.ams.com.kh/wp-content/uploads/2024/08/1128.jpg',
          description: 'ប្រធាន សមាគមសហគ្រិនវ័យក្មេងកម្ពុជា អំពាវនាវឱ្យសហគ្រិន អាជីវករ ពាណិជ្ជករ បន្តថែរក្សាសន្តិភាព សាមគ្គីភាព សណ្តាប់ធ្នាប់សង្គម និងស្ថេរភាពសេដ្ឋកិច្ច',
        },
      ],
      relatedNews: [
        {
          id: 1,
          title: 'ចំណូលពន្ធពីប្រតិបត្តិការពាណិជ្ជកម្មតាមប្រព័ន្ធអេឡិចត្រូនិក',
          category: '',
          date: '',
          imageUrl: 'https://economy.ams.com.kh/wp-content/uploads/2024/08/%E1%9E%96%E1%9E%93%E1%9F%92%E1%9E%9285_n.jpg',
        },
        {
          id: 2,
          title: 'រយៈពេល៥ឆ្នាំ​ វិនិយោគិន​សិង្ហបុរីបោះទុន​វិនិយោគ​នៅកម្ពុជា​ក្នុងទំហំទឹក',
          category: 'Category',
          date: 'Date',
          imageUrl: 'https://economy.ams.com.kh/wp-content/uploads/2024/08/1128.jpg',
        },
        {
          id: 3,
          title: 'រយៈពេល ៧ខែ ​កម្ពុជា​នាំ​ចេញទំនិញមានទំហំ១៤ពាន់លានដុល្លារ កើន',
          category: 'Category',
          date: 'Date',
          imageUrl: 'https://economy.ams.com.kh/wp-content/uploads/2024/08/cjfcghchg-1.jpg',
        },
      ],
    };
  },
};
</script>
