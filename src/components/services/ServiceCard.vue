
<script setup>
defineProps(['name', 'title', 'description', 'image', 'url'])

</script>

<template>
    <div class="min-h-[300px] bg-white drop-shadow-xl px-4 rounded-md w-[400px]">
        <!-- header -->
        <div class="w-full flex gap-4 py-4 my-auto rounded-t-md text-white">
            <img :src="image" :alt="name" class="w-8 h-8">
            <p class="text-gray-900 text-2xl text-center font-semibold">
                {{ title }}
            </p>
        </div>

        <!-- body and list -->
        <div class="p-4">
            <div class="">
                <p class="mb-2">
                    {{ description }}
                </p>
                <a :href="url" class="flex align-bottom mt-8 mx-auto cursor-pointer hover:text-red-950">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M5 12.5H19" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M12 19.5L19 12.5L12 5.5" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>