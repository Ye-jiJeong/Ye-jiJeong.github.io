<script setup>
defineProps({
  text: String,
})

</script>

<template>
  <h4 class="text-3xl text-black font-semibold max-lg:text-2xl max-sm:text-xl">{{ text }}</h4>
  <!-- max-sm:text-lg -->
</template>

<style scoped>
</style>
