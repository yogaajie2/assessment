<template>
  <div class="sticky top-10 z-10 bg-white">
    <div class="container flex items-center justify-between">
      <font-awesome-icon
        :icon="['fas', 'angle-left']"
        class="text-secondary-light"
      />

      <div class="flex justify-between">
        <a
          v-for="(category, index) in categories"
          :key="index"
          href="javascript:void(0)"
          class="p-3 text-sm text-secondary"
        >{{ category.categoryName }}</a>
      </div>

      <font-awesome-icon
        :icon="['fas', 'angle-right']"
        class="text-secondary-light"
      />
    </div>
  </div>
</template>

<script>
import data from '~/menu.json'

export default {
  data() {
    return {
      categories: data.menu
    }
  }
}
</script>
