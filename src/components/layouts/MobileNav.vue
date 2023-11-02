<script setup>

</script>

<template>
    <div class="fixed z-40 right-5 top-20">
        <div class="mobile bg-white w-[250px] xs:w-[350px] rounded-lg shadow-2xl overflow-hidden">
            <ul>
                <li><router-link :to="{ name: 'Home' }" class="xs:py-4 xs:px-6 py-3 px-4 block bar">Home</router-link>
                    <!-- <hr class="px-6 block"> -->
                </li>
                <li> <router-link :to="{ name: 'AboutUs' }" class="mx-4">About Us</router-link></li>
                <!-- <li><router-link :to="{ path: '/', hash: '#testimonial' }"
                        class="xs:py-4 xs:px-6 py-3 px-4 block bar on-homepage">Testimonials</router-link></li>
                <li><router-link :to="{ path: '/', hash: '#faq' }"
                        class="xs:py-4 xs:px-6 py-3 px-4 block bar on-homepage">FAQ</router-link>
                </li> -->
                <li><router-link :to="{ name: 'ContactUs' }" class="xs:py-4 xs:px-6 py-3 px-4 block">Contact Us</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.bar::after {
    content: '';
    border-top: 1px solid rgb(225, 235, 236);
    display: block;
    position: relative;
    top: 16px;
}

.active-link {
    color: var(--primary-light);
    font-weight: 600;
}

a:hover {
    color: var(--primary-light) !important;
    /* font-weight: 600; */
}

.on-homepage.active-link {
    color: black;
    font-weight: normal;
}



@media screen and (max-width: 480px) {
    .bar::after {
        top: 13px
    }
}
</style>