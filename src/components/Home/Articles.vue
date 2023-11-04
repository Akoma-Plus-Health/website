<script setup>
import ArticleCard from './ArticleCard.vue';
</script>

<template>
    <section>
        <div class="mx-auto container py-32">
            <div class="py-10">
                <h2 class="font-bold text-6xl text-center py-5">Our Health Articles</h2>
            </div>

            <div class="flex gap-6 mx-auto">
                <ArticleCard />
            </div>
        </div>
    </section>
</template>



<style scoped></style>