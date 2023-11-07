<script setup>
import ArticleCard from './ArticleCard.vue';
</script>

<template>
    <section class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto container max-w-screen-2xl px-4 md:px-8">
            <div class="mx-auto py-32">
                <div class="py-10">
                    <h2 class="font-bold text-4xl text-center py-5">Our Health Articles</h2>
                </div>

            </div>
            <div class="mx-auto grid gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                <ArticleCard />
            </div>
        </div>
    </section>
</template>



<style scoped></style>