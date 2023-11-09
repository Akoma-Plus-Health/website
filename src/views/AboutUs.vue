<script setup>
import AboutHeader from '../components/about/AboutHeader.vue';
import TeamCard from '../components/about/TeamCard.vue';
import { team } from '../utils/data/team'

function getImageUrl(name) {

  console.log(new URL(`../assets/images/team/${name}`, import.meta.url).href)
  return new URL(`../assets/images/team/${name}`, import.meta.url).href
}

</script>


<template>
  <div>
    <!-- Header -->
    <AboutHeader />

    <!-- Mission and Vision -->
    <section class="container mx-auto my-28">

      <!-- mission -->
      <div class="flex justify-center gap-10 flex-col md:flex-row items-center">
        <!-- mission -->
        <div class="w-[500px]">
          <!-- mission text -->
          <div class="bg-white shadow-lg p-8 py-14">
            <h2 class="text-4xl font-semibold mb-5">Our Mission</h2>
            <p class="">
              Using a digital health platform, we seek to provide routine and comprehensive screening for heart disease
              and stroke risk factors in low- and middle-income countries and provide effective, efficient, and timely
              prevention strategies.
            </p>
          </div>
        </div>

        <!-- image -->
        <div class="w-[500px]">
          <div class="w-[400px] mx-auto">
            <img src="../assets/images/mission.png" alt="mission" class="w-full">
          </div>
        </div>
      </div>

      <!-- vision -->
      <div class="flex justify-center gap-10 flex-col md:flex-row-reverse  items-center">
        <!-- Vision -->
        <div class="w-[500px]">
          <!-- Vision text -->
          <div class="bg-white shadow-lg p-8 py-14">
            <h2 class="text-4xl font-semibold mb-5">Our Vision</h2>
            <p class="">
              To create a world where every individual, regardless of their background or location, has the knowledge,
              tools, and support needed to achieve and maintain optimal heart health. We envision a future where heart
              disease is preventable and treatable for all, paving the way for healthier, happier lives.
            </p>
          </div>
        </div>

        <!-- image -->
        <div class="w-[500px]">
          <div class="w-[500px] mx-auto">
            <img src="../assets/images/vision.png" alt="mission" class="w-full">
          </div>
        </div>
      </div>
    </section>

    <!-- Our team -->
    <section class="container mx-auto my-28">
      <div class="text-center mb-10">
        <h2 class="text-4xl font-bold mb-5">Our Team
        </h2>

        <p class="">
          We are a team of world-class experts in heart disease prevention and public health.
        </p>
      </div>

      <div class="team flex flex-wrap justify-center gap-5">
        <template v-for="(item, index) in team" :key="index">
          <TeamCard :name="item.name" :title="item.title" :image="getImageUrl(item.image)" />
        </template>
      </div>
    </section>

  </div>
</template>


<style lang="css" scoped></style>
