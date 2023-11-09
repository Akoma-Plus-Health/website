<script setup>
// import { Email } from '@/utils/libraries/smtp'
import { ref, reactive, onMounted } from 'vue';
// const email = ref('');
// const password = ref('');


defineProps(['name', 'title', 'image'])

// const sendEmail = new Email.send({
//     SecureToken: "SMTP_SERVER_SECURITY_TOKEN",
//     To: "vewani4834@jucatyo.com",
//     From: "SENDER_EMAIL",
//     name: this.name,
//     Subject: this.subject,
//     body: this.message,
// }).then((message) => alert(message));

const mes = ref("")

onMounted(() => {
    setTimeout(() => {
        mes.value = props.message
    }, 100)
})
</script>
<template>
    <form action="" class="max-w-lg mx-auto">
        <!-- Name -->
        <div class="mb-4">
            <!-- <label for="name" class="font- font-medium">Name</label> -->
            <input type="text" name="name" id="name"
                class="w-full block p-2 mt-2 rounded-md focus:ring-0 border-none bg-white" placeholder="Name">
        </div>
        <!-- Email -->
        <div class="mb-4">
            <!-- <label for="email" class="font- font-medium">Email Address</label> -->
            <input type="text" name="email" id="email"
                class="w-full block p-2 mt-2 rounded-md focus:ring-0 border-none bg-white" placeholder="Email">
        </div>

        <!-- Phone number -->
        <div class="mb-4">
            <!-- <label for="number" class="font- font-medium">Phone Number</label> -->
            <input type="number" name="number" id="number"
                class="w-full block p-2 mt-2 rounded-md focus:ring-0 border-none bg-white" maxlength="9"
                placeholder="Phone number">

        </div>

        <!-- Message -->
        <div class="mb-4">
            <!-- <label for="message" class="font- font-medium">Message</label> -->
            <textarea type="text" name="message" id="message" v-model="mes"
                class="w-full block p-2 mt-2 rounded-md focus:ring-0 border-none bg-white"
                placeholder="How can we help you?" rows="8"></textarea>
        </div>

        <!-- agree -->
        <!-- <input type="checkbox" name="agree" id="agree" class="align-middle"><label for="agree" class="ml-2 font-semibold">I
            agree
            with Nnuro
            <router-link :to="{ name: 'PrivacyPolicy' }" class="text-red-700 hover:text-primary-hover">Privacy
                Policy</router-link></label> -->

        <button class="button bg-red-700 mt-8 block w-full py-2 rounded-md text-white uppercase">Send</button>
    </form>
</template>

<style scoped>
/* for hiding buttons on the input element  */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
</style>