<template>
    <div class="bg-gray-50 py-8">
      <div class="container mx-auto">
        <!-- Title -->
        <h1 class="text-3xl font-bold mb-8 khmer-font">ព្រឹត្តិការណ៍ប្រចាំថ្ងៃ</h1>
  
        <!-- Responsive Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Example of a single news item -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <NuxtLink to="/post/1">
              <img
                src="https://via.placeholder.com/600x400" <!-- Replace with your image URL -->
                alt="News Image"
                class="w-full h-48 object-cover"
              />
            </NuxtLink>
            <div class="p-4">
              <NuxtLink to="/post/1" class="block">
                <h2 class="text-lg font-semibold mb-2 khmer-font hover:text-red-500">
                  នាយករដ្ឋមន្ត្រីបញ្ជាក់ពីបញ្ហាទំនងជារូបភាពជាផ្លូវការ
                </h2>
              </NuxtLink>
              <p class="text-gray-600 khmer-font">តួចាកង, ព្រឹត្តិការណ៍</p>
            </div>
          </div>
  
          <!-- Repeat the above structure for each item -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <NuxtLink to="/post/2">
              <img
                src="https://via.placeholder.com/600x400" <!-- Replace with your image URL -->
                alt="News Image"
                class="w-full h-48 object-cover"
              />
            </NuxtLink>
            <div class="p-4">
              <NuxtLink to="/post/2" class="block">
                <h2 class="text-lg font-semibold mb-2 khmer-font hover:text-red-500">
                  សហរដ្ឋអាមេរិក និងអាមេរិកដំឡើងឯកភាព
                </h2>
              </NuxtLink>
              <p class="text-gray-600 khmer-font">ភីញេ, ព្រឹត្តិការណ៍</p>
            </div>
          </div>
  
          <!-- Add more items as needed -->
        </div>
  
        <!-- Load More Button -->
        <div class="text-center mt-8">
          <button class="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700">
            ទំព័របន្ថែម
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: '/finance',
  };
  </script>
  
  <style scoped>
  @import "@/assets/css/tailwind.css"; /* Import Tailwind CSS */
  
  @import url('https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&display=swap');
  
  /* Apply Battambang font to Khmer text */
  .khmer-font {
    font-family: 'Battambang', sans-serif;
  }
  
  /* Custom hover effect */
  .hover\:text-red-500:hover {
    color: #ef4444;
  }
  </style>
  