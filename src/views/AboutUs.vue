<script setup>
import AboutHeader from '../components/about/AboutHeader.vue';
import ProfileCard from '../components/about/ProfileCard.vue';
// import TeamCard from '../components/about/TeamCard.vue';
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
      <div class="flex justify-center gap-10 flex-col md:flex-row">
        <!-- mission -->
        <div class="md:w-[500px]">
          <!-- mission text -->
          <div class="bg-white shadow-lg p-8 py-14 ">
            <h2 class="sub-heading font-semibold mb-5">Our Mission</h2>
            <p class="">
              Using a digital health platform, we seek to provide routine and comprehensive screening for heart disease
              and stroke risk factors in Africa and provide effective, efficient, as well as timely
              prevention strategies.
            </p>
          </div>
        </div>

        <!-- image -->
        <div class="md:w-[500px]">
          <div class="md:w-[400px] mx-auto">
            <img src="../assets/images/mission.png" alt="mission" class="w-full">
          </div>
        </div>
      </div>

      <!-- vision --
      <div class="flex justify-center gap-10 flex-col md:flex-row-reverse  items-center">
        -- Vision --
        <div class="md:w-[500px]">
          -- Vision text --
          <div class="bg-white shadow-lg p-8 py-14">
            <h2 class="sub-heading font-semibold mb-5">Our Vision</h2>
            <p class="">
              To create a world where every individual, regardless of their background or location, has the knowledge,
              tools, and support needed to achieve and maintain optimal heart health. We envision a future where heart
              disease is preventable and treatable for all, paving the way for healthier, happier lives.
            </p>
          </div>
        </div>

        -- image --
        <div class="md:w-[500px]">
          <div class="md:w-[400px] mx-auto">
            <img src="../assets/images/vision.png" alt="mission" class="w-full">
          </div>
        </div>
      </div>
      -- vision -->
    </section>

    <!-- Our team -->
    <section class="container mx-auto my-28">
      <div class="text-center mb-10">
        <h2 class="sub-heading font-bold mb-5">Our Team
        </h2>

        <p class="">
          We are a team of world-class experts in heart disease prevention and public health.
        </p>
      </div>
      <div class="team flex flex-wrap justify-center gap-5">
        <template v-for="(item, index) in team" :key="index">
          <ProfileCard :name="item.name" :title="item.title" :image="getImageUrl(item.image)" :bio="item.bio" />
        </template>
      </div>
      <!-- <div class="team flex flex-wrap justify-center gap-5">
        <template v-for="(item, index) in team" :key="index">
          <TeamCard :name="item.name" :title="item.title" :image="getImageUrl(item.image)" :bio="item.bio" />
        </template>
      </div> -->
    </section>

    <section class="py-6 max-w-screen my-32">
      <div class="text-center mb-10">
        <h2 class="sub-heading font-bold mb-5">Our Collaborators </h2>
      </div>
      <div class="bg-gray-200">
        <div class="py-10 container mx-auto ">
          <div class="flex  flex-wrap justify-center gap-4">
            <div class="w-[200px] h-[200px]\">
              <img src="@/assets/images/partners/johns_hopkins_medicine_akoma_plus_partner_logo_300_x_300.png" alt="">
            </div>
            <div class="w-[200px] h-[200px]">
              <img src="@/assets/images/partners/google_akoma_plus_partner_logo.png" alt="">
            </div>
            <div class="w-[200px] h-[200px">
              <img src="@/assets/images/partners/fitbit_akoma_plus_partner_logo_340_x_340.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>


<style lang="css" scoped></style>
