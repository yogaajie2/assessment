<template>
  <div class="sticky top-10 z-10 bg-white lg:top-23">
    <div class="container flex items-center justify-between">
      <font-awesome-icon
        :icon="['fas', 'angle-left']"
        class="text-secondary-light cursor-pointer"
      />

      <div class="flex justify-between">
        <a
          v-for="(category, index) in categories"
          :key="index"
          :href="`#${category.categoryName}`"
          class="p-3 text-sm text-secondary transition-colors duration-200 lg:px-6 lg:py-3 lg:text-base lg:hover:text-green"
        >{{ category.categoryName }}</a>
      </div>

      <font-awesome-icon
        :icon="['fas', 'angle-right']"
        class="text-secondary-light cursor-pointer"
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
