<script setup>
import Pageheader from '../components/layouts/pageheader.vue';


</script>
<template>
    <Pageheader />
    <section>
<div class="max-w-screen-xl w-full mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900">
  <div class="flex flex-col justify-between">
    <div>
      <h2 class="text-4xl lg:text-5xl font-bold leading-tight">Contact <span class="text-red-800">Us</span></h2>
      <div class="text-gray-700 mt-8">
        Please contact us with any queries or questions you may have, and we will try our best to respond to you as soon as we can.
      </div>
    </div>
  </div>
  <div class="">
    <div>
      <!-- <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span> -->
      <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type="text" placeholder="Name*">
    </div>
    <div class="mt-4">
      <!-- <span class="uppercase text-sm text-gray-600 font-bold">Email</span> -->
      <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" 
        type="text" placeholder="Email">
    </div>
    <div class="mt-4">
      <!-- <span class="uppercase text-sm text-gray-600 font-bold">Email</span> -->
      <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" 
        type="text" placeholder="Phone Number*">
    </div>
    <div class="mt-4">
      <!-- <span class="uppercase text-sm text-gray-600 font-bold">Message</span> -->
      <textarea
        class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" placeholder="How can we help you?"></textarea>
    </div>
    <div class="mt-4">
      <button class="uppercase text-sm font-bold tracking-wide bg-red-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
        Send
      </button>
    </div>
    <div class="flex flex-col justify-between">
    <div>
      <div class="text-gray-700 mt-8">
        Please contact us with any queries or questions you may have, and we will try our best to respond to you as soon as we can.
      </div>
    </div>
  </div>
  </div>
</div>
  </section>
  </template>
  
  <style>
  </style>