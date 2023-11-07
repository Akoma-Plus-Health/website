<script setup>
import HeaderBanner from '../components/Home/HeaderBanner.vue'
import OurServices from '../components/Home/OurServices.vue'
import WHOinfo from '../components/Home/WHOinfo.vue'
import Articles from '../components/Home/Articles.vue'
import Faqs from '../components/Home/Faqs.vue'
// import { FwbButton } from 'flowbite-vue'
import VideoSection from '../components/Home/VideoSection.vue'
import Testimonials from '../components/Home/Testimonials.vue'
</script>

<template>
  <main class="home m-0">
    <HeaderBanner />
    <OurServices />
    <WHOinfo />
    <Articles class="mx-auto my-10" />
    <VideoSection />
    <Testimonials />
    <section class="bg-primary sm:py-8 lg:py-12 py-20">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 class="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">Let's Get In Touch</h2>

        <p class="mx-auto max-w-screen-md text-center text-white md:text-lg">To find out more about our services, have a
          conversation with our knowledgeable staff.</p>
        <p
          class="hover:border-white hover:bg-primary hover:text-white my-4 border border-red-900 py-2 mx-auto w-36 rounded-xl text-center bg-white font-semibold text-red-800 md:mb-3 lg:text-lg">
          <a href="#" class="mx-2">
            Let's Have A Chat
          </a>
        </p>

      </div>
    </section>
    <!-- <section class="chatcta bg-red-950 m-0">
      <div class="py-28 flex flex-col">
        <div class="flex py-6 sm:py-8 lg:py-12 ">
          <div class="flex mx-auto flex-col border">
            <h2 class="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">Let's Get In Touch</h2>

            <p class="mx-auto w-[450px] text-center text-slate-100 md:text-lg">To find out more about our services, have a
              conversation with our knowledgeable staff.</p>
            <button
              class="inline-block mx-auto rounded-lg bg-white mt-4  px-auto py-3 text-center text-sm font-semibold text-primary outline-none ring-red-300 transition w-56 duration-100 hover:bg-red-900 focus-visible:ring active:bg-red-700 md:text-base">Let's
              Have A Chat</button>
          </div>
        </div>
      </div>
    </section> -->
    <section class="h-[640px] bg-white m-auto">
      <div class="mt-32">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">FAQs</h2>

          <p class="mx-auto max-w-screen-md text-center text-gray-500 text-sm">To get the answers to your queries, the
            best place to look is our FAQ area. Answers and queries are regularly updated by our community and support
            staff.</p>
        </div>
        <!-- text - end -->
        <!-- <Faqs class="mx-auto mb-20" /> -->
      </div>
    </section>
  </main>
</template>

<style></style>