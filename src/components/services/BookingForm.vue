<script>
export default {
    data() {
        return {
            showModal: true
        };
    },

    computed: {
        isModalShowing() {
            return this.showModal;
        }
    },

    methods: {
        Toggle() {
            this.showModal = !this.showModal;
        }
    }
};
</script>
<template>
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end text-left justify-center p-4 sm:items-center sm:p-0">
            <div class=" bg-gray-100 p-10 rounded-lg">
                <div class="h-6 w-6 text-gray-950 float-right cursor-pointer" @click="Toggle">
                    <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
                <div class="text-center mt-2">
                    <h3 class="text-md font-bold text-red-800  mx-auto">Partner with Us</h3>
                    <p class="text-sm w-[350px] mx-auto">Kindly provide your details below and our experts will
                        reach out to you shortly</p>
                </div>
                <div class="mt-4">
                    <!-- <span class="uppercase text-sm font-bold">Full Name</span> -->
                    <input
                        class="w-full bg-white text-gray-900 p-3 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                        type="text" placeholder="Name">
                </div>
                <div class="flex gap-4 mx-auto mt-4">
                    <div>
                        <!-- <span class="uppercase text-sm font-bold">Email</span> -->
                        <input
                            class="w-full bg-white text-gray-900 p-3 active:ring-0 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                            type="text" placeholder="Email">
                    </div>
                    <div>
                        <!-- <span class="uppercase text-sm font-bold">Phone Number</span> -->
                        <input
                            class="w-full bg-white text-gray-900 p-3 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                            type="phone" placeholder="Phone Number">
                    </div>
                </div>
                <div class="flex gap-4 mt-4 w-full">
                    <div>
                        <!-- <span class="uppercase text-sm font-bold">Company</span> -->
                        <input
                            class="w-full bg-white text-gray-900 p-3 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                            type="text" placeholder="Name of Company">
                    </div>
                    <div>
                        <!-- <span class="uppercase text-sm font-bold">No. of employees</span> -->
                        <input
                            class="w-full bg-white text-gray-900 p-3 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                            type="text" placeholder="Number of Employees">
                    </div>
                </div>
                <!-- <div class="mt-4">
                            <span class="uppercase text-sm font-bold">Message</span>
                            <textarea
                                class="w-full h-52 bg-white text-gray-900 mt-2 p-3 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                                placeholder="How can we help you?"></textarea>
                        </div> -->
                <div class="mt-4">
                    <button
                        class="mx-auto text-sm font-semibold w-[20%] tracking-wide bg-red-700 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                        Send
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 500ms ease-out;
}
</style>