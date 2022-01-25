<template>
  <div
    class="border border-secondary-lightest h-12 px-2 rounded-md flex items-center relative text-sm transition duration-200 cursor-pointer lg:w-1/3 hover:border-green"
    @click="isTimeDropdownShown = !isTimeDropdownShown"
  >
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
    <ul
      v-show="isTimeDropdownShown"
      class="absolute -bottom-36 left-0 p-4 rounded shadow-lg w-full z-20 bg-white"
    >
      <li class="py-2">
        14:30 - 14:45
      </li>
      <li class="py-2">
        14:45 - 15:00
      </li>
      <li class="py-2">
        15:00 - 15:15
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTimeDropdownShown: false
    }
  }
}
</script>
