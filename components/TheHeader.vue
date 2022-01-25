<template>
  <header class="border-b border-secondary-lightest lg:border-none lg:fixed lg:top-0 lg:w-full lg:z-10 lg:bg-white">
    <div class="container flex h-12 items-center justify-between lg:h-23">
      <div class="flex items-center space-x-8">
        <a href="javascript:void(0)">
          <img
            src="~/assets/img/logo-grabfood2.svg"
            class="w-23 lg:h-12 lg:w-auto"
          >
        </a>

        <AddressBar class="hidden lg:flex" />
      </div>

      <div class="flex gap-3">
        <a
          href="javascript:void(0)"
          class="border border-secondary-lightest hidden px-4 py-2 rounded font-medium text-xs text-secondary lg:block"
        >
          <img
            src="~/assets/img/icon-cart-default-black.svg"
            class="w-4"
          >
        </a>

        <a
          href="javascript:void(0)"
          class="border border-secondary-lightest px-4 py-2 rounded font-medium text-xs text-secondary"
        >
          Login/Sign Up
        </a>
      </div>
    </div>
  </header>
</template>
