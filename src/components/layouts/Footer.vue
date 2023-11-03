<script setup>
</script>

<template>
    <!-- <div class="bg-gradient-to-r from-red-900 to-red-600 text-white py-28"> -->
    <div class="bg-red-900 text-white py-28">
        <div class="max-width">
            <div class="flex gap-10 justify-around flex-wrap">
                <div class="f basis-[400px]">
                    <img src="@/assets/images/logo.svg" alt="litt" class="w-14 mb-2">
                    <p class="mb-5">
                        Embrace Agile Excellence: Amplify Your Skills and Empower Your Success with Our Cutting-Edge
                        Agile Software Development Program!
                    </p>
                    <p class="text-xl font-bold">Follow us</p>
                    <p class="my-2">Subscribe to our social media channels. Let's stay in touch.</p>
                    <!-- <div class="socials flex gap-4">
                        <a href="https://www.linkedin.com/company/korsgill-consulting-ltd/">
                            <img src="/assets/images/icon-images/linkedin.svg" alt="linkedIn">
                        </a>
                        <a href="https://www.instagram.com/litt.africa/">
                            <img src="/assets/images/icon-images/instagram.svg" alt="instagram">
                        </a>
                        <a href="https://www.youtube.com/channel/UCLBkRIquDbz3_Y2wVDE7Z_A">
                            <img src="/assets/images/icon-images/youtube.svg" alt="youtube">
                        </a>
                        <a href="https://www.facebook.com/litt.co.uk/">
                            <img src="/assets/images/icon-images/facebook.svg" alt="facebook">
                        </a>
                        <a href="https://twitter.com/litt_uk">
                            <img src="/assets/images/icon-images/twitter.svg" alt="twitter">
                        </a>
                    </div> -->


                </div>
                <div class="basis-[400px]">
                    <h3 class="font-bold text-lg">Ghana Office</h3>
                    <p class="my-3">Email: info@leanicontechnology.co​m</p>
                    <p class="my-3">Call: 0576290000</p>
                    <p class="my-3">Office Location: Vision House,</p>
                    <p class="my-3">2nd floor, Block E117/17</p>
                    <p class="my-3">Abavana Rd, Kotobabi</p>
                </div>
                <div class="basis-[300px]">
                    <h3 class="font-bold text-lg">Links</h3>
                    <p class="my-3 font-light  hover:text-secondary"><router-link :to="{ name: 'Home' }">Home</router-link>
                    </p>
                    <p class="my-3 font-light  hover:text-secondary"><router-link
                            :to="{ name: 'AboutUs' }">About Us</router-link></p>
                    <p class="my-3 font-light  hover:text-secondary"><router-link :to="{ name: 'ContactUs' }">Contact
                            Us</router-link></p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
/* .bg-custom-gradient {
    background: linear-gradient(80deg, #470808 40%, #D30000 70%);
  } */
</style>
