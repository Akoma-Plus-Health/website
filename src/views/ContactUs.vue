<script setup>
import ContactForm from '../components/Contact/ContactForm.vue';
import Pageheader from '../components/contact/ContactHeader.vue';
</script>
<template>
  <main class="bg-[#F8F8F8]">
    <Pageheader />
    <section class="container py-10 md:py-20 mx-auto">
      <!-- map -->
      <div class="flex gap-10 justify-center flex-col md:flex-row">
        <div class="md:w-1/2">
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight">Contact <span class="text-red-800">Us</span></h2>
            <p class="text-gray-700 mt-8">
              Please contact us with any queries or questions you may have, and we will try our best to respond to you as
              soon as we can.
            </p>
          </div>
          <div class="bg-gray-100 rounded-lg">
            <img class="hover:ease-in-out" src="@/assets/images/contact-akomaplus.png" alt="reach_out_to_our_experts">
          </div>
          <div class="flex gap-6 text-gray-700 mt-8">
            <div class="inline-flex my-auto gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-8 h-8 flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
              </svg>

              <span class="flex flex-shrink-0  flex-col">
                <p class="gap-1 uppercase font-semibold text-gray-950">
                  Phone </p>
                <p><a href="tel:+14438501407" class="text-red-600 hover:text-red-950">+1-443-850-1407</a></p>
              </span>
            </div>
            <div class="inline-flex gap-3 my-auto">
              <!-- <img width="20%" src="@/assets/images/icons/email_bag.png" alt="email_bag_icon"> -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span>
                <p class="inline-flex gap-1 uppercase font-semibold text-gray-950"> Email</p>
                <p><a href="mailto: info@akomaplushealth.com"
                    class="text-red-600 hover:text-red-950">Info@akomaplushealth.com</a></p>
              </span>
            </div>
          </div>
        </div>
        <div class="md:w-1/2">
          <ContactForm class="!max-w-full" :message="message" />
        </div>
      </div>
    </section>
  </main>
</template>
  
<style></style>