<template>
  <section class="pb-12 pt-8 px-3 bg-footernew text-primary-light">
    <div class="border-b border-secondary-lighter flex items-center justify-between pb-6">
      <a href="javascript:void(0)">
        <img
          src="~/assets/img/logo-grabfood-mono.svg"
          class="w-23"
        >
      </a>

      <div class="text-xs">
        <a href="javascript:void(0)">
          EN

          <font-awesome-icon
            :icon="['fas', 'angle-down']"
            class="ml-1"
          />
        </a>
      </div>
    </div>

    <div class="flex items-center justify-between my-4">
      <p class="font-medium text-base">
        Frequently Searched
      </p>

      <font-awesome-icon :icon="['fas', 'angle-down']" />
    </div>

    <div class="flex items-center justify-between my-4">
      <p class="font-medium text-base">
        Popular Cuisines
      </p>

      <font-awesome-icon :icon="['fas', 'angle-down']" />
    </div>

    <div class="flex items-center justify-between my-4">
      <p class="font-medium text-base">
        About Grab
      </p>

      <font-awesome-icon :icon="['fas', 'angle-down']" />
    </div>

    <div class="flex items-center justify-between my-4">
      <p class="font-medium text-base">
        Support
      </p>

      <font-awesome-icon :icon="['fas', 'angle-down']" />
    </div>
  </section>
</template>
