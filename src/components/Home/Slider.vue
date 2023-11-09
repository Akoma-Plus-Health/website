<script setup lang="ts">
import { ref } from 'vue'

import TestimonialImg01 from '../assets/images/testimonial-01.jpg'
import TestimonialImg02 from '../assets/images/testimonial-02.jpg'
import TestimonialImg03 from '../assets/imagestestimonial-03.jpg'

const active = ref<number>(0)
const autorotate = ref<boolean>(true)
const autorotateTiming = ref<number>(7000)

interface Testimonial {
    img: string
    quote: string
    name: string
    role: string
}

const testimonials: Testimonial[] = [
    {
        img: TestimonialImg01,
        quote: "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to be able to select between formats.ture responses is a game-changer.",
        name: 'Jessie J',
        role: 'Ltd Head of Product'
    },
    {
        img: TestimonialImg02,
        quote: "I have been using this product for a few weeks now and I am blown away by the results. My skin looks visibly brighter and smoother, and I have received so many compliments on my complexion.",
        name: 'Mark Luk',
        role: 'Spark Founder & CEO'
    },
    {
        img: TestimonialImg03,
        quote: "As a busy professional, I don't have a lot of time to devote to working out. But with this fitness program, I have seen amazing results in just a few short weeks. The workouts are efficient and effective.",
        name: 'Jeff Kahl',
        role: 'Appy Product Lead'
    }
]
</script>

<template>
    <div class="w-full max-w-3xl mx-auto text-center">
        <!-- ... -->
    </div>
</template>