<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'

const props = defineProps({
  tabs: {
    type: Array,
    required: true
  },
  modelValue: {
    type: Number,
    default: 0
  }
})
const emit = defineEmits(['update:modelValue'])

const tabRefs = ref([])
const indicatorStyle = ref({ opacity: 0 })

const updateIndicator = () => {
  const activeTab = tabRefs.value[props.modelValue]
  if (activeTab) {
    indicatorStyle.value = {
      left: `${activeTab.offsetLeft}px`,
      top: `${activeTab.offsetTop}px`,
      width: `${activeTab.offsetWidth}px`,
      height: `${activeTab.offsetHeight}px`,
      opacity: 1
    }
  }
}

onMounted(() => {
  nextTick(updateIndicator)
  window.addEventListener('resize', updateIndicator)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIndicator)
})

watch(() => props.modelValue, () => {
  nextTick(updateIndicator)
})
</script>

<template>
  <div class="max-w-189.75 m-auto overflow-x-auto scrollbar-hide">
    <ul class="relative isolate z-0 flex items-center gap-2.5 max-md:gap-1.5 p-4 max-md:p-2 bg-slate-100 rounded-full min-w-max">
      <div class="absolute -z-10 rounded-full bg-blue-600 transition-all duration-300 ease-in-out" :style="indicatorStyle"></div>
      <li v-for="(tab, idx) in tabs" :key="idx" :ref="(el) => { if (el) tabRefs[idx] = el }" class="flex-1">
        <button @click="emit('update:modelValue', idx)" :class="['w-full py-4 px-3 max-lg:py-3 max-md:py-2.5 max-md:px-4 text-lg max-lg:text-base max-md:text-sm font-medium rounded-full cursor-pointer transition-colors duration-300 whitespace-nowrap', modelValue === idx ? 'text-white' : 'text-slate-600 hover:bg-slate-200']">{{ tab }}</button>
      </li>
    </ul>
  </div>
</template>


<style scoped>
</style>