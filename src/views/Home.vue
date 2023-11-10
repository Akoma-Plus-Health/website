<script setup>
// import { ref, onMounted, onBeforeUnmount } from 'vue'
import HeaderBanner from '../components/home/HeaderBanner.vue'
import DidYouKnowSlider from '../components/home/DidYouKnowSlider.vue'
import ServiceCard from '../components/services/ServiceCard.vue'
import GetInTouch from '../components/ui/GetInTouch.vue'
// import FeedbackSlider from '../components/Slider.vue'
import { serviceList } from '../utils/data/services'
import FAQ from '../components/Home/Faqs.vue'
import { Faqs } from '../utils/data/faqs'
import MobileAppComingSoonSlider from '../components/Home/MobileAppComingSoonSlider.vue'
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
        <section class=" my-32 pb-32 pt-24  bg-[url('@/assets/images/wave.svg')] bg-center bg-cover">

            <div class="container mx-auto">
                <!-- Our services -->
                <div class="mb-14 max-w-3xl m-auto sm:text-center">
                    <h2 class="text-3xl md:text-4xl font-bold">Our Services</h2>
                </div>

                <!-- Services cards -->
                <div class="flex gap-4 justify-center flex-wrap lg:flex-nowrap">
                    <template v-for="(item, index) in    serviceList" :key="index">
                        <ServiceCard :image="getImageUrl(item.icon)" :title="item.name" :description="item.desc"
                            :url="item.url" class="sm:w-[50%] lg:w-[400px]" />
                    </template>
                </div>

            </div>
        </section>


        <!-- Akoma+ mobile app coming sooon -->
        <section class="py-auto mx-auto drop-shadow-20">
            <MobileAppComingSoonSlider />
        </section>

        <!-- Get in touch -->
        <section class="my-32">
            <GetInTouch />
        </section>

        <!-- Frequently asked questions -->
        <section class="container my-48 mx-auto">
            <div class="max-w-3xl m-auto sm:text-center">
                <h1 class="text-3xl md:text-4xl text-[#590000] font-bold">Frequently Asked Questions</h1>
                <p class="my-5 text-lg leading-7">Our FAQ area is the best place to look to find answers to your questions.
                    Our
                    community and support team constantly updates the questions and answers.
                </p>
            </div>

            <!-- faqs -->
            <div class=" flex flex-col gap-4 max-w-6xl mx-auto mt-14">
                <template v-for="(faq, index) in Faqs" :key="index">
                    <FAQ :question="faq.question" :answer="faq.answer" />
                </template>
            </div>
        </section>


    </main>
</template>