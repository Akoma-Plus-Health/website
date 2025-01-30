<script>
import PackageCard from '../components/ui/PackageCard.vue'
import GetInTouch from '../components/ui/GetInTouch.vue'
import { healthPackage } from '../utils/data/services';
import ServiceHeader from '../components/services/ServiceHeader.vue';
// import BookingForm from '../components/services/BookingForm.vue'

export default {
    data() {
        return {
            isOpen: false,
            showModal: false
        };
    },
    computed: {
        isModalVisible() {
            return this.isOpen;
        },
        isModalShowing() {
            return this.showModal;
        }
    },
    methods: {
        onToggle() {
            this.isOpen = !this.isOpen;
        },
        Toggle() {
            this.showModal = !this.showModal;
        }
    },
    components: { ServiceHeader }
};
</script>
<template>
    <ServiceHeader />
    <main class="max-h-full">
        <section class="container my-10 md:my-20 mx-auto" id="healthcare">
            <div class="flex gap-10 justify-center flex-wrap lg:flex-nowrap">
                <div class="lg:w-1/2">
                    <img class="box-shadow rounded-lg mx-auto"
                        src="@/assets/images/Akoma-ambulance2.jpg"
                        alt="Akoma+ health Screening">
                </div>
                <div class="flex flex-col lg:w-1/2 gap-4">
                    <h2 class="font-black text-2xl md:text-3xl mb-3">Individual Heart Screening</h2>
                    <p> We screen you for heart disease and stroke risks for early detection and prevention.
                        We estimate your risk of a heart attack or stroke and work to minimize this risk!. Akoma+ health
                        screening services provide a holistic approach to heart health assessment. </p>
                    <span>
                        <p class="mb-2 font-bold">We screen for the following:</p>
                        <ul class="ml-4">
                            <li class="mb-2"><span class="list-donut"></span> Hypertension (High blood pressure)</li>
                            <li class="mb-2"><span class="list-donut"></span> Type 2 Diabetes</li>
                            <li class="mb-2"><span class="list-donut"></span> High Cholesterol</li>
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


        <!-- Form for Workplace Wellness -->
        <transition name="fade">
            <div v-if="isModalVisible">
                <div @click="onToggle" class="fixed inset-0 bg-gray-950 bg-opacity-80 transition-opacity"></div>
                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end text-left justify-center p-4 sm:items-center sm:p-0">
                        <div class=" bg-gray-100 p-10 rounded-lg">
                            <div class="h-6 w-6 text-gray-950 float-right cursor-pointer" @click="onToggle">
                                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <div class="text-center mt-2">
                                <h3 class="text-md font-bold text-red-800  mx-auto">Workpace Wellness</h3>
                                <p class="text-sm w-[350px] mx-auto">Kindly provide your details below and our experts will
                                    reach out to you shortly</p>
                            </div>
                            <div class="mt-4">
                                <!-- <span class="uppercase text-sm font-bold">Full Name</span> -->
                                <input
                                    class="w-full bg-white text-gray-900 p-3 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                                    type="text" placeholder="Name">
                            </div>
                            <div class="flex gap-4 mx-auto mt-4">
                                <div>
                                    <!-- <span class="uppercase text-sm font-bold">Email</span> -->
                                    <input
                                        class="w-full bg-white text-gray-900 p-3 active:ring-0 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                                        type="text" placeholder="Email">
                                </div>
                                <div>
                                    <!-- <span class="uppercase text-sm font-bold">Phone Number</span> -->
                                    <input
                                        class="w-full bg-white text-gray-900 p-3 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                                        type="phone" placeholder="Phone Number">
                                </div>
                            </div>
                            <div class="flex gap-4 mt-4 w-full">
                                <div>
                                    <!-- <span class="uppercase text-sm font-bold">Company</span> -->
                                    <input
                                        class="w-full bg-white text-gray-900 p-3 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                                        type="text" placeholder="Name of Company">
                                </div>
                                <div>
                                    <!-- <span class="uppercase text-sm font-bold">No. of employees</span> -->
                                    <input
                                        class="w-full bg-white text-gray-900 p-3 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                                        type="text" placeholder="Number of Employees">
                                </div>
                            </div>
                            <!-- <div class="mt-4">
                                <span class="uppercase text-sm font-bold">Message</span>
                                <textarea
                                    class="w-full h-52 bg-white text-gray-900 mt-2 p-3 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                                    placeholder="How can we help you?"></textarea>
                            </div> -->
                            <div class="mt-4">
                                <button
                                    class="mx-auto text-sm font-semibold w-[20%] tracking-wide bg-red-900 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <section class="container my-10 md:my-20 mx-auto" id="wellness">
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
                    <button @click="onToggle"
                        class="text-sm tracking-wide bg-red-900 text-gray-100 p-3 rounded-lg w-2/6 focus:outline-none focus:shadow-outline">
                        Get In touch
                    </button>
                </div>
                <div class="lg:w-1/2">
                    <img class="box-shadow mx-auto rounded-lg"
                        src="@/assets/images/services/men-at-workplace-by-akoma-plus-akomaplus.png"
                        alt="Akoma+ Workplace Wellness">
                </div>
            </div>
        </section>

        <section class="container my-10 md:my-20 mx-auto" id="partnership">
            <div class="flex gap-4 justify-center flex-wrap lg:flex-nowrap">
                <div class="lg:w-1/2">
                    <img class="box-shadow mx-auto rounded-lg"
                        src="@/assets/images/services/akomaplus-doctor-and-businessman-shake-hands-to-confirm-partnership.png"
                        alt="Akoma+ Partnership">
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
                    <button
                        class="text-sm tracking-wide bg-red-900 text-gray-100 p-3 rounded-lg w-2/6 focus:outline-none focus:shadow-outline"
                        @click="Toggle">
                        Become A Partner
                    </button>
                </div>
            </div>
        </section>

        <transition name="fade">
            <div v-if="isModalShowing">
                <div @click="Toggle" class="fixed inset-0 bg-gray-950 bg-opacity-80 transition-opacity"></div>
                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end text-left justify-center p-4 sm:items-center sm:p-0">
                        <div class=" bg-gray-100 p-10 rounded-lg">
                            <div class="h-6 w-6 text-gray-950 float-right cursor-pointer" @click="Toggle">
                                <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <div class="text-center mt-2">
                                <h3 class="text-md font-bold text-red-900  mx-auto">Partner with Us</h3>
                                <p class="text-sm w-[350px] mx-auto">Kindly provide your details below and our experts will
                                    reach out to you shortly</p>
                            </div>
                            <div class="mt-4">
                                <!-- <span class="uppercase text-sm font-bold">Full Name</span> -->
                                <input
                                    class="w-full bg-white text-gray-900 p-3 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                                    type="text" placeholder="Name">
                            </div>

                            <div class="mt-4">
                                <input
                                    class="w-full bg-white text-gray-900 p-3 active:ring-0 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                                    type="text" placeholder="Email">
                            </div>
                            <div class="mt-4">
                                <input
                                    class="w-full bg-white text-gray-900 p-3 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                                    type="phone" placeholder="Phone Number">
                            </div>


                            <div class="mt-4">
                                <input
                                    class="w-full bg-white text-gray-900 p-3 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                                    type="text" placeholder="Organization">
                            </div>

                            <div class="mt-4">
                                <!-- <span class="uppercase text-sm font-bold">Message</span> -->
                                <textarea
                                    class="w-full h-52 bg-white text-gray-900 mt-2 p-3 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                                    placeholder="How can we partner?"></textarea>
                            </div>
                            <div class="mt-4">
                                <button
                                    class="mx-auto text-sm font-semibold w-[30%] tracking-wide bg-red-900 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <section class="my-44">
            <GetInTouch />
        </section>
    </main>
</template>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 500ms ease-out;
}
</style>