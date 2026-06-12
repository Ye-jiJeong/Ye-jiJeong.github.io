<script setup lang="ts">
import Quick from '../components/quick.vue'
</script>

<template>
  <!-- 반응형 레이아웃  : container -->
  <div>
    <header class="bg-blue-950">
      <div class="w-full max-w-[1140px] mx-auto px-8 max-lg:px-6 max-md:px-4 py-4">
        <TheHeader class="text-white"/>
      </div>
    </header>
    <main class="w-full">
      <NuxtPage class="pt-21.25" />
      <slot />
      
      <Quick />
    </main>
    <footer class="bg-[#EBF2F4] mt-8.75">
      <div class="w-full max-w-[1140px] mx-auto py-17.5 px-8 max-lg:py-14 max-lg:px-6 max-md:py-10 max-md:px-4">
        <TheFooter class="text-black/55"/>
      </div>
    </footer>
  </div>
</template>

<style scoped>

</style>