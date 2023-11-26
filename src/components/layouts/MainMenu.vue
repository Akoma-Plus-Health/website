
<script setup>
import { ref, watch, onUnmounted } from 'vue';
import { Bars3Icon, ChevronDownIcon } from "@heroicons/vue/24/outline";
import MobileNav from "./MobileNav.vue";


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
    <nav class="relative bg-white h-20 px-2 py-4 border-b">

        <div class="container mx-auto flex justify-between items-center">
            <div class="logo w-32">
                <router-link :to="{ name: 'Home' }">
                    <img src="@/assets/images/akomaplus-logo.png" alt="Akoma+-logo" class="w-full">
                </router-link>
            </div>

            <ul class="hidden md:flex space-x-6">
                <li><router-link :to="{ name: 'Home' }" class="mx-4  hover:text-red-900 font-medium">Home</router-link></li>
                <li class="flex relative group">
                    <router-link :to="{ name: 'Services' }"
                        class="mr-1  hover:text-red-900 font-medium">Services</router-link>
                    <ChevronDownIcon class="h-6 w-6 text-gray-500  hover:text-red-900" />
                    <!-- Submenu starts -->
                    <ul
                        class="absolute z-20 rounded-lg bg-white p-3 w-[250px] xs:w-[250px] top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-2xl overflow-hidden">
                        <li class="text-sm leading-8 hover:text-red-900"><a href="/services/#healthcare">Individual Heart
                                screening</a></li>
                        <li class="text-sm leading-8 hover:text-red-900"><a href="/services/#wellness">Workplace
                                Wellness</a></li>
                        <li class="text-sm leading-8 hover:text-red-900"><a href="/services">Akoma+
                                Education</a></li>
                        <li class="text-sm leading-8 hover:text-red-900"><a href="/services/#partnership">Partnership</a>
                        </li>
                    </ul>
                    <!-- Submenu ends -->
                </li>
                <li><router-link :to="{ name: 'AboutUs' }" class="mx-4  hover:text-red-900 font-medium">About
                        Us</router-link></li>
                <li><router-link :to="{ name: 'ContactUs' }" class="mx-4  hover:text-red-900 font-medium">Contact
                        Us</router-link></li>
            </ul>

            <!-- Mobile menu icon -->
            <div class="ml-3 md:hidden inline">
                <Bars3Icon class="w-7 h-7 inline cursor-pointer" @click="toggleMobileNav"></Bars3Icon>
            </div>

        </div>

    </nav>
    <!-- Navigation -->
    <Transition name="fade">
        <div class="overlay fixed z-30 bg-black/10 top-0 left-0 right-0 bottom-0 transition-opacity" v-if="toggle"
            @click="toggleMobileNav">
        </div>
    </Transition>

    <Transition name="mobile">
        <MobileNav v-if="toggle" />
    </Transition>
</template>
<style scoped>
.mobile-menu {
    left: -200%;
    transition: 0.5s;
}

.mobile-menu.active {
    left: 0;
}

.mobile-menu ul li ul {
    display: none;
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