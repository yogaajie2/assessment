<template>
  <div
    class="border border-secondary-lightest h-12 px-2 rounded-md flex items-center relative text-sm transition duration-200 cursor-pointer lg:w-1/3 hover:border-green"
    @click="isDateDropdownShown = !isDateDropdownShown"
  >
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

    <ul
      v-show="isDateDropdownShown"
      class="absolute -bottom-36 left-0 p-4 rounded shadow-lg w-full z-20 bg-white"
    >
      <li class="py-2">
        Today
      </li>
      <li class="py-2">
        Tue, 25 Jan
      </li>
      <li class="py-2">
        Wed, 26 Jan
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDateDropdownShown: false
    }
  }
}
</script>
