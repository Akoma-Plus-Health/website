<script setup></script>

<template>
    <div class="header relative w-full">

        <!-- overlay -->
        <div class="overlay"></div>

        <!-- header content -->
        <div class="container mx-auto">

            <div class="text-white relative z-10 py-48">
                <!-- image -->
                <div class="image w-64 md:w-80 ">
                    <img src="../../assets/images/akomaplus-logo.png" alt="akoma" class="w-full">
                </div>

                <!-- text -->
                <div class="m max-w-2xl my-5">
                    <h1 class="font-bold big-heading">
                        Preventing cardiac deaths through early screening.
                    </h1>
                    <p class="mt-5">With our medical vans, we bring screening closer to you.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    background: url("@/assets/images/Akoma-ambulance3.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); 

}
</style>