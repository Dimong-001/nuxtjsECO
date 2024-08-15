<template>
    <div>
      <Home/>
      <AboveFooter/>
      <VFooter/>
      
    </div>
  </template>
<script>
import VFooter from '~/components/VFooter.vue';

export default {
  layout: 'home' // This links to 'home.vue' in the layouts directory
}
</script>
<style scoped>
</style>
