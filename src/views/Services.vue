<script setup>
import Pageheader from '../components/services/ServiceHeader.vue'
import PackageCard from '../components/ui/PackageCard.vue'
import GetInTouch from '../components/ui/CTA.vue'

import { healthPackage } from '../utils/data/services';
</script>
<template>
    <Pageheader />
    <main class="max-h-full">
        <section class="container my-10 md:my-20 mx-auto">
            <div class="flex gap-4 justify-center flex-wrap lg:flex-nowrap">
                <div class="lg:w-1/2">
                    <img class="box-shadow rounded-lg mx-auto" src="@/assets/images/services/akoma_health_services.png"
                        alt="Akoma+ health Screening">
                </div>
                <div class="flex flex-col lg:w-1/2 gap-4">
                    <h2 class="font-black text-2xl md:text-3xl mb-3">Health Screening</h2>
                    <p> We screen you for heart disease and stroke risks for early detection and prevention.
                        We estimate your risk of a heart attack or stroke and work to minimize this risk!. Akoma+ health
                        screening services provide a holistic approach to heart health assessment. Our comprehensive
                        screenings include monitoring blood pressure and assessing various risk factors, such as age, family
                        history, and lifestyle. </p>
                    <span>
                        <p class="mb-2 font-bold">We screen for the following:</p>
                        <ul class="ml-4">
                            <li class="mb-2"><span class="list-donut"></span> Hypertension (High blood pressure)</li>
                            <li class="mb-2"><span class="list-donut"></span> Type 2 Diabetes</li>
                            <li class="mb-2"><span class="list-donut"></span> Hign Cholesterol</li>
                            <li class="mb-2"><span class="list-donut"></span> Obesity</li>
                            <li class="mb-2"><span class="list-donut"></span> Metabolic syndrome</li>
                            <li class="mb-2"><span class="list-donut"></span> Atrial fibrillation or irregular heartbeats.
                            </li>
                        </ul>
                    </span>
                </div>
            </div>
        </section>

        <!-- Packages -->
        <section class="container my-10 md:my-20 mx-auto">
            <div class="flex gap-4 justify-center flex-wrap lg:flex-nowrap">

                <template v-for="(item, index) in healthPackage" :key="index">
                    <PackageCard :title="item.name" :color="item.color" :list="item.list" class="sm:w-[48%] lg:w-[300px]" />
                </template>

            </div>
        </section>

        <section class="container my-10 md:my-20 mx-auto">
            <div class="flex gap-4 justify-center flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
                <div class="flex flex-col lg:w-1/2 gap-4">
                    <h2 class="font-black text-2xl md:text-3xl mb-5">Workplace Wellness</h2>
                    <p> We partner with businesses and organizations to screen their workforce for heart
                        disease and stroke risks to promote a healthier and more productive workforce. employees, fostering
                        a productive and vibrant work environment. Our comprehensive workplace wellness programs include
                        health screenings, fitness initiatives, stress management resources, and educational workshops. </p>

                    <p>We partner with organizations to create a customized plan that addresses the unique needs of
                        their
                        workforce, promoting healthier lifestyles and reducing health risks. Our goal is to empower
                        employees to proactively manage their health, resulting in increased morale, reduced absenteeism,
                        and improved overall productivity. With Akoma+, you can invest in the long-term well-being of your
                        workforce, creating a healthier and more motivated team.</p>
                </div>
                <div class="lg:w-1/2">
                    <img class="box-shadow mx-auto rounded-lg"
                        src="@/assets/images/services/akomaplus_workplace_wellness.png" alt="Akoma+ Workplace Wellness">
                </div>
            </div>
        </section>

        <section class="container my-10 md:my-20 mx-auto">
            <div class="flex gap-4 justify-center flex-wrap lg:flex-nowrap">
                <div class="lg:w-1/2">
                    <img class="box-shadow mx-auto rounded-lg"
                        src="@/assets/images/services/close-up-akoma-group-standing-circle.png" alt="Akoma+ Partnership">
                </div>
                <div class="flex flex-col lg:w-1/2 gap-4">
                    <h2 class="font-black text-2xl md:text-3xl mb-5">Partnership</h2>
                    <p> <span class="font-bold">International organizations/ NGOs:</span> We partner with
                        international organizations and NGOs
                        to expand access to routine health screening to the underserved. Akoma+ Services for International
                        Organizations and NGOs provide a valuable platform to collaborate in advancing global heart health
                        initiatives.</p>

                    <p><span class="font-bold">Local Hospitals:</span> We serve as a referral base for our
                        partner hospitals. Our participants become your
                        patients. Akoma+ Services for Local Hospitals are designed to enhance patient care and community
                        health. We provide innovative tools and support to empower local healthcare facilities in their
                        mission to improve heart health.</p>

                    <p><span class="font-bold">Health insurance providers:</span> Akoma+ Services for
                        Health
                        Insurance Providers offer a transformative
                        approach to healthcare coverage. By integrating our mobile health solutions and data analytics,
                        insurance providers can offer their policyholders a holistic heart health management experience. By
                        partnering with Akoma+, health insurance providers can not only enhance the health outcomes of their
                        policyholders but also reduce healthcare costs in the long run. </p>
                </div>
            </div>
        </section>
        <section class="py-60 md:py-36 mx-auto bg-red-900">
            <GetInTouch />
        </section>
    </main>
</template>