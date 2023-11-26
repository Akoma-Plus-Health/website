<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div>
                    <!-- <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span> -->
                    <input
                        class="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                        type="text" placeholder="Name*">
                </div>
                <div class="mt-4">
                    <!-- <span class="uppercase text-sm text-gray-600 font-bold">Email</span> -->
                    <input
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
                    <textarea
                        class="w-full h-52 bg-white text-gray-900 mt-2 p-3 rounded-lg border-transparent focus:ring-0 focus:border-transparent"
                        placeholder="How can we help you?"></textarea>
                </div>
                <div class="mt-4">
                    <button
                        class="uppercase text-sm font-bold tracking-wide bg-red-700 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                        Send
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>