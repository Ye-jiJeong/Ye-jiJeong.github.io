<script setup>
defineProps({
  text: String,
  hideArrow: {
    type: Boolean,
    default: false
  },
  iconClass: {
    type: String,
    default: ''
  }
})

</script>

<template>
  <button class="inline-flex justify-center items-center gap-1.5 py-5 px-10 text-xl rounded-xl font-medium cursor-pointer hover:opacity-80 max-lg:py-4 max-lg:px-8 max-md:px-6">
    <span>{{ text }}</span>
    <i v-if="!hideArrow" :class="['xi-angle-right-min', iconClass]"></i>
  </button>
</template>

<style scoped>
</style>
