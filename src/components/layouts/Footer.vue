<template>
    <div class="bg-[#F3F3F3] pt-4 sm:pt-10 lg:pt-12">
        <footer class="mx-auto max-w-screen-2xl px-12 md:px-8">
            <div class="grid grid-cols-2 gap-8 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
                <div class="col-span-full lg:col-span-2">
                    <!-- logo - start -->
                    <div class="mb-4 lg:-mt-2">
                        <img src="@/assets/images/akomaplus-logo.png"
                            class="inline-flex items-center gap-2 w-2/4 text-xl font-bold text-black md:text-2xl" />
                    </div>
                    <!-- logo - end -->

                    <p class="mb-4 text-gray-500 sm:pr-8">We're experts in preventing heart disease and improving
                        global health through a digital platform that screens for
                        risks and provides prevention strategies. </p>
                </div>

                <!-- nav - start -->
                <div>
                    <div class="mb-4 font-bold tracking-widest text-gray-800">Resources</div>

                    <nav class="flex flex-col gap-4">
                        <div>
                            <router-link :to="{ name: 'Home' }"
                                class="text-gray-500 transition duration-100 hover:text-red-500 active:text-red-600">Home</router-link>
                        </div>

                        <div>
                            <router-link :to="{ name: 'ContactUs' }"
                                class="text-gray-500 transition duration-100 hover:text-red-500 active:text-red-600">Services</router-link>
                        </div>

                        <div>
                            <router-link :to="{ name: 'AboutUs' }"
                                class="text-gray-500 transition duration-100 hover:text-red-500 active:text-red-600">About
                                Us</router-link>
                        </div>

                        <div>
                            <router-link :to="{ name: 'ContactUs' }"
                                class="text-gray-500 transition duration-100 hover:text-red-500 active:text-red-600">Contact
                                Us</router-link>
                        </div>
                    </nav>
                </div>
                <!-- nav - end -->

                <!-- nav - start -->
                <div>
                    <div class="mb-4 font-bold tracking-widest text-gray-800">Contact Us</div>

                    <nav class="flex flex-col gap-4">
                        <div>
                            <a href="#"
                                class="text-gray-500 transition duration-100  hover:text-red-500 active:text-red-600">Email:
                                info@akomaplushealth.com</a>
                        </div>

                        <div>
                            <a href="#"
                                class="text-gray-500 transition duration-100  hover:text-red-500 active:text-red-600">Phone
                                Number: <br />+1-443- 850- 1407</a>
                        </div>
                    </nav>
                </div>
                <!-- nav - end -->

                <!-- nav - start -->
                <!-- <div>
                    <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Support</div>

                    <nav class="flex flex-col gap-4">
                        <div>
                            <a href="#"
                                class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</a>
                        </div>

                        <div>
                            <a href="#"
                                class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Documentation</a>
                        </div>

                        <div>
                            <a href="#"
                                class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Chat</a>
                        </div>

                        <div>
                            <a href="#"
                                class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">FAQ</a>
                        </div>
                    </nav>
                </div> -->
                <!-- nav - end -->

                <!-- nav - start -->
                <!-- <div>
                    <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Legal</div>

                    <nav class="flex flex-col gap-4">
                        <div>
                            <a href="#"
                                class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Terms
                                of Service</a>
                        </div>

                        <div>
                            <a href="#"
                                class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy
                                Policy</a>
                        </div>

                        <div>
                            <a href="#"
                                class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Cookie
                                settings</a>
                        </div>
                    </nav>
                </div> -->
                <!-- nav - end -->
            </div>
            <div class="py-auto my-4 h-20">
                <div class="float-left text-sm text-gray-600 lg:-mt-2">
                    <p>Download the app by clicking on the link below</p>
                    <div class="inline-flex gap-2 pt-5 w-[350px]">
                        <img src="@/assets/images/akoma_app_is_on_apple_appstore.webp"
                            alt="akomaplus_app_is_on_apple_appstore"
                            class="inline-flex items-center gap-2 w-2/5 text-xl font-bold text-black md:text-2xl" />
                        <img src="@/assets/images/akoma_app_is_on_google_playstore.webp"
                            alt="akomaplus_app_is_on_apple_playstore"
                            class="inline-flex items-center gap-2 w-2/5 text-xl font-bold text-black md:text-2xl" />
                    </div>
                </div>
                <div class="float-right text-sm text-gray-600">
                    <router-link :to="{ name: 'Home' }"
                        class="transition duration-100 hover:text-red-500 active:text-red-600">Terms and
                        Conditions</router-link> | <a href="#"
                        class="transition duration-100 hover:text-red-500 active:text-red-600">
                        Privacy Policy</a>
                </div>
            </div>
            <div class="py-8 text-center text-sm text-gray-400">© {{ new Date().getFullYear() }} - <router-link
                    :to="{ name: 'Home' }" class="transition duration-100 hover:text-red-500 active:text-red-600">Akoma Plus
                    Wellness &amp; Health</router-link> - All
                rights reserved.
            </div>
        </footer>
    </div>









    <!-- <div class="bg-gradient-to-r from-red-900 to-red-600 text-white py-28"> -->
    <!-- <div class="bg-[#F3F3F3] text-gray-500 py-28">
        <div class="max-width">
            <div class="flex gap-10 justify-around flex-wrap">
                <div class="f basis-[400px]">
                    <img src="@/assets/images/akomaplus-logo.png" alt="litt" class="w-14 mb-2">
                    <p class="mb-5">
                        We're experts in preventing heart disease and improving
                        global health through a digital platform that screens for
                        risks and provides prevention strategies.
                    </p>
                    <p class="text-xl font-bold">Follow us</p>
                    <p class="my-2">Subscribe to our social media channels. Let's stay in touch.</p>
                </div>
                <div class="basis-[300px]">
                    <h3 class="font-bold text-lg">Links</h3>
                    <p class="my-3 font-light  hover:text-secondary"><router-link :to="{ name: 'Home' }">Home</router-link>
                    </p>
                    <p class="my-3 font-light  hover:text-secondary"><router-link :to="{ name: 'AboutUs' }">About
                            Us</router-link></p>
                    <p class="my-3 font-light  hover:text-secondary"><router-link :to="{ name: 'ContactUs' }">Contact
                            Us</router-link></p>
                </div>
                <div class="basis-[400px]">
                    <h3 class="font-bold text-lg">Ghana Office</h3>
                    <p class="my-3">Email: info@leanicontechnology.co​m</p>
                    <p class="my-3">Call: 0576290000</p>
                </div>
            </div>
            <div class="mx-auto">
                <p>&copy; 2023 <a href="https://akomaplushealth.com">Akoma Plus Health &amp; Wellness</a></p>
            </div>
        </div>
    </div> -->
</template>
<style>
/* .bg-custom-gradient {
    background: linear-gradient(80deg, #470808 40%, #D30000 70%);
  } */
</style>
