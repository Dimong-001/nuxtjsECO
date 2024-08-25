<template>
    <div>
      <!-- Top Bar Section -->
      <div class="top-bar bg-gray-100 py-2">
        <div class="container mx-auto flex justify-center items-center space-x-4">
        <!-- Left Section (Khmer Text and Icon) -->
        <div class="flex items-center space-x-2">
            <span class="khmer-font text-gray-600 text-xs sm:text-sm">មាតិកាឌីជីថល:</span>
            <img src="https://economy.ams.com.kh/wp-content/uploads/2022/12/HOT-TOPICS-LOGO-GIF-1.gif" alt="Icon" class="w-3 h-3 sm:w-4 sm:h-4" />
        </div>

        <!-- Right Section (Hot Topics and Read News) -->
        <div class="flex items-center space-x-2">
            <img src="https://economy.ams.com.kh/wp-content/uploads/2022/09/READ-NEWS-LOGO-H32.svg" alt="Hot Topics" class="w-10 h-10 sm:w-12 sm:h-12" />
            <span class="font-bold text-red-600 text-xs sm:text-sm">READ NEWS</span>
        </div>
        </div>
    </div>
  
      <!-- Main Content Section -->
      <div class="article-page-container flex flex-wrap">
        <!-- Main Article Section -->
        <div class="w-full lg:w-2/3 pr-4">
          <div class="main-article">
            <!-- Loading State -->
            <div v-if="loading" class="text-center py-8 text-gray-600">Loading...</div>
  
            <!-- Error State -->
            <div v-else-if="error" class="text-center py-8 text-red-500">{{ error }}</div>
  
            <!-- Article Content -->
            <div v-else>
              <img :src="article.image" :alt="article.title" class="w-full h-auto mb-6" />
              <h1 class="text-3xl font-bold mb-4 khmer-font">{{ article.title }}</h1>
              <div class="article-meta text-gray-600 mb-4 khmer-font">
                <span class="category font-semibold">{{ article.category }}</span> | 
                <span class="date">{{ article.date }}</span> | 
                <span class="comments">{{ article.comments }}</span>
              </div>
              <div class="article-content text-lg text-gray-800 leading-relaxed khmer-font">
                <p v-for="(paragraph, index) in article.content" :key="index">{{ paragraph }}</p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Sidebar Section -->
        <div class="w-full lg:w-1/3 pl-4">
          <div class="sidebar">
            <h2 class="text-xl font-bold mb-4 khmer-font">Related Articles</h2>
            <ul class="related-articles">
              <li v-for="(relatedArticle, index) in relatedArticles" :key="index" class="mb-4">
                <NuxtLink :to="relatedArticle.link" class="block hover:text-red-500 khmer-font">
                  <h3 class="text-lg font-semibold">{{ relatedArticle.title }}</h3>
                </NuxtLink>
              </li>
            </ul>
            <div class="ad-space mt-8">
              <img src="https://via.placeholder.com/300x250" alt="Advertisement" class="w-full h-auto" />
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
        article: {},
        relatedArticles: [],
        loading: true,
        error: null,
      };
    },
    async created() {
      try {
        const response = await fetch('/articlesnewseco.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  
        const data = await response.json();
        this.article = data.article;
        this.relatedArticles = data.relatedArticles;
      } catch (error) {
        this.error = `Failed to load articles: ${error.message}`;
      } finally {
        this.loading = false;
      }
    },
  };
  </script>
  
  <style scoped>
  .article-page-container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .main-article img {
    max-height: 500px;
    object-fit: cover;
  }
  
  .article-meta {
    font-size: 0.875rem;
  }
  
  .sidebar {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
  }
  
  .ad-space img {
    max-width: 100%;
    border-radius: 8px;
  }
  
.top-bar {
  background-color: #f5f5f5; /* Light gray background */
  padding: 10px 0;
}

.container {
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  max-width: 1200px; /* Control maximum width */
  margin: 0 auto;
}
  </style>
  