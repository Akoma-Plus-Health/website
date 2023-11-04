<script setup>
import HeaderBanner from '../components/Home/HeaderBanner.vue';
import OurServices from '../components/Home/OurServices.vue';
import WHOinfo from '../components/Home/WHOinfo.vue'
import Articles from '../components/Home/Articles.vue'
</script>

<template>
  <main class="home">
    <HeaderBanner />
    <OurServices />
    <WHOinfo />
    <Articles class="mx-20 my-20" />
    <section class="h-[420px] bg-red-800">
      <div class="mx-10 my-10 ">
        <div class="mb-10 mt-32 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Frequently asked questions
          </h2>

          <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler
            text, also known as placeholder text. It shares some characteristics of a real written text but is random or
            otherwise generated.</p>
        </div>
      </div>
    </section>
    <section class="h-[420px] bg-white -auto">
      <div class="mt-32">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Frequently asked questions
          </h2>

          <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler
            text, also known as placeholder text. It shares some characteristics of a real written text but is random or
            otherwise generated.</p>
        </div>
        <!-- text - end -->
      </div>
    </section>
  </main>
</template>

<style></style>