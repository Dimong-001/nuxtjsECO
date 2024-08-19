<template>
    <div class="ad-container">
      <NuxtLink to="/your-ad-link" class="ad-link">
        <img
        src="https://i.ibb.co/fpK1vLZ/Screenshot-2024-08-19-084608.png"
        :alt="altText"
        class="ad-image"
      />
      </NuxtLink>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      altText: {
        type: String,
        default: "Advertisement"
      }
    }
  };
  </script>
  
  