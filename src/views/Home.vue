<script setup>
// import { ref, onMounted, onBeforeUnmount } from 'vue'
import HeaderBanner from '../components/home/HeaderBanner.vue'
import DidYouKnowSlider from '../components/home/DidYouKnowSlider.vue'
import ServiceCard from '../components/services/ServiceCard.vue'
// import FeedbackSlider from '../components/Slider.vue'
import { serviceList } from '../utils/data/services'
import FAQ from '../components/Home/Faqs.vue'
import { Faqs } from '../utils/data/faqs'
// import { testimonyList } from '../utils/data/testimonies'

function getImageUrl(name, ext) {

    console.log(new URL(`../assets/images/icons/${name}`, import.meta.url).href)
    return new URL(`../assets/images/icons/${name}`, import.meta.url).href
}
</script>
<template>
    <main>
        <HeaderBanner />

        <!-- did you know? -->
        <section class="container mx-auto my-32">

            <!-- did you know text -->
            <div class="my-20 max-w-3xl m-auto text-center">
                <h2 class="text-3xl md:text-4xl font-bold">Did you know?</h2>
            </div>

            <!-- did you know slider -->
            <DidYouKnowSlider />
        </section>
        <!-- Services -->
        <section class="container py-10 md:my-20 mx-auto">
            <div class="my-20 max-w-3xl m-auto text-center">
                <h1 class="text-3xl md:text-4xl text-red-800 font-black">Our Services</h1>
                <p class="my-5 text-2xl leading-7">Our services are tailored to empower you on your journey to a better
                    health.
                </p>
            </div>
            <div class="flex gap-4 justify-center flex-wrap lg:flex-nowrap">
                <template v-for="(item, index) in    serviceList" :key="index">
                    <ServiceCard :image="getImageUrl(item.icon)" :title="item.name" :description="item.desc" :url="item.url"
                        class="sm:w-[50%] lg:w-[400px]" />
                </template>
            </div>
        </section>
        <section class="py-auto mx-auto drop-shadow-20">
            <div class="mx-auto">
                <div class="flex gap-4 justify-center flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
                    <div class="flex flex-col container my-auto lg:w-1/2 gap-4">
                        <h1 class="text-red-950 text-7xl font-bold">Akoma+ Mobile App, Coming Soon</h1>
                        <p class="text-2xl"> Your heart's health is in your hands, and Akoma+ is here to help. We're excited
                            to introduce our upcoming mobile app, designed
                            for your convenience and well-being.
                            <!-- With Akoma+, you'll have
                            the power to monitor your heart health at your fingertips, no
                            matter where you are. -->
                        </p>
                        <div class="float-left text-sm text-gray-600 lg:mt-36">
                            <p class="text-red-950 text-4xl font-semibold">Coming Soon On</p>
                            <div class="inline-flex gap-8 pt-5 w-[520px]">
                                <img src="@/assets/images/akoma_app_is_on_apple_appstore.webp"
                                    alt="akomaplus_app_is_on_apple_appstore"
                                    class="inline-flex items-center gap-2 w-2/5 text-xl font-bold text-black md:text-2xl" />
                                <img src="@/assets/images/akoma_app_is_on_google_playstore.webp"
                                    alt="akomaplus_app_is_on_apple_playstore"
                                    class="inline-flex items-center gap-2 w-2/5 text-xl font-bold text-black md:text-2xl" />
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/2">
                        <img class="box-shadow mx-auto rounded-lg" src="@/assets/images/akoma_mobile_app.png"
                            alt="Akoma+ Mobile App Coming Soon">
                    </div>
                </div>
            </div>
        </section>
        <!-- Services -->
        <!-- <section class="container my-10 md:my-20 mx-auto">
            <div class="flex gap-4 justify-center flex-wrap lg:flex-nowrap">
                <template v-for="(item, index) in    serviceList" :key="index">
                    <ServiceCard :image="getImageUrl(item.icon)" :title="item.name" :description="item.desc" :url="item.url"
                        class="sm:w-[50%] lg:w-[400px]" />
                </template>
            </div>
        </section> -->
        <!-- <section class="container py-20 md:my-20 mx-auto">
            <div class="my-20 max-w-3xl m-auto text-center">
                <h1 class="text-3xl md:text-4xl text-red-800 font-black">Our Client Testimonial</h1>
                <p class="my-5 text-lg leading-7">Feedback from our patients and subscribers who have succesful reached a
                    tangible milestoine on their journey to a better health </p>
            </div>

            -- faqs --
            <div class=" flex flex-col gap-4 max-w-6xl mx-auto">
                <template>
                    <FeedbackSlider :testimonials="testimonials" />
                </template>
            </div>
        </section> -->
        <section class="container py-20 md:my-20 mx-auto">
            <div class="my-20 max-w-3xl m-auto text-center">
                <h1 class="text-3xl md:text-4xl text-red-800 font-black">Frequently Asked Questions</h1>
                <p class="my-5 text-lg leading-7">Our FAQ area is the best place to look to find answers to your questions.
                    Our
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
        <section class="py-60 md:py-36 mx-auto bg-red-900">
            <div class="container mx-auto max-w-screen-2xl px-4 md:px-8">
                <h2 class="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-4xl">Let's Get In Touch</h2>

                <p class="mx-auto max-w-screen-md text-center text-white text-5xl md:text-2xl">To find out more about our
                    services,
                    have a conversation with our knowledgeable staff.</p>
                <p
                    class="hover:border-white hover:bg-primary hover:text-white my-4 border border-red-900 py-2 mx-auto w-36 rounded-xl text-center bg-white font-semibold text-red-800 md:mb-3 lg:text-lg">
                    <a href="#" class="mx-2">
                        Let's Have A Chat
                    </a>
                </p>
            </div>
        </section>
    </main>
</template>