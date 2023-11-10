
<script setup>
defineProps(['name', 'title', 'description', 'image', 'url'])

</script>

<template>
    <div class="min-h-[300px] bg-white drop-shadow-xl p-8 rounded-md w-[400px] flex gap-4 justify-between flex-col">
        <!-- title and description -->
        <div>
            <div class="w-full flex items-center gap-4 rounded-t-md text-white mb-5">
                <img :src="image" :alt="name" class="w-14 h-14">
                <p class="text-gray-900 text-2xl text-center font-semibold">
                    {{ title }}
                </p>
            </div>

            <!-- description -->
            <div class="">
                <p class="">
                    {{ description }}
                </p>
            </div>
        </div>



        <!-- Read More -->
        <div class="text-sm">
            <a :href="url" class="flex cursor-pointer gap-1 items-center hover:text-red-950">
                <span> Read More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 25" fill="none">
                    <path d="M5 12.5H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 19.5L19 12.5L12 5.5" stroke="black" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </a>
        </div>
    </div>
</template>