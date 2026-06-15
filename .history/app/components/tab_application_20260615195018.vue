<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import Tab from './tab.vue'

const tabs = ['발급 진행 절차', '실제 발급·사용 후기', '자주 묻는 질문(FAQ)']
const currentTab = ref(0)
const sectionRefs = ref([])
let observer = null
let isClickScroll = false
let scrollTimeout = null

const handleTabClick = (index) => {
  isClickScroll = true
  currentTab.value = index

  const targetElement = sectionRefs.value[index]
  if (targetElement) {
    const y = targetElement.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(() => {
    isClickScroll = false
  }, 1000)
}

onMounted(() => {
  const options = {
    rootMargin: '-30% 0px -70% 0px',
    threshold: 0
  }

  observer = new IntersectionObserver((entries) => {
    if (isClickScroll) return

    const intersectingEntry = entries.find(entry => entry.isIntersecting)
    if (intersectingEntry) {
      const index = sectionRefs.value.findIndex(ref => ref === intersectingEntry.target)
      if (index > -1) {
        currentTab.value = index
      }
    }
  }, options)

  nextTick(() => {
    sectionRefs.value.forEach(section => {
      if (section) observer.observe(section)
    })
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
  clearTimeout(scrollTimeout)
})
</script>

<template>
  <div class="sticky top-0 pt-5 max-md:pt-3 z-20 py-2 bg-white w-full">
    <Tab :tabs="tabs" :modelValue="currentTab" @update:modelValue="handleTabClick" />
  </div>

  <div class="mt-10 max-lg:mt-8 max-md:mt-6 w-full flex flex-col gap-25 max-lg:gap-16 max-md:gap-10">
    <div :ref="el => sectionRefs[0] = el"><slot name="tab1" /></div>
    <div :ref="el => sectionRefs[1] = el"><slot name="tab2" /></div>
    <div :ref="el => sectionRefs[2] = el"><slot name="tab3" /></div>
  </div>
</template>


<style scoped>
</style>