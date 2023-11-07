<template>
  <section
    class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
    <!-- image - start -->
    <img src="@/assets/images/akoma_doctors.png" loading="lazy" alt="Photo by Fakurian Design"
      class="absolute inset-0 h-full w-full object-cover object-center" />
    <!-- image - end -->

    <!-- overlay - start -->
    <!-- <div class="absolute inset-0 bg-dark-500 mix-blend-multiply"></div> -->
    <div class="absolute inset-0  backdrop-brightness-50"></div>
    <!-- overlay - end -->

    <!-- text start -->
    <div class="relative flex flex-col items-center lg:w-3/4">
      <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-6xl md:text-6xl">About Us</h1>
      <p class="mt-2 text-center text-lg text-white lg:mb-8">At <span class="text-red-600 font-bold">Akoma+</span>, we're
        dedicated to empowering individuals to take control of their heart health. Our mobile app makes it easy for you to
        monitor your blood pressure and provides personalized guidance to ensure your heart stays in the best shape
        possible. Discover a new way to care for your heart with <span class="text-red-600 font-bold">Akoma+</span>.</p>
    </div>
    <!-- text end -->

  </section>
  <div class="mt-96 absolute bg-gray-300 grid gap-y-10 p-10 rounded-lg sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3">
    <!-- quote - start -->
    <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
      <div class="flex flex-col items-center gap-2 md:gap-3">
        <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
          <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
            loading="lazy" alt="Photo by Radu Florin" class="h-full w-full object-cover object-center" />
        </div>

        <div class="flex flex-col items-center">
          <div class="text-center text-sm font-bold text-black sm:text-left md:text-base">1.3 Crore+</div>
          <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">Satisfied Patients</p>
        </div>
      </div>
    </div>
    <!-- quote - end -->

    <!-- quote - start -->
    <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
      <div class="flex flex-col items-center gap-2 md:gap-3">
        <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
          <img src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"
            loading="lazy" alt="Photo by christian ferrer" class="h-full w-full object-cover object-center" />
        </div>

        <div class="flex flex-col items-center">
          <div class="text-center text-sm font-bold text-black sm:text-left md:text-base">1.7 Million+</div>
          <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">Doctors Appointment</p>
        </div>
      </div>
    </div>
    <!-- quote - end -->

    <!-- quote - start -->
    <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
      <div class="flex flex-col items-center gap-2 md:gap-3">
        <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
          <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500"
            loading="lazy" alt="Photo by Ayo Ogunseinde" class="h-full w-full object-cover object-center" />
        </div>

        <div class="flex flex-col items-center">
          <div class="text-center text-sm font-bold text-black sm:text-left md:text-base">1000+</div>
          <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">Certified Experts</p>
        </div>
      </div>
    </div>
    <!-- quote - end -->
  </div>
  <section
    class="min-h-96 relative flex flex-1 shrink-0 items-center  justify-center overflow-hidden bg-gray-100 py-16 shadow-sm md:py-20 xl:py-48">
    <div class="w-96 h-48 flex flex-col align-items-center p-4 rounded-lg overflow-hidden border border-red-600">
      <h3 class="font-bold">Our Mission</h3>
      <p>Using a digital health platform, we seek to provide routine and comprehensive screening for heart disease and
        stroke risk factors in low- and middle-income countries and provide effective, efficient, and timely prevention
        strategies. </p>
    </div>
    <div class="w-48 h-48 flex justify-center align-items-center rounded-lg overflow-hidden border border-green-600">
      <img src="image2.jpg" alt="Image 2" class="w-full h-full object-cover">
    </div>
    <div class="w-96 h-48 flex justify-center align-items-center rounded-lg overflow-hidden border border-blue-600">
      <img src="image3.jpg" alt="Image 3" class="w-full h-full object-cover">
    </div>
    <div
      class="w-96 h-48 flex flex-col p-4 justify-center align-items-center rounded-lg overflow-hidden shadow-lg border border-yellow-600">
      <h3 class="font-bold">Our Vision</h3>
      <p>To create a world where every individual, regardless of their background or location, has the knowledge, tools,
        and support needed to achieve and maintain optimal heart health. We envision a future where heart disease is
        preventable and treatable for all, paving the way for healthier, happier lives.</p>
    </div>
  </section>



  <section
    class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">

  </section>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */</style>
