<script setup>
defineProps({
  text: String,
})

</script>

<template>
  <p class="text-xl font-medium mt-5 max-lg:text-lg max-md:text-base">{{ text }}</p>
</template>

<style scoped>
</style>
