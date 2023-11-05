<script setup>
import {
    FwbAccordion,
    FwbAccordionContent,
    FwbAccordionHeader,
    FwbAccordionPanel,
} from 'flowbite-vue'

const faq = [
    {
        question: "What is Alpine.js?",
        answer: [
            "Bacon ipsum dolor amet boudin hamburger jerky spare ribs, bacon leberkas beef ribs sausage turkey pancetta tenderloin chicken.",
            "Meatball landjaeger turducken. Bacon bresaola tenderloin cow rump pork chop."
        ]
    },
    {
        question: "Is it difficult to learn?",
        answer: [
            "Boudin sausage hamburger tenderloin beef chislic prosciutto pancetta. Beef tongue pork meatloaf.",
            "Chicken pork chop turducken ground round. Shank bresaola burgdoggen short loin ham hock ham. Boudin tri-tip swine drumstick strip steak tail."
        ]
    },
    {
        question: "How can I use this code?",
        answer: [
            "Salami filet mignon strip steak venison rump chicken bresaola. Shank flank tongue ribeye. Beef pork chop sirloin venison chicken jowl.",
            "Doner corned beef kielbasa beef ribs ground round cow salami swine."
        ]
    }
];
</script>



<template>
    <div class="bg-gray-100 pt-10 px-3 pb-20">
        <h1 class="text-gray-600 text-center">
            <div class="font-bold">
                Smooth Accordion
            </div>
            using Alpine.js (w/ x-for) + Tailwind CSS
        </h1>

        <div class="my-10 max-w-2xl mx-auto space-y-4 lg:space-y-6" x-data="{ faq, faq_selected: null }">

            <template x-for="(item, index) in faq" :key="`item-{$index}`">

                <div class="item bg-white shadow-md rounded-md p-3">
                    <div class="flex items-center cursor-pointer"
                        @click="faq_selected !== index ? faq_selected = index : faq_selected = null">
                        <div
                            class="bg-indigo-100 text-indigo-400 w-8 h-8 md:w-10 md:h-10 rounded-md flex items-center justify-center font-bold text-lg font-display">
                            <span x-text="index + 1"></span>
                        </div>
                        <div class="ml-3 md:ml-4 lg:ml-6 md:text-lg text-indigo-600">
                            <span x-text="item.question"></span>
                        </div>
                    </div>
                    <div class="relative overflow-hidden transition-all max-h-0 duration-700"
                        x-bind:style="faq_selected === index ? `max-height:  ${ $el.scrollHeight }px` : ``">
                        <div class="text-gray-700 ml-8 md:ml-10 pl-3 md:pl-4 lg:pl-6 py-2 space-y-3">

                            <template x-for="(ans, index) in item.answer" :key="`item-ans-{$index}`">
                                <p x-text="ans"></p>
                            </template>

                        </div>
                    </div>
                </div>

            </template>

        </div>
    </div>
    <!-- question - start -->
    <!-- <fwb-accordion :open-first-item="false" flush>
        <fwb-accordion-panel class=" dark:bg-white active:bg-white hover:bg-red-950 hover:text-white bg-white border mt-4">
            <fwb-accordion-header>
                <p class="text-red-900">How many times can I be screened?</p>
            </fwb-accordion-header>
            <fwb-accordion-content>
                <div>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                        The frequency of screenings can vary based on individual heath and risk factors.Typically, annual
                        screenings are recommended, but consult with a health care provider for personalized guidance.
                    </p>
                </div>
            </fwb-accordion-content>
        </fwb-accordion-panel>
       

        <fwb-accordion-panel class="bg-white border mt-4">
            <fwb-accordion-header class="text-red-900 active:bg-white hover:bg-red-900">
                <p class="text-red-900 hover:text-red-900">Does Akoma+ provide consultation services?</p>
            </fwb-accordion-header>
            <fwb-accordion-content>
                <div>
                    <p class="mb-2 text-gray-500 dark:text-gray-400 md:w-3/4 sm:w-full">
                        Yes, Akoma+ offers compprehensive consulatation service for individuals seeking expert guidance on
                        heart health. Our team of experienced professionals is here to provide personalized advise and
                        support to help you achieve and maintain a healthy heart.
                    </p>
                </div>
            </fwb-accordion-content>
        </fwb-accordion-panel>

        <fwb-accordion-panel class="bg-white border mt-4">
            <fwb-accordion-header class="text-red-900">
                <p class="text-red-900">How accurate is my cadiovascular risk score?</p>
            </fwb-accordion-header>
            <fwb-accordion-content class="bg-white">
                <div>
                    <p class="mb-2 text-gray-500 dark:text-gray-400 md:w-3/4 sm:w-full">
                        The accuracy of your cardiovascular risk score depends on the data provided and the calculation
                        method used. Healthcare professionals typically use validated tools for risk assessment. It is
                        crucial to provide accurate information and consult a healthcare professionalfor personalized
                        guidance.
                    </p>
                </div>
            </fwb-accordion-content>
        </fwb-accordion-panel>
    </fwb-accordion> -->
<!-- question - end --></template>