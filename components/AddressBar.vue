<template>
  <section class="flex h-10 sticky items-center justify-center gap-2">
    <div class="flex justify-center items-center rounded-full p-1 w-5 bg-red">
      <font-awesome-icon
        :icon="['fas', 'map-marker']"
        class="text-white"
        size="xs"
      />
    </div>
    <p class="text-sm text-secondary-lighter">
      Type your location
    </p>
  </section>
</template>
