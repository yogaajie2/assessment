<template>
  <div class="border-b border-secondary-lightest flex py-4 cursor-pointer lg:border lg:border-transparent lg:p-4 lg:rounded lg:bg-white hover:border hover:border-green">
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
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
