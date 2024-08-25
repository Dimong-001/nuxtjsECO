<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-wrap lg:flex-nowrap gap-8">
      <!-- Left Column: Numbered List and Journalists -->
      <div class="w-full lg:w-1/3 flex flex-col justify-between">
        <!-- Breaking News Section -->
        <div>
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-bold khmer-font text-gray-900 dark:text-gray-100">ប្រធានបទពេញនិយម</h2>
            <NuxtLink to="#" class="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center khmer-font">
              មើលទាំងអស់➧
            </NuxtLink>
          </div>
          <hr class="border-gray-300 dark:border-gray-700 mb-4" />
          <ol class="list-decimal list-inside space-y-4 khmer-font">
            <li v-for="(news, index) in leftNewsItems" :key="index" class="text-gray-800 dark:text-gray-100">
              <NuxtLink to="#" class="hover:text-blue-600 dark:hover:text-blue-400">{{ news.title }}</NuxtLink>
            </li>
          </ol>
        </div>

        <!-- Journalists Section -->
        <div class="mt-12">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-bold khmer-font text-gray-900 dark:text-gray-100">ក្រុមការងារ</h2>
            <NuxtLink to="#" class="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center khmer-font">
              មើលទាំងអស់➧
            </NuxtLink>
          </div>
          <hr class="border-gray-300 dark:border-gray-700 mb-4" />
          <ul class="space-y-4">
            <li v-for="(journalist, index) in journalists" :key="index" class="flex items-center space-x-4">
              <img :src="journalist.image" :alt="journalist.name" class="w-12 h-12 rounded-full object-cover" />
              <div>
                <p class="text-lg font-semibold khmer-font text-gray-900 dark:text-gray-100">{{ journalist.name }}</p>
                <p class="text-gray-600 dark:text-gray-400 text-sm">{{ journalist.title }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Right Column: Grid of Featured News -->
      <div class="w-full lg:w-2/3">
        <!-- Header Above Grid -->
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-bold khmer-font text-gray-900 dark:text-gray-100">ចំណាប់អារម្មណ៍របស់ប្រិយមិត្ត</h2>
          <NuxtLink to="#" class="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center khmer-font">
            មើលទាំងអស់➧
          </NuxtLink>
        </div>
        <hr class="border-gray-300 dark:border-gray-700 mb-4" />
        
        <!-- Grid of News Items -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(news, index) in rightNewsItems" :key="index" class="news-item">
            <NuxtLink to="#">
              <div class="aspect-w-16 aspect-h-9 mb-4">
                <img :src="news.imageSrc" :alt="news.title" class="w-full h-full object-cover rounded-lg" />
              </div>
              <h3 class="text-lg font-semibold mb-2 khmer-font text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">{{ news.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 khmer-font">{{ news.date }}</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsBlog",
  data() {
    return {
      leftNewsItems: [
        { title: "សេចក្តីប្រកាសថ្មី របស់ក្រសួងសាធារណៈ និងដីធ្លី" },
        { title: "វិភាគសេដ្ឋកិច្ច៖ ភាពមិនច្បាស់លាស់ក្នុងទិសដៅ" },
        { title: "ពិធីចុះហត្ថលេខានៅវីណាម៉េច VinaSamex" },
        { title: "ក្រសួងពាណិជ្ជកម្ម បានកំណត់កាលបរិច្ឆេទថ្មី" },
        { title: "ADB ចុះកិច្ចព្រមព្រៀងសហការជាមួយ EDC" }
      ],
      rightNewsItems: [
        {
          imageSrc: "https://economy.ams.com.kh/wp-content/uploads/2022/12/MinistryofLandManagementUrbanPlanningandConstruction.jpg.webp",
          title: "សម្តេច ហ៊ុន សែន បញ្ជាក់អំពីគោលនយោបាយអភិវឌ្ឍន៍",
          date: "ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច• 28/12/2022"
        },
        {
          imageSrc: "https://economy.ams.com.kh/wp-content/uploads/2024/01/0a65119a197a3c0f59cbc9f79e1d770f.2.2e16d0ba.fill-960x540-1.jpg",
          title: "វិនិយោគការចំណេញនៅស្រុកខ្មែរ",
          date: "ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច• 28/12/2022"
        },
        {
          imageSrc: "https://economy.ams.com.kh/wp-content/uploads/2022/03/Untitleds-1.jpg.webp",
          title: "មេធាវីកម្ពុជា បើកការពារក្ដីពិរុទ្ធ",
          date: "ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច• 28/12/2022"
        },
        {
          imageSrc: "https://economy.ams.com.kh/wp-content/uploads/2022/03/photo_2022-03-31_15-02-45.jpg.webp",
          title: "សកម្មភាពនៅក្រសួងមហាផ្ទៃ",
          date: "ព្រឹត្តិការណ៍, សេដ្ឋកិច្ច• 28/12/2022"
        }
      ],
      journalists: [
        {
          name: "លោក ហេង សុវណ្ណ | Mr. Heng Sovann",
          title: "",
          image: "https://economy.ams.com.kh/wp-content/uploads/2021/03/HENG-SOVANN.jpg.webp"
        },
        {
          name: "លោក អ៊ា សុវណ្ណារ៉ា | Mr. Ea Sovannara",
          title: "",
          image: "https://economy.ams.com.kh/wp-content/uploads/2021/03/Ea-Sovannara-01.jpg.webp"
        },
        {
          name: "លោក សន ស៊ុនលី | Mr. San Sounly",
          title: "",
          image: "https://economy.ams.com.kh/wp-content/uploads/2021/03/SAN-SOUNLY-02.jpg.webp"
        },
        {
          name: "លោក កែ ផុស | Mr. Ker Phors",
          title: "",
          image: "https://economy.ams.com.kh/wp-content/uploads/2021/03/KER-PHOS-02.jpg.webp"
        },
        {
          name: "កញ្ញា ម៉ាន់ ហ៊ុយលាង | Ms. Mann Huyleang",
          title: "",
          image: "https://economy.ams.com.kh/wp-content/uploads/2023/08/Pro1-e1693385501183.jpg"
        }
      ]
    };
  }
};
</script>
