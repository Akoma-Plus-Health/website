<script setup>
defineProps(['title', 'image', 'desc', 'url'])

const articles = [
  {
    title: "Preventing Heart Disease in Low-Income Communities", desc: "Delve into the critical issue of heart disease prevention in underserved communities and discusses the unique challenges low-income areas face and highlights effective strategies."
  },
  { title: "Heart-Healthy Recipes for a Happy Life", desc: "Discover a collection of delicious recipes that not only tantalize your taste buds but also promote a healthier heart. This features a variety of nutrient-rich and easy-to-make dishes..." },
  { title: "Understanding Cholesterol Levels and It’s Healthy Gains", desc: "This article breaks down the complexities of cholesterol, helping you grasp the different types and their impact on heart health. Gain insights into maintaining optimal cholesterol levels..." }
] 
</script>
<template>
  <!-- article - start -->

  <template>
    <div class="min-h-[400px] bg-gray-200 rounded-md w-[300px]">
      <!-- header -->
      <div class="w-full py-4 rounded-t-md text-white">
        <img :src="image" :alt="title">
      </div>

      <!-- body and list -->
      <div class="p-4">
        <template v-for="(item, index) in list" :key="index">
          <div class=" flex gap-2">
            <p class="  text-center font-semibold">
              {{ title }}
            </p>
            <p class="mb-2">
              {{ description }}
            </p>
          </div>
        </template>
      </div>
    </div>
  </template>
  <!-- <div class="flex flex-col min-h-[400px] w-[300px] overflow-hidden rounded-lg border bg-white" :key="id"
    v-for="article in articles">
    <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
      <img src="../../assets/images/heart2.png" loading="lazy" alt="Photo by Minh Pham"
        class="absolute inset-0 h-full w-full mix-blend-darken object-cover rounded-lg object-center transition duration-200 group-hover:scale-110" />
    </a>

    <div class="flex flex-1 flex-col p-4 sm:p-6">
      <h2 class="mb-2 text-lg font-semibold text-gray-800">
        <a href="#" class="transition duration-100 hover:text-gray-500 active:text-black">{{ article.title }} </a>
      </h2>

      <p class="text-gray-500">{{ article.desc }} </p>

      <div class="mt-auto flex items-end justify-between">
        <span class="text-sm text-black hover:text-red-800"><a href="#">Read More</a></span>

        <span class="px-2 py-1 text-sm text-red-800">3 mins read</span>
      </div>
    </div>
  </div> -->
  <!-- article - end -->
</template>
<style scoped></style>