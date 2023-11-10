<!-- <script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { TransitionRoot } from '@headlessui/vue'

const testimonialsRef = ref<HTMLCanvasElement | null>(null)
const active = ref<number>(0)
const autorotate = ref<boolean>(true)
const autorotateTiming = ref<number>(7000)
let interval: number

interface Testimonial {
    img: string
    quote: string
    name: string
    role: string
}

const props = defineProps<{
    testimonials: Testimonial[]
}>()

const testimonials = props.testimonials

const heightFix = () => {
    setTimeout(() => {
        if (testimonialsRef.value && testimonialsRef.value.parentElement) testimonialsRef.value.parentElement.style.height = `${testimonialsRef.value.clientHeight}px`
    }, 1)
}

const stopAutorotate = () => {
    autorotate.value = false
    clearInterval(interval)
}

onMounted(() => {
    if (!autorotate.value) return
    interval = setInterval(() => {
        active.value = active.value + 1 === testimonials.length ? 0 : active.value + 1
    }, autorotateTiming.value)
})

onUnmounted(() => clearInterval(interval))
</script>

<template>
    <div class="w-full max-w-3xl mx-auto text-center">
        -- Testimonial image --
        <div class="relative h-32">
            <div
                class="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-10">
                <div
                    class="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">

                    <template :key="index" v-for="(testimonial, index) in testimonials">
                        <TransitionRoot :show="active === index" class="absolute inset-0 h-full -z-10"
                            enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                            enterFrom="opacity-0 -rotate-[60deg]" enterTo="opacity-100 rotate-0"
                            leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                            leaveFrom="opacity-100 rotate-0" leaveTo="opacity-0 rotate-[60deg]">
                            <img class="relative top-11 left-1/2 -translate-x-1/2 rounded-full" :src="testimonial.img"
                                width="56" height="56" :alt="testimonial.name" />
                        </TransitionRoot>
                    </template>

                </div>
            </div>
        </div>
        -- Text --
        <div class="mb-9 transition-all duration-150 delay-300 ease-in-out">
            <div class="relative flex flex-col" ref="testimonialsRef">

                <template :key="index" v-for="(testimonial, index) in testimonials">
                    <TransitionRoot :show="active === index"
                        enter="transition ease-in-out duration-500 delay-200 order-first"
                        enterFrom="opacity-0 -translate-x-4" enterTo="opacity-100 translate-x-0"
                        leave="transition ease-out duration-300 delay-300 absolute" leaveFrom="opacity-100 translate-x-0"
                        leaveTo="opacity-0 translate-x-4" @before-enter="heightFix()">
                        <div class="text-2xl font-bold text-slate-900 before:content-['\201C'] after:content-['\201D']">{{
                            testimonial.quote }}</div>
                    </TransitionRoot>
                </template>

            </div>
        </div>
        -- Buttons --
        <div class="flex flex-wrap justify-center -m-1.5">
            <template :key="index" v-for="(testimonial, index) in testimonials">
                <button
                    class="inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                    :class="active === index ? 'bg-indigo-500 text-white shadow-indigo-950/10' : 'bg-white hover:bg-indigo-100 text-slate-900'"
                    @click="active = index; stopAutorotate();">
                    <span>{{ testimonial.name }}</span> <span
                        :class="active === index ? 'text-indigo-200' : 'text-slate-300'">-</span> <span>{{ testimonial.role
                        }}</span>
                </button>
            </template>
        </div>
    </div>

</template> -->
<template>
    <section class="testimonial text-center sm:py-8 lg:py-12 py-20">
        <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div class="mb-10 md:mb-16">
                    <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our Client
                        Testimonials</h2>
                </div>
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
            </div>
        </div>
    </section>
</template>
