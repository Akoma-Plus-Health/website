<template>
    <div class="flex justify-center w-full relative who-banner h-[600px] select-none">
        <div class="overlay absolute ">
            <div class="overlay "></div>
        </div>
        <div class="flex flex-col items-center text-white relative lg:w-3/5">
            <h3 class="font-bold text-[48px] pt-20 pb-12"> According to the WHO</h3>
            <p class="text-center text-lg leading-8">heart disease takes an estimated 17.9 million lives worldwide each
                year. Screening for high blood pressure, diabetes and high cholesterol,
                remains low globally, driven by substantial shares of low- and middle-income populations who are not tested
                despite meeting <span href="" class="text-white hover:text-gray-800">WHO</span> criteria. </p>
            <p class=" mt-[50px] text-center text-lg leading-8"> “Approximately 4 out of every 5 people with hypertension
                are not adequately treated, but if countries can scale
                up coverage, 76 million deaths could be averted between 2023 and 2050.”-WHO</p>
        </div>
    </div>
</template>



<style scoped>
.who-banner {
    background: url("@/assets/images/Rectangle.png") center;
    background-size: cover;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(126, 23, 23, 0.5);
}
</style>