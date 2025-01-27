<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'


const sData = [
    {
        title: "",
        description: "According to the WHO, heart disease takes an estimated 17.9 million lives worldwide each year",
        image: "man-suffers-a-heart-attack-by-akoma-plus.jpeg",
    },
    {
        title: "",
        description: "Screening for high blood pressure, diabetes and high cholesterol remains low globally, driven by substantial shares of low- and middle-income populations who are not tested despite meeting WHO criteria.",
        image: "doctor.png",
    },
    {
        title: "",
        description: "\“Approximately 4 out of every 5 people with hypertension are not adequately treated, but if countries can scale up coverage, 76 million deaths could be averted between 2023 and 2050.\” - WHO. ",
        image: "doctor-patient.png",
    },
    {
        title: "High LDC-C (Bad Cholesterol)",
        description: "Can put you at serious risk of cardiovascular events, like heart attack and stroke.",
        image: "blood.png",
    },
    {
        title: "",
        description: "Deaths from heart disease and stroke is increasing worldwide largely due to increasing heart disease incidence in low-to-middle income countries like Ghana. ",
        image: "black-star-square.png",
    },
    {
        title: "",
        description: "Currently, stroke and heart attack are ranked in the top 10 causes of death in Ghana. The top 10 drivers of diseases and deaths in Ghana include high blood pressure, high cholesterol, diabetes, and obesity.",
        image: "patient.png",
    },
]

const sliderData = ref(sData) //slider data made reactive
const currentData = ref(sData[0]) //current data to be displayed on page
const dataIndex = ref(0) //index or value used to switch between data
const intervalID = ref() // id to clear interval / stop setInterval function

/**
 * @function 
 * this starts the timer for switching data
 */
function timer() {
    intervalID.value = setInterval(changeContent, 6000)
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

/**
 * @function
 * next data...
 */
function next() {
    if (dataIndex.value === sData.length - 1) {
        dataIndex.value = 0
        // console.log(dataIndex.value)
        currentData.value = sData[dataIndex.value]
    } else {
        dataIndex.value = dataIndex.value + 1
        // console.log(dataIndex.value)
        currentData.value = sData[dataIndex.value]
    }
    clearInterval(intervalID.value) //stop the setinterval function
    timer() //restart the timer
}


/**
 * @function
 * previous data
 */
function prev() {
    if (dataIndex.value === 0) {
        dataIndex.value = sData.length - 1
        // console.log(dataIndex.value)
        currentData.value = sData[dataIndex.value]
    } else {
        dataIndex.value = dataIndex.value - 1
        // console.log(dataIndex.value)
        currentData.value = sData[dataIndex.value]
    }
    clearInterval(intervalID.value) // stop the set interval function
    timer() //restart the timer
}

onMounted(() => {
    changeContent() //initiate change in content
    timer() // start timer
})

onUnmounted(() => {
    clearInterval(intervalID.value) //stop the setinterval function when component is unmounted
})


/**
 * @function - for getting images
 * @param { String } name - image name
 */
function getImageUrl(name) {
    // console.log(new URL(`../../assets/images/slider-images/${name}`, import.meta.url).href)
    return new URL(`../../assets/images/slider-images/${name}`, import.meta.url).href
}
</script>

<template>
    <div class="relative">
        <!-- text and image -->
        <div class="flex gap-10 items-center md:flex-row flex-col w-[85%] mx-auto">

            <!-- Text -->
            <div class="md:w-1/2 trans">
                <p class="mb-2 font-semibold text-2xl">{{ currentData?.title }}</p>
                <p class="max-w-lg text-lg lg:text-xl ml-auto text-center md:text-left"> {{ currentData?.description }}</p>
            </div>

            <!-- Image -->
            <div class="md:w-1/2">
                <div class="image max-w-lg">
                    <img :src="getImageUrl(currentData?.image)" alt="" class="rounded-lg w-full">
                </div>
            </div>
        </div>

        <!-- next and prev buttons -->
        <div class="flex justify-between  absolute top-1/2 -translate-y-1/2 w-full">
            <!-- previuous -->
            <div class="bg-white p-2 rounded-full w-fit box-shadow cursor-pointer" @click="prev">
                <ChevronLeftIcon class=" w-6 h-6 lg:w-10 lg:h-10 inline text-[#8B000F]"></ChevronLeftIcon>
            </div>

            <!-- next -->
            <div class="bg-white p-2 rounded-full w-fit box-shadow cursor-pointer" @click="next">
                <ChevronRightIcon class="w-6 h-6 lg:w-10 lg:h-10 inline text-[#8B000F]"></ChevronRightIcon>
            </div>
        </div>
    </div>
</template>

<style scoped>
.trans {
    transition: opacity 0.8s ease-in-out 0s;
}

.box-shadow {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.07);
}
</style>