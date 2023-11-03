<script setup>

</script>
<template>
    <div class="  relative who-banner container mx-auto h-[600px] p-[100px] ">
        <div class="overlay absolute ">
            <div class="overlay "></div>
        </div>
       <div class=" text-white z-10 relative "> <h3 class="font-bold text-[48px] text-center pt-20 pb-12 mt-[100px]"> According to the WHO</h3>
        <p class="text-center leading-8">heart disease takes an estimated 17.9 million lives worldwide each year.
            Screening for high blood pressure, diabetes and high cholesterol ,<br>
            remains low globally, driven by substantial shares of low- and middle-income populations who are not tested
            despite meeting WHO criteria. <br>
           <p class=" mt-[50px] text-center leading-8"> “Approximately 4 out of every 5 people with hypertension are not adequately treated, but if countries can scale
            up coverage, 76 million deaths <br> could be averted between 2023 and 2050.”-WHO</p>
        </p>
    </div>
    </div>
</template>



<style scoped>
.who-banner {
    background: url("@/assets/images/Rectangle.png") center;
    background-size: cover;
    ;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(176, 36, 36, 0.398);
}
</style>