<script setup>
import ServiceCard from './ServiceCard.vue';
</script>
        
<template>
    <!-- services -->
    <div class=" service container mx-auto">
        <div>
            <h2 class=" font-bold text-6xl text-center pt-20 pb-12">Our Services</h2>
        </div>

        <div>
            <ServiceCard />
        </div>
    </div>
</template>


<style scoped>
.services {
    background: url("../../assets/images/Wave.png") center;
    background-size: cover;
}
</style>