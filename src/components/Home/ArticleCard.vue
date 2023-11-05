<script setup>
import { ref } from 'vue';

const articles = ref([
  { id: 1, title: "Preventing Heart Disease in Low-Income Communities", desc: "Delve into the critical issue of heart disease prevention in underserved communities and discusses the unique challenges low-income areas face and highlights effective strategies.", },
  { id: 2, title: "Partnership", desc: "Collaborate with us to expand global heart health initiatives, enhance health insurance offerings, and improve local hospital services." },
  { id: 3, title: "Workplace", desc: "We partner with businesses and organizations to screen their  workforce for heart disease and stroke risks to promote a healthier and more productive workforce." }
])
</script>
<template>
  <!-- article - start -->
  <div class="flex flex-col overflow-hidden drop-shadow-md bg-white w-[450px]" :key="id" v-for="article in articles">
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