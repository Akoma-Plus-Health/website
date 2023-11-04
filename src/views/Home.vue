<script setup>
import HeaderBanner from '../components/Home/HeaderBanner.vue'
import OurServices from '../components/Home/OurServices.vue'
import WHOinfo from '../components/Home/WHOinfo.vue'
import Articles from '../components/Home/Articles.vue'
import Faqs from '../components/Home/Faqs.vue'
import { FwbButton } from 'flowbite-vue'
</script>

<template>
  <main class="home">
    <HeaderBanner />
    <OurServices />
    <WHOinfo />
    <Articles class="mx-20 my-10" />
    <section class="chatcta">
      <div class="py-28 bg-gredient-r flex flex-col">
        <div class="flex py-6 sm:py-8 lg:py-12 ">
          <div class="flex mx-auto flex-col">
            <h2 class="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">Let's Get In Touch</h2>

            <p class="mx-auto w-[450px] text-center text-slate-100 md:text-lg">To find out more about our services, have a
              conversation with our knowledgeable staff.</p>
            <fwb-button
              class="mx-auto  dark:hover:bg-red-950 hover:text-white dark:bg-white mt-8 dark:text-red-900 font-bold">
              Lets Have A Chat
            </fwb-button>
            <!-- <a href="#" class="mx-auto">
            <button
              class="mx-auto hover:bg-red-950 hover:text-white w-36 h-10 rounded-lg bg-white mt-8 font-bold text-red-900">
              Lets Have A Chat
            </button>
          </a> -->
          </div>
        </div>
      </div>
    </section>
    <section class="h-[640px] bg-white m-auto">
      <div class="mt-32">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">FAQs
          </h2>

          <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">To get the answers to your queries, the
            best place to look is our FAQ area. Answers and queries are regularly updated by our community and support
            staff.</p>
        </div>
        <!-- text - end -->
        <Faqs class="mx-80 mb-40" />
      </div>
    </section>
  </main>
</template>

<style></style>