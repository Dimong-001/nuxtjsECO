<template>
  <div class="ad-container">
    <NuxtLink :to="linkUrl" class="ad-link">
      <div class="ad-text">
        <h2>Advertisement with AMS here</h2>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  linkUrl: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
/* Global reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

/* Main container styling */
.ad-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh; /* Make the container fill the viewport */
  padding: 0;
  background-color: #f5f5f5; /* Light mode background color */
  text-align: center;
}

.ad-container.dark {
  background-color: #1a1a1a; /* Dark mode background color */
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

/* Text content styling */
.ad-text h2 {
  font-size: 32px;
  color: #333; /* Main text color for light mode */
  font-weight: bold;
}

.ad-container.dark .ad-text h2 {
  color: #f5f5f5; /* Text color for dark mode */
}

@media (max-width: 768px) {
  .ad-text h2 {
    font-size: 24px; /* Adjust font size for smaller screens */
  }
}
</style>
