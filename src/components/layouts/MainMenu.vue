<script setup>
import { ref, watch, onUnmounted } from 'vue';
import { Bars3Icon, ChevronDownIcon } from "@heroicons/vue/24/outline";
import MobileNav from "./MobileNav.vue";

const toggle = ref(false);

const toggleMobileNav = () => {
    toggle.value = !toggle.value;
};

watch(toggle, (newToggle) => {
    document.body.style.overflow = newToggle ? 'hidden' : 'auto';
});

onUnmounted(() => {
    document.body.style.overflow = 'auto';
});
</script>

<template>
    <nav class="relative bg-white h-20 px-4 py-4 border-b shadow-md">
        <div class="container mx-auto flex justify-between items-center">
            <!-- Logo -->
            <div class="logo w-32">
                <router-link :to="{ name: 'Home' }">
                    <img src="@/assets/images/akomaplus-logo.png" alt="Akoma+ Logo" class="w-full">
                </router-link>
            </div>

            <!-- Desktop Navigation -->
            <ul class="hidden md:flex space-x-6">
                <li>
                    <router-link :to="{ name: 'Home' }" class="hover:text-red-900 font-medium">Home</router-link>
                </li>
                <li class="relative group">
                    <router-link :to="{ name: 'Services' }" class="hover:text-red-900 font-medium flex items-center">
                        Services
                        <ChevronDownIcon class="h-5 w-5 text-gray-500 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                    </router-link>
                    <!-- Dropdown -->
                    <ul class="absolute z-20 bg-white rounded-lg p-3 w-60 top-8 transform scale-0 group-hover:scale-100 transition-all duration-200 ease-in-out shadow-xl">
                        <li class="text-sm leading-8 hover:text-red-900">
                            <a href="/services/#healthcare">Individual Heart Screening</a>
                        </li>
                        <li class="text-sm leading-8 hover:text-red-900">
                            <a href="/services/#wellness">Workplace Wellness</a>
                        </li>
                        <li class="text-sm leading-8 hover:text-red-900">
                            <a href="/services">Akoma+ Education</a>
                        </li>
                        <li class="text-sm leading-8 hover:text-red-900">
                            <a href="/services/#partnership">Partnership</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link :to="{ name: 'AboutUs' }" class="hover:text-red-900 font-medium">About Us</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ContactUs' }" class="hover:text-red-900 font-medium">Contact Us</router-link>
                </li>
            </ul>

            <!-- Mobile Menu Button -->
            <div class="ml-3 md:hidden">
                <Bars3Icon class="w-7 h-7 cursor-pointer" @click="toggleMobileNav" />
            </div>
        </div>
    </nav>

    <!-- Overlay for mobile menu -->
    <Transition name="fade">
        <div class="fixed inset-0 bg-black/30 z-30 transition-opacity" v-if="toggle" @click="toggleMobileNav"></div>
    </Transition>

    <!-- Mobile Navigation -->
    <Transition name="mobile">
        <MobileNav v-if="toggle" />
    </Transition>
</template>

<style scoped>
/* Submenu transition */
.group-hover ul {
    display: block;
}

/* Mobile menu animation */
.mobile-enter-active,
.mobile-leave-active {
    transition: all 0.4s ease-in-out;
}

.mobile-enter-from,
.mobile-leave-to {
    opacity: 0;
    transform: translateX(100%);
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
