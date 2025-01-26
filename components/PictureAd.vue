<template>
  <div :class="['ad-container', { dark: isDarkMode }]">
    <!-- Primary Advertisement -->
    <NuxtLink :to="linkUrl" class="ad-link" :aria-label="primaryAltText">
      <div class="ad-image-container">
        <img :src="primaryImageSrc" :alt="primaryAltText" class="ad-image" />
      </div>
    </NuxtLink>

    <!-- Secondary Advertisement -->
    <NuxtLink :to="secondaryLinkUrl" class="ad-link mt-4" :aria-label="secondaryAltText">
      <div class="ad-text">
        <h2>{{ secondaryText }}</h2>
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
  primaryImageSrc: {
    type: String,
    default: 'https://economy.ams.com.kh/wp-content/uploads/2021/05/07_KHMER_INSIDER_S3_WEB-COVER-scaled.jpg', // Default primary ad image
  },
  primaryAltText: {
    type: String,
    default: 'Khmer Insider Ad', // Accessible alt text for primary image
  },
  secondaryLinkUrl: {
    type: String,
    required: true, // Secondary link URL
  },
  secondaryText: {
    type: String,
    default: 'Advertisement with AMS here', // Default secondary text
  },
  secondaryAltText: {
    type: String,
    default: 'Advertisement with AMS', // Accessible alt text for secondary ad
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
  flex-direction: column;
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

/* Primary Image Styling */
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

/* Secondary Advertisement Text Styling */
.ad-text h2 {
  font-size: 32px;
  color: var(--text-color, #333); /* Default text color for light mode */
  font-weight: bold;
  transition: color 0.3s ease; /* Smooth transition for theme changes */
}

.ad-container.dark {
  --bg-color: #1a1a1a;
  --text-color: #f5f5f5;
}

@media (max-width: 768px) {
  .ad-image-container {
    max-width: 100%;
  }
  .ad-text h2 {
    font-size: 24px; /* Adjust font size for smaller screens */
  }
}
</style>
