<script setup>
import HeaderBanner from '../components/home/HeaderBanner.vue'
import OurServices from '../components/Home/OurServices.vue'
import WHOinfo from '../components/Home/WHOinfo.vue'
import Articles from '../components/Home/Articles.vue'
import FAQ from '../components/Home/Faqs.vue'
import { Faqs } from '../utils/data/faqs'
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

    <!-- frequently asked questions -->
    <section class="my-28 md:my-40">
      <div class="my-20 max-w-3xl m-auto text-center">
        <h1 class="text-3xl md:text-4xl font-black text-primary-green">Frequently Asked Questions</h1>
        <p class="my-5 leading-7">Our FAQ area is the best place to look to find answers to your questions. Our
          community and support team constantly updates the questions and answers.
        </p>
      </div>

      <!-- faqs -->
      <div class=" flex flex-col gap-4 max-w-6xl mx-auto">
        <template v-for="(faq, index) in Faqs" :key="index">
          <FAQ :question="faq.question" :answer="faq.answer" />
        </template>
      </div>
    </section>
  </main>
</template>

<style></style>