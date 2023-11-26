<script setup>
defineProps(['name', 'title', 'image', 'bio'])
</script>
<template>
    <div class="flex flex-wrap gap-6">
        <div class="group w-[350px] box-shadow bg-white h-[350px] text-center p-5 py-10">
            <div class="rounded-full mx-auto w-[60%]">
                <img :src="image" :alt="name" class="w-full rounded-full">
            </div>

            <p class="text-xl font-bold mt-4 mb-1">{{ name }}</p>

            <p class="text-red-500"> {{ title }} <img src="../../assets/images/icons/linkedin.svg" alt=""
                    class="inline w-4 relative bottom-[1px]">
            </p>

            <!-- <p class="invisible group-hover:visible text-left"> -->

        </div>
        <div
            class="bg-white box-shadow p-8 py-14 w-[350px] lg:w-[720px] md:h-[350px] h-auto no-scrollbar overflow-y-scroll">
            <p>
                {{ bio }}
            </p>
        </div>
    </div>
</template>
<style scoped>
.box-shadow {
    box-shadow: 0px 5px 20px 0px rgba(0, 15, 31, 0.05);
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>