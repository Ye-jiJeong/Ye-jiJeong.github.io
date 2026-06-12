<script setup>
import { ref, computed } from 'vue';
import { ChevronRight, Search } from 'lucide-vue-next';

import Tab from '../components/tab.vue'
import TitleH5 from '../components/title_h5.vue'

const props = defineProps({
  postList: {
    type: Array,
    default: () => []
  }
});

const tabs = ['전체', '정부 정책 소식', '사업자 도우미', '인증서 사용처 소식', '고객 이벤트']
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

const visiblePosts = computed(() => {
  return props.postList.slice(0, 9);
});
</script>



<template>
  <div class="mb-18.25">
    <div class="flex flex-col items-end gap-6 mb-21 mt-10.5">
      <div class="relative w-80 border-b border-slate-300 pb-1.5 focus-within:border-slate-900 transition-colors">
        <input type="text" placeholder="검색어를 입력해주세요." class="w-full text-lg text-slate-900 placeholder-slate-400 outline-none pr-8 bg-transparent" />
        <Search class="absolute right-0 bottom-1.5 w-5 h-5 text-slate-900 cursor-pointer" />
      </div>

      <div class="w-full sticky mt-8 z-20 py-2">
        <Tab :tabs="tabs" :modelValue="currentTab" @update:modelValue="handleTabClick" />
      </div>
    </div>

    <div class="grid grid-cols-3 gap-x-7.5 gap-y-21">
      <article v-for="(post, index) in visiblePosts" :key="index" class="group cursor-pointer">
        <div class="aspect-[16/10] rounded-3xl overflow-hidden mb-5 relative bg-slate-100">
          <img :src="post.thumbnail" :alt="post.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>

        <div class="flex flex-col mt-13.5">
          <TitleH5 :text="post.title" class="line-clamp-1" />
          <p class="text-lg ine-clamp-1 pt-4 mt-4 border-t border-slate-200">{{ post.summary }}</p>
          <p class="text-base text-slate-600/40 mt-4">{{ post.date }}</p>
        </div>
      </article>
    </div>
  </div>
</template>


<style scoped>
</style>