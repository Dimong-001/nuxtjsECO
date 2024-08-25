<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Section Title -->
    <h2 class="text-xl font-bold khmer-font mb-6 text-gray-900 dark:text-gray-100">
      កម្មវិធីពិសេស Khmer Insider
    </h2>

    <!-- News Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      <!-- Single News Item -->
      <div class="news-item" v-for="(news, index) in newsItems" :key="index">
        <NuxtLink to="#" class="block">
          <div class="relative w-full pb-[150%] bg-gray-200 dark:bg-gray-700">
            <!-- Aspect ratio box to ensure responsive behavior -->
            <img :src="news.imageSrc" :alt="news.title" class="absolute inset-0 w-full h-full object-cover" />
          </div>
          <h3 class="text-lg font-semibold mt-4 mb-2 khmer-font hover:text-red-500 dark:hover:text-red-400 text-gray-900 dark:text-gray-100">
            {{ news.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 khmer-font">{{ news.meta }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsBlogNews01",
  data() {
    return {
      newsItems: [
        {
          imageSrc: "https://economy.ams.com.kh/wp-content/uploads/2021/04/Angkor-Bullet_Vertical.jpg.webp",
          title: "ហ៊ុន សំរួន",
          meta: "S2:E15 | ហេងស៊ីន, DOMLEI"
        },
        {
          imageSrc: "https://economy.ams.com.kh/wp-content/uploads/2023/07/01_KHINS03_WEP_EP26.jpg",
          title: "គិត ស៊ីយ៉ា",
          meta: "S2:E14 | FIXH.ME"
        },
        {
          imageSrc: "https://economy.ams.com.kh/wp-content/uploads/2023/07/02_KHINS03_WEP_EP24.jpg",
          title: "ជា សារ៉ា",
          meta: "S2:E13 | សេដ្ឋកិច្ច"
        },
        {
          imageSrc: "https://economy.ams.com.kh/wp-content/uploads/2023/06/02_KHINS03_WEP_EP21.jpg",
          title: "ជី ប៉ាវ",
          meta: "S2:E12 | បោះពុម្ព"
        },
        {
          imageSrc: "https://economy.ams.com.kh/wp-content/uploads/2023/05/01_PRO1-4.jpg",
          title: "Renaud Henri Chassaigne",
          meta: "S2:E11 | Prevention Co., Ltd."
        }
      ]
    };
  }
};
</script>
