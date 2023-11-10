<script setup>
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

defineProps(['question', 'answer'])
const showDetails = ref(false)
const hidden = ref(null)

function toggleDetails() {
    showDetails.value = !showDetails.value


    if (hidden.value.style.maxHeight) {
        hidden.value.style.maxHeight = null;
    } else {
        hidden.value.style.maxHeight = hidden.value.scrollHeight + "px";
    }
}
</script>

<template>
    <div class="rounded-md px-4 py-4 border ">
        <div @click="toggleDetails" class="flex items-center justify-between cursor-pointer">
            <p class="font-semibold  text-[#590000]">{{ question }}</p>
            <ChevronDownIcon class="h-4 w-4 inline-block font-bold text-[#590000]" v-if="!showDetails" />
            <ChevronUpIcon class="h-4 w-4 inline-block font-bold text-[#590000]" v-else />
        </div>
        <div class="flex hide-and-seek" ref="hidden">
            <p class=" text-md leading-6 my-4">{{ answer }}</p>
        </div>
    </div>
</template>

<style scoped>
.hide-and-seek {
    max-height: 0;
    overflow: hidden;
    transition: all 0.4s;
}
</style>