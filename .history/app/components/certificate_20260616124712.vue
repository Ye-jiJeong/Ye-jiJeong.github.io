<script setup lang="ts">
import TitleH4 from '../components/title_h4.vue'
import Button from '../components/btn.vue'

import TitleH5 from '../components/title_h5.vue'

// img
import FrequentIcon1 from '../img/sub/frequent_icon1.svg'
import FrequentIcon2 from '../img/sub/frequent_icon2.svg'

const certificatePlans = [
  { id: 1, link: '', title: '3년 사업자 범용', badge: 'BEST', borderColor: 'border-primary', bgColor: 'bg-primary', textColor: 'text-primary', spinColor: 'text-blue-800', features: ['조건 없이 40% 최대 할인', '3년동안 갱신 무제한 사용'], priceInfo: [{ label: '정상가', value: '300,000원', isOriginal: true }, { label: '할인액', value: '-120,000원', isDiscount: true }, { label: '최종 혜택가', subLabel: 'VAT별도', value: '180,000원', isFinal: true }], btnText: '3년형 온라인 신청하기' },
  { id: 2, link: '', title: '1년 사업자 범용', badge: null, borderColor: 'border-indigo-600', bgColor: 'bg-indigo-600', textColor: 'text-indigo-600', spinColor: 'text-indigo-900', features: ['누구나 20% 기본 할인', '1년씩 필요한 만큼 알뜰하게 사용'], priceInfo: [{ label: '정상가', value: '100,000원', isOriginal: true }, { label: '할인액', value: '-20,000원', isDiscount: true }, { label: '최종 혜택가', subLabel: 'VAT별도', value: '80,000원', isFinal: true }], btnText: '1년형 온라인 신청하기' }
]
const quickMenuTabs = ['신청 가이드', '사업자별 제출서류', '발급 소요 시간', '발급 진행 절차']
const actionCards = [
  { id: 1, icon: FrequentIcon1, title: '신청 이어서 진행', desc: '작성 중이던 신청 화면을 종료한 경우' },
  { id: 2, icon: FrequentIcon2, title: '인증서 발급', desc: '신청 완료 후 발급 코드를 받은 경우' }
]
</script>

<template>
  <div class="mt-24">
    <div class="flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-3">
      <TitleH4 text="인증서 사용기간" />
      <p class="text-base text-primary flex items-center gap-2"><i class="xi-help-o"></i>서류 승인 완료 후, 카카오톡/이메일로 발급 코드 전송</p>
    </div>
    
    <div class="mt-7.5 flex justify-between gap-5 max-lg:flex-col">
      <a :href="plan.link" v-for="plan in certificatePlans" :key="plan.id" :class="['group relative block border-2 rounded-2xl w-full p-7.5 pt-10 bg-white', plan.borderColor, hover.bgColor]">
        
        <div class="flex items-stretch justify-between mb-3.75">
          <TitleH4 :text="plan.title" />
          <span v-if="plan.badge" class="bg-warning flex items-center px-3 rounded-lg font-medium text-base">{{ plan.badge }}</span>
        </div>

        <ul class="flex flex-col gap-1 border-b border-gray-200 pb-4.5">
          <li v-for="(item, idx) in plan.features" :key="idx" :class="['flex items-center gap-2 text-xl text-gray-700', idx === 0 ? `font-bold ${plan.textColor}` : 'font-medium']">
            <Icon name="lucide:check" :class="plan.textColor" /> {{ item }}
          </li>
        </ul>

        <div class="mt-4.5 mb-6 flex flex-col gap-2">
          <div v-for="(price, pIdx) in plan.priceInfo" :key="pIdx" :class="['flex justify-between', price.isFinal ? 'items-start text-slate-900/70 mt-2' : 'items-center', price.isDiscount ? plan.textColor : '', price.isOriginal ? 'text-slate-900/30' : '']">
            <span>{{ price.label }}</span>
            <span v-if="!price.isFinal">{{ price.value }}</span>
            <div v-else class="flex items-end">
              <span class="text-slate-900/30 text-sm mr-1.25 mb-1.5">{{ price.subLabel }}</span>
              <strong class="text-black text-4xl">{{ price.value }}</strong>
            </div>
          </div>
        </div>

        <Button :text="plan.btnText" hideArrow :class="['text-white w-full py-5 text-xl font-medium mt-7.5', plan.bgColor]" />
      </a>
    </div>
  </div>

  <div class="mt-7.5 bg-slate-50 rounded-2xl p-7.5" >
    <TitleH5 text="자주 사용하는 기능" />

    <div class="flex items-end justify-between gap-5 mt-4 max-lg:flex-wrap">
      <div v-for="(tab, idx) in quickMenuTabs" :key="idx" class="relative w-62 max-lg:w-[calc(50%-10px)] max-sm:w-full">
        <div v-if="idx === 1" class="absolute -top-8 -right-3 whitespace-nowrap bg-slate-600 text-white text-sm font-normal py-2.75 px-3.75 rounded-full flex items-center gap-1.25 z-10">
          <i class="xi-info-o text-lg text-yellow-100"></i> 필수 확인 사항
          <span class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-600"></span>
        </div>

        <Button :text="tab" hideArrow class="bg-white hover:bg-primary/10 text-black !text-base py-6 px-15 rounded-md w-full !justify-start text-left" />
      </div>
    </div>

    <div class="mt-5 flex gap-5 max-md:flex-col">
      <button type="button" v-for="card in actionCards" :key="card.id" class="group text-left w-full cursor-pointer">
        <div class="flex items-center gap-5 text-base bg-white group-hover:bg-primary/10 pl-10 transition-colors rounded-xl p-6">
          <img :src="card.icon" alt="" />
          <div>
            <p class="mb-0.2">{{ card.title }}</p>
            <p class="text-slate-500">{{ card.desc }}</p>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>