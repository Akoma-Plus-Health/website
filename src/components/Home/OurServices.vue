<script setup>
import ServiceCard from './ServiceCard.vue';
</script>
        
<template>
    <!-- services -->
    <section class="services">
        <div class="mx-auto container py-32">
            <div>
                <h2 class="font-bold text-6xl text-center py-5">Our Services</h2>
            </div>

            <div class="flex flex-col sm:flex-row mx-auto md:gap-6 ">
                <ServiceCard />
            </div>
        </div>
    </section>
</template>


<style scoped>
.services {
    background: url("@/assets/images/Wave.png") center;
    background-size: cover;
}
</style>