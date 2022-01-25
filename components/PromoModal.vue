<template>
  <div class="fixed flex items-center justify-center h-screen top-0 w-screen z-20 bg-primary bg-opacity-50">
    <div class="rounded p-4 relative font-medium bg-white shadow-lg lg:p-6">
      <div class="flex pb-6 space-x-1">
        <h3 class="text-xl">
          Promotions
        </h3>
        <img
          src="~/assets/img/icon-promo-tag.svg"
          class="w-6"
        >
      </div>

      <h4 class="text-base">
        GAJIANGF40 40% | DUKUNGUMKM 60%
      </h4>

      <a
        href="javascript:void(0)"
        class="absolute right-4 top-4"
        @click="$nuxt.$emit('hidePromoModal')"
      >
        <font-awesome-icon
          :icon="['fas', 'times']"
          class="ml-auto text-secondary-light"
          size="lg"
        />
      </a>
    </div>
  </div>
</template>
