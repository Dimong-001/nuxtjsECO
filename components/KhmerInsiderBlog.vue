<template>
  <div :class="['ad-container', { dark: isDarkMode }]">
    <NuxtLink :to="linkUrl" class="ad-link" :aria-label="altText">
      <div class="ad-image-container">
        <img :src="imageSrc" :alt="altText" class="ad-image" />
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  linkUrl: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    default: 'https://economy.ams.com.kh/wp-content/uploads/2021/05/07_KHMER_INSIDER_S3_WEB-COVER-scaled.jpg', // Default image
  },
  altText: {
    type: String,
    default: 'Khmer Insider', // Accessible alt text for the image
  },
  isDarkMode: {
    type: Boolean,
    default: false, // Toggle for light/dark mode
  },
});
</script>

<style scoped>
/* Main container styling */
.ad-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh; /* Fill the viewport */
  padding: 0;
  background-color: var(--bg-color, #f5f5f5); /* Default to light mode */
  text-align: center;
  transition: background-color 0.3s ease; /* Smooth transition for theme changes */
}

/* Link styling */
.ad-link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  padding: 20px;
}

/* Image styling */
.ad-image-container {
  width: 100%;
  max-width: 800px; /* Optional max-width to control image size */
}

.ad-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px; /* Optional rounded corners */
  transition: transform 0.3s ease; /* Add hover effect */
}

.ad-link:hover .ad-image {
  transform: scale(1.02); /* Slight zoom on hover */
}

/* Dark Mode Variables */
.ad-container.dark {
  --bg-color: #1a1a1a;
}

/* Responsive Design */
@media (max-width: 768px) {
  .ad-image-container {
    max-width: 100%;
  }
}
</style>
