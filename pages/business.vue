<template>
  <div>
    <category-all-news/>
  </div>
</template>

<script>
import CategoryAllNews from '~/components/CategoryAllNews.vue'
export default {
  components: { CategoryAllNews },
  layout: 'business'
}
</script>

<style scoped>
/* Add any page-specific styles here */
h2 {
  color: #333;
}
</style>
