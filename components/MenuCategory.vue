<template>
  <div
    :id="menu.categoryName"
    class="mt-2 px-3 py-6 bg-white lg:bg-transparent"
  >
    <h2 class="mb-6 font-medium text-xl lg:text-4xl">
      {{ menu.categoryName }}
    </h2>

    <div class="lg:grid lg:grid-cols-3 lg:gap-6">
      <MenuItem
        v-for="(item, index) in menu.menuItems"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      required: true
    }
  }
}
</script>
