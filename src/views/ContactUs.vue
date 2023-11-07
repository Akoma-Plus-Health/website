<script setup>
import ContactForm from '../components/contact/ContactForm.vue';
import Pageheader from '../components/layouts/PageHeader.vue';


</script>
<template>
  <Pageheader />
  <section class="bg-[#F8F8F8]">
    <div
      class=" container w-full mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900">
      <div class="flex flex-col justify-between">
        <div>
          <h2 class="text-4xl lg:text-5xl font-bold leading-tight">Contact <span class="text-red-800">Us</span></h2>
          <p class="text-gray-700 mt-8">
            Please contact us with any queries or questions you may have, and we will try our best to respond to you as
            soon as we can.
            <!-- If you have any questions or need help, please feel free to contact us! We'll get back to you as soon as
            possible. -->
          </p>
        </div>
        <div>
          <img src="@/assets/images/contact-akomaplus.png" alt="get in touch with us" class="drop-shadow-sm">
        </div>
        <div class="flex flex-col justify-between">
          <div>
            <div class="flex gap-6 text-gray-700 mt-8">
              <div class="inline-flex gap-3">
                <img width="23%" src="@/assets/images/icons/phone.png" alt="phone_icon">
                <span>
                  <p class="inline-flex gap-1 uppercase font-semibold text-gray-950">
                    Phone </p>
                  <p><a href="tel: +14438501407" class="text-red-600">+1-443-850-1407</a></p>
                </span>
              </div>
              <div class="inline-flex gap-3">
                <img width="23%" src="@/assets/images/icons/email_bag.png" alt="email_bag_icon">
                <span>
                  <p class="inline-flex gap-1 uppercase font-semibold text-gray-950"> Email</p>
                  <p><a href="mailto: info@akomaplushealth.com" class="text-red-600">Info@akomaplushealth.com</a></p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  </section>
</template>
  
<style></style>