<template>
  <div class="border border-secondary-lightest h-12 px-2 rounded-md flex items-center text-sm">
    <img
      src="~/assets/img/icon-clock.svg"
      class="pr-2"
    >
    <p>Deliver time: Now</p>
    <font-awesome-icon
      :icon="['fas', 'angle-down']"
      class="ml-auto text-secondary-lighter"
      size="sm"
    />
  </div>
</template>

<script>
export default {
  methods: {
    handleChange(value) {
      // console.log(`selected ${value}`)
    }
  }
}
</script>
