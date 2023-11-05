<script setup>
import {
    FwbAccordion,
    FwbAccordionContent,
    FwbAccordionHeader,
    FwbAccordionPanel,
} from 'flowbite-vue'
</script>

<template>
    <!-- question - start -->
    <fwb-accordion :open-first-item="false" flush>
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
        <!-- question - end -->

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
    </fwb-accordion>
</template>