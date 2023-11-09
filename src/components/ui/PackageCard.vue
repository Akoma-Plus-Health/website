
<script setup>
defineProps(['title', 'list', 'color'])

</script>

<template>
    <div class="min-h-[400px] bg-gray-200 rounded-md w-[300px]">
        <!-- header -->
        <div class="w-full py-4 rounded-t-md text-white"
            :class="[{ 'bg-red-900': color == 'red' }, { 'bg-yellow-500': color == 'gold' }, { 'bg-blue-200 !text-black': color == 'cyan' }, { 'bg-gray-300 !text-black': color == 'platinum' }]">
            <p class="  text-center font-semibold">
                {{ title }}
            </p>
        </div>

        <!-- body and list -->
        <div class="p-4">
            <template v-for="(item, index) in list" :key="index">
                <div class=" flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 stroke-green-800 flex-shrink-0">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <p class="mb-2">
                        {{ item }}
                    </p>
                </div>
            </template>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>