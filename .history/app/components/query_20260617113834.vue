<script setup>

import TitleH4 from '../components/title_h4.vue'
import Button from '../components/btn.vue'

const activeFaq = ref(1)

const faqList = ref([
  { id: 1, title: '질문 1입니다.', content: '답변 내용 1입니다.', link: '' },
  { id: 2, title: '질문 2입니다.', content: '답변 내용 2입니다. 답변 내용 2입니다. 답변 내용 2입니다. 답변 내용 2입니다. 답변 내용 2입니다. 답변 내용 2입니다. 답변 내용 2입니다. 답변 내용 2입니다. 답변 내용 2입니다. 답변 내용 2입니다. 답변 내용 2입니다. 답변 내용 2입니다.', link: '' },
  { id: 3, title: '질문 3입니다.', content: '답변 내용 3입니다.', link: '' },
  { id: 4, title: '질문 4입니다.', content: '답변 내용 4입니다.', link: '' }
])

const handleFaqClick = (faq) => {
  if (activeFaq.value === faq.id) {
    if (faq.link) {
      navigateTo(faq.link)
    }
  } else {
    activeFaq.value = faq.id
  }
}
</script>

<template>
  <div class="w-full">
    <div class="flex items-center justify-between mb-0">
      <TitleH4 text="자주하는 질문" />
      <Button text="더보기" class="text-lg font-medium text-black max-md:text-base" />
    </div>

    <div class="flex flex-col w-full gap-2.5">
      <div v-for="faq in faqList" :key="faq.id" :class="['border rounded-lg overflow-hidden bg-white transition-colors', activeFaq === faq.id ? 'border-primary' : 'border-black/25 hover:border-primary']">
        <div @click="handleFaqClick(faq)" :class="['flex justify-between items-center py-3.5 px-5 text-black cursor-pointer', activeFaq === faq.id ? 'text-primary bg-primary/5 border-b border-primary' : 'hover:bg-primary/5']">
          <span class="text-lg font-medium max-md:text-base">{{ faq.title }}</span>
          <span class="text-3xl font-thin leading-none relative -top-[3px] max-md:text-2xl">{{ activeFaq === faq.id ? '−' : '+' }}</span>
        </div>

        <div :class="['grid transition-all duration-300 ease-in-out', activeFaq === faq.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0']">
          <div class="overflow-hidden">
            <div class="py-3.75 px-5 w-full bg-white">
              <p class="text-lg font-medium text-black line-clamp-1 max-sm:line-clamp-3 max-md:text-base">{{ faq.content }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
</style>