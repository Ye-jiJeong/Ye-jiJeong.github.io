<script setup>
import { ref } from 'vue'
import TitleH5 from '../components/title_h5.vue'
import Button from '../components/btn.vue'

defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  steps: {
    type: Array,
    required: true
  },
  notices: {
    type: Array,
    default: () => []
  }
})

const isOpen = ref(false)
</script>

<template>
  <div class="w-full">
    <div class="mt-13.5 mb-8">
      <TitleH5 :text="title" />
      <p class="mt-3 text-lg text-black/80">{{ description }}</p>
    </div>

    <ul class="grid gap-2.5 w-full" :class="steps.length === 3 ? 'grid-cols-3' : 'grid-cols-4'">
      <li v-for="(step, index) in steps" :key="index" class="flex flex-col items-center py-10 bg-white border border-slate-100 rounded-2xl text-center">
        <div class="flex items-center justify-center w-22.5 h-20 mb-4">
          <img :src="step.image" :alt="step.title" class="max-h-full object-contain" />
        </div>

        <p class="flex items-center justify-center gap-1.5 text-2xl font-medium text-black">
          <span class="flex items-center justify-center w-6 h-6 bg-blue-600 text-white text-xs font-medium rounded-full">{{ index + 1 }}</span>
          {{ step.title }}
        </p>

        <p class="text-base leading-relaxed whitespace-pre-line mt-2.5 mb-0.75">{{ step.description }}</p>
        
        <p v-if="step.highlight" class="text-sm text-primary">{{ step.highlight }}</p>
      </li>
    </ul>
  </div>

  <div class="bg-slate-600/5 mt-8 rounded-2xl">
    <button @click="isOpen = !isOpen" :class="['w-full flex items-center justify-between py-7 px-13.5 rounded-2xl cursor-pointer transition-all', isOpen ? 'pb-7' : '']">
      <p class="text-2xl flex items-center gap-2"><i class="xi-info-o"></i>유의사항</p>
      <i class="xi-angle-down-min text-2xl font-bold transition-transform duration-300" :class="{ 'rotate-180': isOpen }"></i>
    </button>
    
    <div v-show="isOpen" class="px-13.5 pb-10">
      <ul class="flex flex-col gap-2.5 border-t border-slate-600/10 pt-7">
        <li v-for="(notice, idx) in notices" :key="idx" class="text-lg text-slate-600 flex items-center gap-2">
          <i class="xi-arrow-right text-slate-400 translate-y-[-1.5px]"></i>
          <span class="text-left">{{ notice }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
</style>