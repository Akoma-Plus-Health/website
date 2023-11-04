<script setup>
import ServiceCard from './ServiceCard.vue';

const serviceDetails = [{
    title: "This is the blog title",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
    icon: "https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?h=350&amp;auto=compress&amp;cs=tinysrgb",
}]

</script>
        
<template>
    <!-- services -->
    <div class="container">
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