<template>
    <div>
      <NewsGrid />
    </div>
  </template>
  
  <script>
  import NewsGrid from '../components/NewsGrid.vue';
  
  export default {
    layout: 'news-grid', // Specify the layout to use
    components: {
      NewsGrid,
    },
  };
  </script>
  