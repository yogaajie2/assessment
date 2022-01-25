<template>
  <div class="border border-secondary-lightest h-12 px-2 rounded-md flex items-center text-sm transition duration-200 cursor-pointer lg:w-1/3 hover:border-green">
    <img
      src="~/assets/img/icon-calendar.svg"
      class="pr-2"
    >
    <p>Deliver date: Today</p>
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
