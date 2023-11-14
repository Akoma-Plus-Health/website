<script setup>
import { onMounted, ref } from 'vue';


const sData = [
    {
        title: "",
        description: "According to the WHO, heart disease takes an estimated 17.9 million lives worldwide each year",
        image: "nurse.png",
    },
    {
        title: "",
        description: "According to the WHO, heart disease takes an estimated 17.9 million lives worldwide each year",
        image: "doctor.png",
    },
    {
        title: "",
        description: "According to the WHO, heart disease takes an estimated 17.9 million lives worldwide each year",
        image: "doctor-patient.png",
    },
    {
        title: "",
        description: "According to the WHO, heart disease takes an estimated 17.9 million lives worldwide each year",
        image: "blood.png",
    },
    {
        title: "",
        description: "According to the WHO, heart disease takes an estimated 17.9 million lives worldwide each year",
        image: "black-star-square.png",
    },
    {
        title: "",
        description: "According to the WHO, heart disease takes an estimated 17.9 million lives worldwide each year",
        image: "patient.png",
    },
]

const sliderData = ref(sData)
const currentData = ref(sData[2])

function changeContent() {

}

onMounted(() => {
})

function getImageUrl(name) {
    console.log(new URL(`../../assets/images/slider-images/${name}`, import.meta.url).href)
    return new URL(`../../assets/images/slider-images/${name}`, import.meta.url).href
}
</script>

<template>
    <div class="flex gap-10 items-center md:flex-row flex-col">

        <!-- Text -->
        <div class="md:w-1/2">
            <p class="max-w-lg ml-auto text-center md:text-left"> {{ currentData?.description }}</p>
        </div>

        <!-- Image -->
        <div class="md:w-1/2">
            <div class="image max-w-lg">
                <img :src="getImageUrl(currentData?.image)" alt="" class="rounded-lg w-full">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>