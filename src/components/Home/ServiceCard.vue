<script setup>
import { ref } from 'vue';

const services = ref([
    {
        id: 1, name: "Health Screening", desc: "We screen you for heart disease and stroke risks for early detection and prevention. We estimate your risk of a heart attack or stroke and work to minimize this risk!",
        contents: ref([
            { id: 1, name: "Hypertension (High blood pressure)" },
            { id: 2, name: "Type 2 Diabetes" },
            { id: 3, name: "High cholesterol" },
            { id: 4, name: "Obesity" },
            { id: 5, name: "Metabolic syndrome" },
            { id: 6, name: "Atrial fibrillation or irregular heartbeats" }
        ])
    },
    {
        id: 2, name: "Partnership", desc: "Collaborate with us to expand global heart health initiatives, enhance health insurance offerings, and improve local hospital services.",
        contents: ref([
            { id: 1, name: "International organizations/ NGOs:  We partner with international organizations and NGOs to expand access to routine health screening to the underserved." },
            { id: 2, name: "Local Hospitals: We serve as a referral base for our partner hospitals. Our participants become your patients." },
            { id: 3, name: "Health insurance providers: We partner with health insurance providers to provide life-saving health screenings for their beneficiaries and reduce huge healthcare expenditure associated with acute care." }
        ])
    },
    { id: 3, name: "Workplace", desc: "We partner with businesses and organizations to screen their  workforce for heart disease and stroke risks to promote a healthier and more productive workforce." }
])
</script>


<template>
    <div class="py-2 sm:py-[75px]" :key="id" v-for="service in services">
        <div class="group bg-white sm:w-[450px] h-[280px] drop-shadow-md rounded-lg sm:p-4">
            <div class="block group-hover:hidden">
                <div class="p-4">
                    <p class="font-bold text-2xl sm:text-4xl">
                        <img src="../../assets/images/heart.png" class="w-[50px] float-left mr-3 sm:mr-5" alt="">{{
                            service.name }}
                    </p>
                </div>
                <div class="p-4">
                    <p class="leading-6	">{{ service.desc }}</p>
                </div>
            </div>
            <div class="hidden group-hover:block">
                <div class="hidden group-hover:block">
                    <div class="p-4">
                        <p class="leading-6	">
                        <ul :key="id" v-for="content in service.contents">
                            <li>{{ content.name }}</li>
                        </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped></style>