<template>
    <div class="container mx-auto px-4 py-8">
      <!-- News Section Header -->
      <div class="border-b border-gray-300 pb-4 flex justify-between items-center">
        <h2 class="text-2xl font-bold khmer-font">ព័ត៌មានសង្គម</h2>
        <NuxtLink to="/videos" class="text-gray-500 hover:text-gray-800 khmer-font">
          ពត៌មានតាមវីដេអូ (VIDEO)
        </NuxtLink>
      </div>
  
      <!-- News Grid Section -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        <div v-for="(article, index) in articles" :key="index" class="flex flex-col">
          <!-- Article Image -->
          <img 
            :src="article.image" 
            alt="Article Image" 
            class="w-full h-48 object-cover rounded-lg mb-4"
          />
          <!-- Article Title -->
          <NuxtLink :to="article.link" class="font-bold khmer-font hover:text-blue-500">
            {{ article.title }}
          </NuxtLink>
          <!-- Article Date -->
          <p class="text-gray-500 text-sm mt-2 khmer-font">{{ article.date }}</p>
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
            image: 'https://via.placeholder.com/400x250.png?text=Article+1',
            title: 'ចំណងជើងអត្ថបទទីមួយ',
            link: '/article-1',
            date: '6 ខែ មិថុនា'
          },
          {
            image: 'https://via.placeholder.com/400x250.png?text=Article+2',
            title: 'ចំណងជើងអត្ថបទទីពីរ',
            link: '/article-2',
            date: '6 ខែ មិថុនា'
          },
          {
            image: 'https://via.placeholder.com/400x250.png?text=Article+3',
            title: 'ចំណងជើងអត្ថបទទីបី',
            link: '/article-3',
            date: '6 ខែ មិថុនា'
          },
          {
            image: 'https://via.placeholder.com/400x250.png?text=Article+4',
            title: 'ចំណងជើងអត្ថបទទីបួន',
            link: '/article-4',
            date: '6 ខែ មិថុនា'
          },
          {
            image: 'https://via.placeholder.com/400x250.png?text=Article+5',
            title: 'ចំណងជើងអត្ថបទទីប្រាំ',
            link: '/article-5',
            date: '6 ខែ មិថុនា'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Optional: Add any custom styling here */
  </style>
  