<template>
  <div
    class="border-b border-secondary-lightest flex py-4 relative cursor-pointer lg:border lg:border-transparent lg:p-4 lg:rounded lg:bg-white lg:hover:border lg:hover:border-green"
    @click="isLoginTooltipShown = !isLoginTooltipShown"
  >
    <img
      :src="item.image"
      :alt="item.name"
      class="rounded h-24 w-24 mr-4 lg:h-30 lg:w-30"
    >

    <div class="px-1 w-full lg:flex lg:flex-col">
      <h3 class="text-base">
        {{ item.name }}
      </h3>

      <h6 class="mt-1 text-xs text-secondary-light lg:text-sm">
        {{ item.description }}
      </h6>

      <div class="mt-3" />

      <div class="flex lg:mt-auto">
        <font-awesome-icon
          :icon="['fas', 'plus-square']"
          size="2x"
          class="ml-auto text-green"
        />
      </div>
    </div>

    <div
      v-show="isLoginTooltipShown"
      class="absolute top-1/2 flex items-center justify-between p-4 rounded w-11/12 z-10 bg-white shadow-lg"
    >
      <p class="font-medium">
        Please login to add this item to your basket.
      </p>

      <a href="javascript:void(0)">
        <button class="px-4 rounded font-medium bg-green  text-white">Login/Sign Up</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      isLoginTooltipShown: false
    }
  }
}
</script>
