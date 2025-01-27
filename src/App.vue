<script setup>
import { useHead } from "@unhead/vue";
import Navbar from "./components/layouts/Navbar.vue";
import Footer from "./components/layouts/Footer.vue";
import MainMenu from "./components/layouts/MainMenu.vue";
// import med_van from "./assets/images/services/akoma-plus-screening-van-or-ambulance.png";

useHead({
  title: "Akoma+ Health & Wellness",
  meta: [
    { name: "description", content: "We are a team of world-class experts in heart disease prevention and public health., Using a digital health platform, we seek to provide routine and comprehensive screening for heart disease and stroke risk factors in Africa and provide effective, efficient, as well as timely prevention strategies." },
    { property: "og:title", content: "Akoma+ - Preventing cardiac deaths through early screening." },
    { property: "og:image", content: "/src/assets/images/services/akoma-plus-screening-van-or-ambulance.png" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: "https://www.akomaplushealth.com/" },
    { property: "twitter:title", content: "Akomaplus Health & Wellness" },
    { property: "twitter:description", content: "We are a team of world-class experts in heart disease prevention and public health, We prevent cardiac deaths through early screening bringing screening closer to you with our medical vans" },
    { property: "twitter:image", content: "/favicon/android-chrome-512x512.png" },
  ]
})
</script>

<template>
  <div class="font-body  text-sm lg:text-base">
    <!-- <Navbar :key="$route.path" /> -->
    <MainMenu :key="$route.path" />
    <router-view></router-view>
    <Footer />
  </div>
</template>
<style>
/* Custom fonts */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');


* {
  box-sizing: border-box;
}

/* Our colors */
:root {
  --primary-light: #8B000F;
  --primary: #571710;
}

/* Overiding some elements with default and replacing with custom */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
</style>