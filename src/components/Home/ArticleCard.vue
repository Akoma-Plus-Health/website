<script setup>
import { ref } from 'vue';

const articles = ref([
  {
    id: 1, title: "Preventing Heart Disease in Low-Income Communities", desc: "Delve into the critical issue of heart disease prevention in underserved communities and discusses the unique challenges low-income areas face and highlights effective strategies."
  },
  { id: 2, title: "Heart-Healthy Recipes for a Happy Life", desc: "Discover a collection of delicious recipes that not only tantalize your taste buds but also promote a healthier heart. This features a variety of nutrient-rich and easy-to-make dishes..." },
  { id: 3, title: "Understanding Cholesterol Levels and It’s Healthy Gains", desc: "This article breaks down the complexities of cholesterol, helping you grasp the different types and their impact on heart health. Gain insights into maintaining optimal cholesterol levels..." }
])
</script>
<template>
  <!-- article - start -->
  <!-- <div class="flex sm:flex-col overflow-hidden drop-shadow-md bg-white w-[300px] sm:w-[370px]" :key="id"
    v-for="article in articles"> -->
  <div class="flex flex-col overflow-hidden rounded-lg border bg-white" :key="id" v-for="article in articles">
    <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
      <img src="../../assets/images/heart2.png" loading="lazy" alt="Photo by Minh Pham"
        class="absolute inset-0 h-full w-full mix-blend-darken object-cover rounded-lg object-center transition duration-200 group-hover:scale-110" />
    </a>

    <div class="flex flex-1 flex-col p-4 sm:p-6">
      <h2 class="mb-2 text-lg font-semibold text-gray-800">
        <a href="#" class="transition duration-100 hover:text-gray-500 active:text-black">{{ article.title }} </a>
      </h2>

      <p class="mb-8 text-gray-500">{{ article.desc }} </p>

      <div class="mt-auto flex items-end justify-between">
        <span class="text-sm text-black hover:text-red-800"><a href="#">Read More</a></span>

        <span class="px-2 py-1 text-sm text-red-800">3 mins read</span>
      </div>
    </div>
  </div>
  <!-- article - end -->
</template>
<style scoped></style>