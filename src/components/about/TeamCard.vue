<script setup>
defineProps(['name', 'title', 'image'])
</script>

<template>
  <div class="w-[350px] box-shadow bg-white text-center p-5 py-10">
    <div class="rounded-full mx-auto w-[60%]">
      <img :src="image" :alt="name" class="w-full">
    </div>

    <p class="text-xl font-bold mt-4 mb-1">{{ name }}</p>

    <p class="text-red-500"> {{ title }} <img src="../../assets/images/icons/linkedin.svg" alt=""
        class="inline w-4 relative bottom-[1px]">
    </p>
  </div>
</template>


<style scoped>
.box-shadow {
  box-shadow: 0px 5px 20px 0px rgba(0, 15, 31, 0.05);
}
</style>