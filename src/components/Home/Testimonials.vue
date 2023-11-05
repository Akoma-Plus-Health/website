<!-- <script setup>
import { defineComponent, ref, watch } from 'vue';

export const testimonies = ref([
    {
        id: 1,
        author: {
            name: 'John Doe',
            avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec0770c48badd?d=identicon'
        },
        content: 'This is the best product I have ever used! It has made my life so much easier.'
    },
    {
        id: 2,
        author: {
            name: 'Jane Doe',
            avatar: 'https://www.gravatar.com/avatar/f4396ea2a55997f6b9315566195ce87e?d=identicon'
        },
        content: 'I highly recommend this product to anyone looking for a solution to their problem.'
    }
]);

export default defineComponent({
  setup() {
    watch(currentTestimonyIndex, () => {
      isSlideIn = true
    });

    const autoSlide = () => {
      setTimeout(() => {
        currentTestimonyIndex.value = (currentTestimonyIndex.value + 1) % testimonies.value.length;
        autoSlide();
      }, 3000);
    };

    autoSlide();

    return {
      testimonies,
      isSlideIn,
      currentTestimonyIndex
    };
  }
});
</script> -->
<template>
    <section class="testimonial text-center sm:py-8 lg:py-12 py-20">
        <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div class="mb-10 md:mb-16">
                    <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our Client
                        Testimonials</h2>
                </div>
                <!-- quote - start -->
                <div class="flex flex-col items-center gap-4 md:gap-6">
                    <div class="max-w-md text-center text-gray-600 lg:text-lg">“Thanks to Akoma's mobile app, my journey to
                        recovery from heart disease was transformed. The app's personalized guidance,
                        daily monitoring, and access to expert advice made all the difference. I'm now on the path to a
                        healthier heart, and I can't thank
                        Akoma enough for their life-saving support.”</div>

                    <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                        <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                            <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                                loading="lazy" alt="Photo by Radu Florin"
                                class="h-full w-full object-cover object-center" />
                        </div>

                        <div>
                            <div class="text-center text-sm font-bold text-gray-800 sm:text-left md:text-base">John Krah
                            </div>
                            <p class="text-center text-sm text-red-700 sm:text-left md:text-sm">CEO / Datadrift</p>


                            <p class="c-rate">

                                <!DOCTYPE svg
                                    PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                                <svg width="40%" height="20%" viewBox="0 0 881 130" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    xml:space="preserve" xmlns:serif="http://www.serif.com/"
                                    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                    <g transform="matrix(1,0,0,1,-634.728,-382.568)">
                                        <path
                                            d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
                                            style="fill:rgb(255,216,0);" />
                                    </g>
                                    <g transform="matrix(1,0,0,1,-447.914,-382.568)">
                                        <path
                                            d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
                                            style="fill:rgb(255,216,0);" />
                                    </g>
                                    <g transform="matrix(1,0,0,1,-261.961,-382.568)">
                                        <path
                                            d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
                                            style="fill:rgb(255,216,0);" />
                                    </g>
                                    <g transform="matrix(1,0,0,1,-76.0238,-382.568)">
                                        <path
                                            d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
                                            style="fill:rgb(255,216,0);" />
                                    </g>
                                    <g transform="matrix(1,0,0,1,109.853,-382.568)">
                                        <path
                                            d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
                                            style="fill:rgb(255,216,0);" />
                                    </g>
                                </svg>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- quote - end -->
            </div>
        </div>
    </section>
</template>
<style lang="css" scoped></style>