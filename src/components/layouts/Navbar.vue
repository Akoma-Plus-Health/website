<script setup>
import MobileNav from "./MobileNav.vue";
import { ref, watch, onUnmounted } from 'vue';

const toggle = ref(false)

function toggleMobileNav() {
  toggle.value = !toggle.value
}

watch(toggle, (newToggle) => {
  newToggle ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'
})

</script>

<template>
  <!-- MObile Navigation -->
  <Transition name="fade">
    <div class="overlay fixed z-30 bg-black/10 top-0 left-0 right-0 bottom-0 transition-opacity" v-if="toggle"
      @click="toggleMobileNav">
  </div>
  </Transition>

  <Transition name="mobile">
  <MobileNav v-if="toggle" />
</Transition>

  <div class="sticky top-0 bg-white z-20 border-b p-5">
    <div class="nav flex p-2 justify-between items-center max-width ">
      <div class="logo w-24">
        <router-link :to="{ name: 'Home' }">
          <img src="@/assets/images/akomaplus-logo.png" alt="litt-logo" class="w-full">
        </router-link>
      </div>
      <div>
        <div class="links md:inline hidden">
          <router-link :to="{ name: 'Home' }" class="mx-4">Home</router-link>
          <router-link :to="{ name: 'Services' }" class="mx-4">Services</router-link>
          <router-link :to="{ name: 'AboutUs' }" class="mx-4">About Us</router-link>
          <!-- <router-link :to="{ path: '/', hash: '#testimonial' }" class="on-homepage mx-4">Testimonials</router-link>
                                  <router-link :to="{ path: '/', hash: '#faq' }" class="on-homepage mx-4">FAQ</router-link> -->
          <router-link :to="{ name: 'ContactUs' }" class="mx-4">Contact Us</router-link>
        </div>
        <!-- <div class="inline ml-10">
                                  <use-icon icon="search" class="text-xl md:text-base"></use-icon>
                                </div> -->
        <div class="ml-3 md:hidden inline">
          <use-icon icon="bars" class=" text-2xl" @click="toggleMobileNav"></use-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active-link {
  color: var(--primary-light);
  font-weight: 600;
}

.links>a:hover {
  color: var(--primary-light);
  font-weight: 600;
}

.on-homepage.active-link {
  color: #c20000;
  font-weight: normal;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  /* transform: translateY(-30px); */
}

.mobile-enter-active {
  transition: all 0.4s ease-in-out;
}

.mobile-leave-active {
  transition: all 0.4s ease
}

.mobile-enter-from,
.mobile-leave-to {
  opacity: 0;
  /* transform: translate(50%, -50%);
  transform: scale(0); */
  transform: translateX(100%);
}
</style>