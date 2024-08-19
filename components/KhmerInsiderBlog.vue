<template>
    <div class="ad-container">
      <NuxtLink to="/your-ad-link" class="ad-link">
        <img
          src="https://i.ibb.co/jgPZ0JS/Screenshot-2024-08-19-094446.png" 
          :alt="altText"
          class="ad-image w-full h-auto"
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

  