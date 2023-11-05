<script setup>
import ArticleCard from './ArticleCard.vue';
</script>

<template>
    <section>
        <div class="mx-auto container py-32">
            <div class="py-10">
                <h2 class="font-bold text-4xl text-center py-5">Our Health Articles</h2>
            </div>

            <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                <ArticleCard />
            </div>
        </div>
    </section>
</template>



<style scoped></style>