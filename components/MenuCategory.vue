<template>
  <div class="mt-2 px-3 py-6 bg-white">
    <h2 class="mb-6 font-medium text-xl">
      Aigo
    </h2>

    <MenuItem
      v-for="(item, index) in menu.menuItems"
      :key="index"
      :item="item"
    />
  </div>
</template>
