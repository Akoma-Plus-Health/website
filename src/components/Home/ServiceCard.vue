<script setup>
import { ref } from 'vue';

const services = ref([
    { id: 1, title: "Health Screening", desc: "We screen you for heart disease and stroke risks for early detection and prevention. We estimate your risk of a heart attack or stroke and work to minimize this risk!", },
    { id: 2, title: "Partnership", desc: "Collaborate with us to expand global heart health initiatives, enhance health insurance offerings, and improve local hospital services." },
    { id: 3, title: "Workplace", desc: "We partner with businesses and organizations to screen their  workforce for heart disease and stroke risks to promote a healthier and more productive workforce." }
])
</script>


<template>
    <div class="py-[75px]" :key="id" v-for="service in services">
        <div class="bg-white w-[450px] h-[280px] drop-shadow-md rounded-lg p-4	">
            <div class=" p-4">
                <p class="font-bold text-4xl mt-[15px]">
                    <img src="../../assets/images/heart.png" class="w-[50px] float-left mr-5" alt="">{{ service.title }}
                </p>
            </div>
            <div class="p-4">
                <p class="leading-6	">{{ service.desc }}</p>
            </div>
        </div>
    </div>
</template>


<style scoped></style>