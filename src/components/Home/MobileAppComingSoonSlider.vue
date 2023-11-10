<script setup>

</script>

<template>
    <div class="flex gap-2">
        <div class="w-1/2">

            <!-- The plenty classes is for responsiveness and it's based on the container class -->
            <div
                class="md:w-[384px] lg:w-[512px] xl:w-[640px] 2xl:w-[768px] sm:pl-4 lg:pl-8 xl:pl-16 2xl:pl-20 flex flex-col justify-between ml-auto h-full md:py-20 lg:pb-40 ">

                <!-- content -->
                <div class="">
                    <!-- title -->
                    <h2 class="text-3xl md:text-4xl font-bold w-96 text-[#590000] mb-8">Akoma+ Mobile App Coming Soon</h2>

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
                    <p class="text-2xl font-semibold text-[#860008] mb-4">Coming Soon On</p>

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
        <div class="w-[50%]">
            <img class="box-shadow mx-auto rounded-lg" src="@/assets/images/akoma_mobile_app.png"
                alt="Akoma+ Mobile App Coming Soon">
        </div>
    </div>
</template>

<style scoped></style>