<template>
  <section class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
      <!-- image - start -->
      <img src="@/assets/images/akoma_doctors.png" loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center" />
      <!-- image - end -->

      <!-- overlay - start -->
      <!-- <div class="absolute inset-0 bg-dark-500 mix-blend-multiply"></div> -->
      <div class="absolute inset-0  backdrop-brightness-50"></div>
      <!-- overlay - end -->

      <!-- text start -->
      <div class="relative flex flex-col items-center p-4 lg:max-w-96">
        <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-6xl md:mb-12 md:text-6xl">About Us</h1>
        <p class="mt-2 text-center text-lg text-white lg:mb-8">At <span class="text-red-600 font-bold">Akoma+</span>, we're dedicated to empowering individuals to take control of their heart health. Our mobile app makes it easy for you to monitor your blood pressure and provides personalized guidance to ensure your heart stays in the best shape possible. Discover a new way to care for your heart with <span class="text-red-600 font-bold">Akoma+</span>.</p>
      </div>
      <!-- text end -->
    </section>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
