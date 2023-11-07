<script setup>
import Statistics from '../Statistics.vue';


</script>
<template>
    <header class="bg-[url('../../assets/images/akoma_doctors.png')] bg-cover bg-center h-[700px] relative mb-52">

        <!-- overlay -->
        <div class="absolute inset-0 bg-black/50"></div>

        <div class=" container mx-auto">

            <!-- header Content -->
            <div class="relative text-white max-w-4xl text-center mx-auto top-[380px]">
                <h2 class="font-bold text-5xl mb-3">About Us</h2>

                <!-- content -->
                <p class="">
                    At <span class="text-red-500">Akoma+</span> , we're dedicated to empowering individuals to take control
                    of
                    their heart
                    health. Our mobile app
                    makes it easy for you to monitor your blood pressure and provides personalized guidance to ensure your
                    heart
                    stays in the best shape possible. Discover a new way to care for your heart with <span
                        class="text-red-500">Akoma+</span>.
                </p>
            </div>

            <!-- Statistics -->
            <div class="relative top-[450px] max-w-5xl mx-auto flex justify-center">
                <Statistics />
            </div>
        </div>
    </header>
</template>


<style lang="scss" scoped></style>