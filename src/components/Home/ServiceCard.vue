
<script setup>
defineProps(['name', 'icon', 'desc', 'url'])

</script>

<template>
    <div class="min-h-[400px] bg-gray-200 rounded-md w-[300px]">
        <!-- header -->
        <div class="w-full py-4 rounded-t-md text-white">
            <!-- :class="[{ 'bg-red-900': color == 'red' }, { 'bg-yellow-500': color == 'gold' }, { 'bg-blue-200 !text-black': color == 'cyan' }, { 'bg-gray-300 !text-black': color == 'platinum' }]"> -->
            <p class="  text-center font-semibold">
                {{ name }}
            </p>
        </div>

        <!-- body and list -->
        <div class="p-4">
            <template v-for="(item, index) in list" :key="index">
                <div class=" flex gap-2">
                    <img :src="icon" :alt="name">
                    <p class="mb-2">
                        {{ description }}
                    </p>
                </div>
            </template>
        </div>
    </div>
</template>