<script setup>
import emailjs from '@emailjs/browser';
import { ref } from 'vue';


const serviceID = "service_ohrt6xq";
const templateID = "template_6xpak2y";
const publicKEY = "1AbAB5QQapUQcB_UU";

const name = ref('');
const email = ref('');
const message = ref('');

function sendMail() {
    const params = {
        name: name.value,
        email: email.value,
        message: message.value,
    };

    emailjs.send(serviceID, templateID, publicKEY, params)
        .then(res => {
            name.value = ''; // Reset form fields
            email.value = '';
            message.value = '';
            console.log(res);
            alert("Your message sent successfully!!");
        })
        .catch(err => console.log(err));
}
</script>
<template>
    <div>
        <div>
            <!-- <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span> -->
            <input id="name" v-model="name"
                class="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                type="text" placeholder="Name*">
        </div>
        <div class="mt-4">
            <!-- <span class="uppercase text-sm text-gray-600 font-bold">Email</span> -->
            <input id="email" v-model="email"
                class="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                type="text" placeholder="Email">
        </div>
        <div class="mt-4">
            <!-- <span class="uppercase text-sm text-gray-600 font-bold">Email</span> -->
            <input
                class="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                type="text" placeholder="Phone Number*">
        </div>
        <div class="mt-4">
            <!-- <span class="uppercase text-sm text-gray-600 font-bold">Message</span> -->
            <textarea id="message" v-model="message"
                class="w-full h-52 bg-white text-gray-900 mt-2 p-3 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                placeholder="How can we help you?"></textarea>
        </div>
        <div class="mt-4">
            <button :onclick="sendMail()"
                class="uppercase text-sm font-bold tracking-wide bg-red-700 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Send
            </button>
        </div>
    </div>
</template>