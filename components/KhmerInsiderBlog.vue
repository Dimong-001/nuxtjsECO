<template>
  <div class="ad-container">
    <NuxtLink :to="linkUrl" class="ad-link">
      <div class="ad-text">
        <h2>KHMER INSIDER </h2>
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
  background-color: #f5f5f5; /* Optional background color */
  text-align: center;
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
  color: #333; /* Main text color */
  font-weight: bold;
}

@media (max-width: 768px) {
  .ad-text h2 {
    font-size: 24px; /* Adjust font size for smaller screens */
  }
}
</style>
