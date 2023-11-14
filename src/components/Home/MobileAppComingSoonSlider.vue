<script setup>

</script>

<template>
    <div class="flex gap-2 md:flex-row flex-col">
        <div class="md:w-1/2">

            <!-- The plenty classes is for responsiveness and it's based on the container class -->
            <div
                class="px-4 w-full sm:w-[600px] md:w-[384px] lg:w-[512px] xl:w-[640px] 2xl:w-[768px] md:pl-4 md:pr-0 lg:pl-8 xl:pl-16 2xl:pl-20 mx-auto md:mx-0 flex flex-col justify-between md:ml-auto h-full md:py-10 lg:py-20  xl:pb-40 ">

                <!-- content -->
                <div class="">
                    <!-- title -->
                    <h2 class="sub-heading font-bold w-96 text-[#590000] mb-8">Akoma+ Mobile App</h2>

                    <!-- content -->
                    <p class="">
                        Your heart's health is in your hands, and Akoma+ is here to help. We're excited to introduce our
                        upcoming
                        mobile app, designed
                        for your convenience and well-being. With Akoma+, you'll have
                        the power to monitor your heart health at your fingertips, no
                        matter where you are.
                    </p>
                </div>

                <!-- google play images -->
                <div class="">
                    <!-- coming soon -->
                    <p class="text-2xl font-semibold text-[#860008] mb-4">Coming Soon</p>

                    <!-- images -->
                    <div class="flex gap-2">
                        <img src="@/assets/images/akoma_app_is_on_apple_appstore.webp"
                            alt="akomaplus_app_is_on_apple_appstore" class="w-40" />
                        <img src="@/assets/images/akoma_app_is_on_google_playstore.webp"
                            alt="akomaplus_app_is_on_apple_playstore" class="w-40" />
                    </div>
                </div>
            </div>
        </div>
        <!-- images -->
        <div class="md:w-[50%]">
            <img class="box-shadow mx-auto rounded-lg" src="@/assets/images/akoma_mobile_app.png"
                alt="Akoma+ Mobile App Coming Soon">
        </div>
    </div>
</template>

<style scoped></style>