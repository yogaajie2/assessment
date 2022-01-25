<template>
  <div class="fixed flex items-end justify-center h-screen top-0 w-screen z-20 bg-primary bg-opacity-50 lg:items-center">
    <div class="flex flex-col rounded p-4 bg-white shadow-lg lg:p-6 lg:w-1/4">
      <div class="flex justify-between text-base">
        <span class="font-medium">
          Order Fee
        </span>
        <span class="text-secondary">Rp.3.000</span>
      </div>

      <p class="mt-4 text-sm text-secondary">
        Thank you for choosing GrabFood as your delivery partner. This fee allows us to keep improving our service on delivering your favourite food.
      </p>

      <a
        href="javascript:void(0)"
        class="block mt-4"
        @click="$nuxt.$emit('hideOrderFeeModal')"
      >
        <button class="h-12 px-4 rounded font-medium bg-green text-white w-full">
          Got it
        </button>
      </a>
    </div>
  </div>
</template>
