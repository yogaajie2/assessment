<template>
  <div class="mt-2 px-3 py-6 bg-white">
    <h2 class="mb-6 font-medium text-xl">
      {{ menu.categoryName }}
    </h2>

    <MenuItem
      v-for="(item, index) in menu.menuItems"
      :key="index"
      :item="item"
    />
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
