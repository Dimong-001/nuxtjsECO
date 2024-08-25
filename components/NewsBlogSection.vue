<template>
  <div class="container mx-auto px-4 py-8">
    <!-- News Section Header -->
    <div class="border-b border-gray-300 dark:border-gray-600 pb-4 flex justify-between items-center">
      <h2 class="text-2xl font-bold khmer-font text-gray-900 dark:text-gray-100">
        ព័ត៌មានសង្ខេប
      </h2>
      <NuxtLink
        to="/videos"
        class="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 khmer-font"
      >
        ពត៌មានតាមវីដេអូ (VIDEO)
      </NuxtLink>
    </div>

    <!-- News Grid Section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
      <div
        v-for="(article, index) in articles"
        :key="index"
        class="flex flex-col bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
      >
        <!-- Article Image -->
        <img
          :src="article.image"
          alt="Article Image"
          class="w-full h-48 object-cover rounded-lg mb-4"
        />
        <!-- Article Title -->
        <NuxtLink
          :to="article.link"
          class="font-bold khmer-font hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400"
        >
          {{ article.title }}
        </NuxtLink>
        <!-- Article Date -->
        <p class="text-gray-500 text-sm mt-2 dark:text-gray-400 khmer-font">
          {{ article.date }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          image:
            'https://economy.ams.com.kh/wp-content/uploads/2023/03/SamdechKralaHomUrgesBattambang.jpg',
          title:
            'សម្ដេច​ក្រឡាហោម ​ជំរុញឱ្យរដ្ឋបាលខេត្តបាត់ដំបងសម្រប​សម្រួល​ដល់​វិនិយោគិន​​ដាក់ទុននៅក្នុង​ខេត្ត​បន្ថែម​',
          link: '/article-1',
          date: '6 ខែ មិថុនា',
        },
        {
          image:
            'https://economy.ams.com.kh/wp-content/uploads/2023/02/Garmentindustry.jpg',
          title:
            'បណ្តាញផ្សព្វផ្សាយអន្តរជាតិ ៖ ឧស្សាហកម្ម​សម្លៀកបំពាក់​ ជាអ្នកបំពុលបរិស្ថាន​ធំ​មួយ​របស់​ពិភពលោក',
          link: '/article-2',
          date: '6 ខែ មិថុនា',
        },
        {
          image:
            'https://economy.ams.com.kh/wp-content/uploads/2022/10/Europeaneconomy.jpg.webp',
          title:
            'ធនាគារពិភពលោក ៖ សេដ្ឋកិច្ចអឺរ៉ុបខាងកើត និងអាស៊ីកណ្តាលនឹងមានកំណើនយឺតនៅឆ្នាំ២០២៣',
          link: '/article-3',
          date: '6 ខែ មិថុនា',
        },
        {
          image: 'https://economy.ams.com.kh/wp-content/uploads/2024/06/3-10.png',
          title:
            'វិស័យ SMEs ជាកម្លាំងជំរុញដ៏សំខាន់ក្នុងដំណើររបស់កម្ពុជាឆ្ពោះទៅការសម្រេចបានគោលដៅជាប្រទេសមាន',
          link: '/article-4',
          date: '6 ខែ មិថុនា',
        },
        {
          image:
            'https://economy.ams.com.kh/wp-content/uploads/2022/12/GreenFinancing.jpg.webp',
          title:
            'រដ្ឋមន្រ្តីក្រសួងបរិស្ថាន ៖ កម្ពុជាមានលទ្ធភាពពេញលេញក្នុងការទទួលបានហិរញ្ញប្បទានបៃតង',
          link: '/article-5',
          date: '6 ខែ មិថុនា',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Optional: Add any custom styling here */
</style>
