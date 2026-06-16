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

const listRef = ref(null)
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

    // 추가: 선택된 탭이 스크롤 영역의 정중앙에 위치하도록 계산하여 스크롤 이동
    const container = listRef.value
    if (container) {
      const containerWidth = container.offsetWidth
      const tabOffsetLeft = activeTab.offsetLeft
      const tabWidth = activeTab.offsetWidth

      // 중앙 배치를 위한 계산 식: (탭의 시작 위치 + 탭 너비의 절반) - 컨테이너 너비의 절반
      const scrollLeft = tabOffsetLeft + tabWidth / 2 - containerWidth / 2

      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      })
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
  <div class="max-w-189.75 m-auto max-sm:max-w-full max-sm:w-full">
    <div class="bg-slate-100 p-4 rounded-full max-sm:p-2.5 max-sm:w-full max-sm:overflow-hidden">
      
      <ul ref="listRef" class="relative isolate z-0 flex items-center gap-2.5 max-sm:overflow-x-auto max-sm:whitespace-nowrap max-sm:px-3 scrollbar-hide">
        
        <div class="absolute -z-10 rounded-full bg-blue-600 transition-all duration-300 ease-in-out" :style="indicatorStyle"></div>
        
        <li v-for="(tab, idx) in tabs" :key="idx" :ref="(el) => { if (el) tabRefs[idx] = el }" class="flex-1 max-sm:flex-none">
          <button @click="emit('update:modelValue', idx)" :class="['w-full py-4 px-3 text-lg font-medium rounded-full cursor-pointer transition-colors duration-300 max-md:text-base max-sm:w-auto max-sm:whitespace-nowrap max-sm:py-3.5 max-sm:px-6', modelValue === idx ? 'text-white' : 'text-slate-600 hover:bg-slate-200']">{{ tab }}</button>
        </li>
        
      </ul>

    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>