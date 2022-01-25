<template>
  <section class="py-2 bg-darkgray lg:py-18">
    <div class="lg:container">
      <MenuCategory
        v-for="(menu, index) in menus"
        :key="index"
        :menu="menu"
      />
    </div>
  </section>
</template>

<script>
import data from '~/menu.json'

export default {
  data() {
    return {
      menus: data.menu
    }
  }
}
</script>
