<script setup></script>

<template>
    <div class="header relative w-full">
        <div class="container">
            <div class="overlay absolute top-0 left-0 right-0 bottom-0 bg-black/50">
                <div class="overlay"></div>
            </div>
            <div class="content text-white relative z-10 min-width">
                <div class="w max-w-3xl py-40 ">
                    <h1 class="font-bold text-6xl">How well do you know <br>
                        your Blood Pressure?</h1>
                    <p class="mt-12 text-lg">
                        Do you truly understand your blood pressure? Explore <span
                            class="text-red-500 font-bold">AKOMA+</span>
                        for
                        insights, tools, and <br>
                        care that put your heart health first.

                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    background: url("@/assets/images/banner.jpg") center;
    background-size: cover;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 7, 7, 0.5);
}
</style>