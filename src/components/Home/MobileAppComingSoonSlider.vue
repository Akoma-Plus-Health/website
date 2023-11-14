<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sData = [
    {
        description: "Your heart's health is in your hands, and Akoma+ is here to help. We're excited to introduce our upcoming mobile app, designed for your convenience and well-being. With Akoma+, you'll have the power to monitor your heart health at your fingertips, no matter where you are.",
        image: "mobile-and-tablet.png",
    },
    {
        description: "The Akoma+ App enables healthcare providers to build a customized risk-lowering plan for their patients by estimating and monitoring change in 10-year risk of heart attack or stroke by using Akoma+ ASCVD Risk Estimator.",
        image: "mobile-and-tablet-2.png",
    },
]

const currentData = ref(sData[0]) //current data to be displayed on page
const dataIndex = ref(0) //index or value used to switch between data
const intervalID = ref() // id to clear interval / stop setInterval function

/**
 * @function 
 * this starts the timer for switching data
 */
function timer() {
    intervalID.value = setInterval(changeContent, 8000)
}

/**
 * @function
 * this switches between the data
 */
function changeContent() {
    if (dataIndex.value <= sData.length - 1) {
        currentData.value = sData[dataIndex.value]
        // console.log(dataIndex.value)
        dataIndex.value = dataIndex.value + 1
    } else {
        dataIndex.value = 0
        currentData.value = sData[dataIndex.value]
        // console.log(dataIndex.value)
        dataIndex.value = dataIndex.value + 1
    }
}

onMounted(() => {
    changeContent() //initiate change in content
    timer() // start timer
})

onUnmounted(() => {
    clearInterval(intervalID.value) //stop the setinterval function when component is unmounted
})

function getImageUrl(name) {
    // console.log(new URL(`../../assets/images/slider-images/${name}`, import.meta.url).href)
    return new URL(`../../assets/images/slider-images/${name}`, import.meta.url).href
}
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
                    <h2 class="sub-heading font-bold w-96 text-[#590000] mb-8">Akoma+ Mobile App Coming Soon</h2>

                    <!-- content -->
                    <p class="">
                        {{ currentData?.description }}
                    </p>
                </div>

                <!-- google play images -->
                <div class="">
                    <!-- coming soon -->
                    <p class="text-2xl font-semibold text-[#860008] my-4">Coming Soon On</p>

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
            <img class="box-shadow mx-auto rounded-lg w-full" :src="getImageUrl(currentData?.image)"
                alt="Akoma+ Mobile App Coming Soon">
        </div>
    </div>
</template>

<style scoped></style>