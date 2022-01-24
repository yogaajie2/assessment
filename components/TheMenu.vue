<template>
  <section class="bg-darkgray">
    <MenuCategory
      v-for="(menu, index) in menus"
      :key="index"
      :menu="menu"
    />
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
