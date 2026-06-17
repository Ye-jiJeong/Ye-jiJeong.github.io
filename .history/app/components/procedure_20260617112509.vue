<script setup lang="ts">
import { ref } from 'vue'
import TitleH5 from '../components/title_h5.vue'
import Button from '../components/btn.vue'

defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  steps: {
    type: Array,
    required: true
  }
})

const isOpen = ref(false)

const notices = [
  '비대면 서비스는 **단독(1인) 대표자 사업장만 신청 가능**하며, 원활한 신청을 위해 PC에서 진행해 주시기 바랍니다.',
  '주말 및 공휴일은 신청/결제만 가능하며, 인증서 발급은 다음 영업일에 가능합니다.',
  '신청서 작성 중 화면을 잘못 종료된 경우, 이어서 신청 하시기 바랍니다. [[신청 이어하기]]',
  '서류는 신청일 포함 **7일 이내 발급분**을 전자문서지갑으로 제출해야 합니다.',
  '신청서와 서류 정보 불일치(사업자번호, 성명 등) 시 발급이 지연되며, 반드시 서류를 재업로드해야 합니다.',
  '서류 심사 과정에서 반려 사유 발생 시 입력하신 휴대폰으로 알림톡이 발송됩니다. **(문의 사항 : 1577-7337)**',
  '신청 후, 서류 심사가 완료되면 인증서 발급 정보가 발송됩니다. (이메일 : 인가코드 / 휴대폰 : 참조번호)'
]

// 부모에게서 받은 가공되지 않은 텍스트 문장을 정규식을 이용해 토큰 배열로 쪼개는 함수
const parseNotice = (text: string) => {
  // **굵은글씨** 스타일과 [[버튼텍스트]] 스타일을 찾아내기 위한 정규식
  const regex = /(\*\*.*?\*\*|\[\[.*?\]\])/g
  const parts = text.split(regex)
  
  return parts.map(part => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return { type: 'strong', value: part.slice(2, -2) }
    } else if (part.startsWith('[[') && part.endsWith(']]')) {
      return { type: 'button', value: part.slice(2, -2) }
    }
    return { type: 'text', value: part }
  })
}
</script>

<template>
  <div class="w-full">
    <div class="mt-13.5 mb-8 max-md:mt-8">
      <TitleH5 :text="title" />
      <p class="mt-3 text-lg text-black/80">{{ description }}</p>
    </div>

    <ul class="grid gap-2.5 w-full max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-5" :class="steps.length === 3 ? 'grid-cols-3' : 'grid-cols-4'">
      <li v-for="(step, index) in steps" :key="index" class="flex flex-col items-center py-10 bg-white border border-slate-100 rounded-2xl text-center">
        <div class="flex items-center justify-center w-22.5 h-20 mb-4">
          <img :src="step.image" :alt="step.title" class="max-h-full object-contain" />
        </div>

        <p class="flex items-center justify-center gap-1.5 text-2xl font-medium text-black max-md:text-xl max-sm:text-lg">
          <span class="flex items-center justify-center w-6 h-6 bg-blue-600 text-white text-xs font-medium rounded-full max-md:w-5 max-md:h-5">{{ index + 1 }}</span>
          {{ step.title }}
        </p>

        <p class="text-base leading-relaxed whitespace-pre-line mt-2.5 mb-0.75">{{ step.description }}</p>
        
        <p v-if="step.highlight" class="text-sm text-primary">{{ step.highlight }}</p>
      </li>
    </ul>
  </div>

  <div class="bg-slate-600/5 mt-8 rounded-2xl">
    <button @click="isOpen = !isOpen" :class="['w-full flex items-center justify-between py-7 px-13.5 max-sm:px-6 rounded-2xl cursor-pointer transition-all', isOpen ? 'pb-7' : '']">
      <p class="text-2xl flex items-center gap-2 max-md:text-xl max-sm:text-lg"><i class="xi-info-o"></i>유의사항</p>
      <i class="xi-angle-down-min text-2xl font-bold transition-transform duration-300 max-md:text-xl max-sm:text-lg" :class="{ 'rotate-180': isOpen }"></i>
    </button>
    
    <div v-show="isOpen" class="px-13.5 pb-10">
      <ul class="flex flex-col gap-3.5 border-t border-slate-600/10 pt-7 text-left">
        <li v-for="(notice, idx) in notices" :key="idx" class="text-lg text-slate-600 flex items-start gap-2 max-md:text-base">
          <Icon name="tabler:point-filled" class="text-slate-400 flex-shrink-0 mt-1.5" />
          
          <span class="leading-relaxed w-full">
            <!-- 부모가 보낸 문장을 실시간 파싱하여 조각 단위로 올바른 태그 매핑 처리 -->
            <template v-for="(token, tokenIdx) in parseNotice(notice)" :key="tokenIdx">
              <strong v-if="token.type === 'strong'" class="text-black font-bold">{{ token.value }}</strong>
              <Button v-else-if="token.type === 'button'" :text="token.value" class="!inline-flex !p-0 !bg-transparent !text-primary hover:underline font-medium text-lg max-md:text-base ml-1" />
              <template v-else>{{ token.value }}</template>
            </template>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
</style>