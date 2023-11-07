<script setup>
import { useHead } from "@unhead/vue";
import Navbar from "./components/layouts/Navbar.vue";
import Footer from "./components/layouts/Footer.vue";

useHead({
  title: "Akoma+ Health & Wellness",
  meta: [
    { name: "description", content: "Akoma website description" },
    { property: "og:title", content: "Akoma - The best place to learn coding." },
    { property: "og:image", content: "/images/logo-social.png" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: "https://www.akomaplushealth.com/" },
    { property: "twitter:title", content: "Akoma - The best place to learn coding." },
    { property: "twitter:description", content: "Akoma website description" },
    { property: "twitter:image", content: "/images/logo-social.png" },
  ]
})
</script>


<template>
  <div class="font-body  text-sm lg:text-base">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

/* Our colors */
:root {
  --primary-light: #8B000F;
  --primary: #571710;
}

/* Custom downloaded fonts */
@font-face {
  font-family: Yeseva One;
  src: url("/assets/fonts/YesevaOne-Regular.ttf");
}

@font-face {
  font-family: Montserrat;
  src: url("/assets/fonts/Montserrat-VariableFont_wght.ttf");
}

@font-face {
  font-family: Poppins;
  src: url("/assets/fonts/Poppins-Regular.ttf");
}

@font-face {
  font-family: Inter;
  src: url("/assets/fonts/Inter-VariableFont_slnt,wght.ttf");
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

<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
