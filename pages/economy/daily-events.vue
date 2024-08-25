<template>
    <div class="page-container">
      <!-- You can add a heading or other content specific to this page -->
      <h1 class="text-2xl font-bold mb-6">Daily Events</h1>
  
      <!-- Render the ArticlesNews component with the 'daily-events' category -->
      <ArticlesNews :category="'daily-events'" />
    </div>
  </template>
  
  <script>
  import ArticlesNews from '~/components/ArticlesNews.vue';
  
  export default {
    components: {
      ArticlesNews,
    },
  };
  </script>
  
  <style scoped>
  .page-container {
    padding: 20px;
  }
  
  /* Add any additional styling as needed */
  </style>
  