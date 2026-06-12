<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: '진행률'
  },
  percentage: {
    type: Number,
    default: 70
  },
  barClass: {
    type: String,
    default: 'bg-primary'
  },
  textClass: {
    type: String,
    default: 'text-primary/95'
  }
});

</script>


<template>
  <div class="flex items-center gap-2">
    <span :class="['w-16 shrink-0 text-base', textClass]">{{ label }}</span>
    <div class="w-full rounded-full bg-primary/5 h-3.5">
      <div :class="['rounded-full h-3.5 transition-all duration-500 ease-out', barClass]" :style="{ width: `${percentage}%` }"></div>
    </div>
    <span :class="['w-12 shrink-0 text-sm font-extrabold text-right', textClass]">{{ percentage }}%</span>
  </div>
</template>


<style scoped>
</style>