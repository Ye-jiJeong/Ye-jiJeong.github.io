<script setup>
defineProps({
  text: String,
})

</script>

<template>
  <h1 class="text-6xl font-bold text-black max-lg:text-5xl max-md:text-4xl max-sm:text-3xl">{{ text }}</h1>
</template>

<style scoped>
</style>
