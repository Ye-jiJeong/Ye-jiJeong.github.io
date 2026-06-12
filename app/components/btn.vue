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
  <button class="inline-flex justify-center items-center gap-1.5 rounded-md cursor-pointer hover:opacity-80">
    <span>{{ text }}</span>
    <i v-if="!hideArrow" :class="['xi-angle-right-min', iconClass]"></i>
  </button>
</template>

<style scoped>
</style>
