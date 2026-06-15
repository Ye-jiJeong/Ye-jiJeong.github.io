<script setup>
defineProps({
  text: String,
})

</script>

<template>
  <p class="text-base text-black/70 font-medium mt-5 max-lg:text-lg max-md:text-base max-sm:text-15">{{ text }}</p>
</template>

<style scoped>
</style>
