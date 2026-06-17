<script setup>
import logo1 from '../img/main/uselogo1.svg'
import logo2 from '../img/main/uselogo2.svg'
import logo3 from '../img/main/uselogo3.svg'
import logo4 from '../img/main/uselogo4.svg'
import logo6 from '../img/main/uselogo6.svg'
import logo7 from '../img/main/uselogo7.svg'
import logo8 from '../img/main/uselogo8.svg'
import logo9 from '../img/main/uselogo9.svg'
import logo10 from '../img/main/uselogo10.svg'
import logo11 from '../img/main/uselogo11.svg'
import logo13 from '../img/main/uselogo13.svg'
import logo14 from '../img/main/uselogo14.svg'
import logo16 from '../img/main/uselogo16.svg'

const isExpanded = ref(false)
const isMobileExpanded = ref(false)
const certList = ref([
  {id:1, name:'조달청 나라장터', logo:logo2}, {id:2, name:'국세청 홈택스', logo:logo1}, {id:3, name:'중소벤처기업진흥공단', logo:logo3}, {id:4, name:'소상공인 정책자금', logo:logo7},
  {id:5, name:'신용·기술 보증기금', logo:logo4}, {id:6, name:'전자계약·은행', logo:logo2}, {id:7, name:'정부24', logo:logo2}, {id:8, name:'한국전력공사', logo:logo6},
  {id:9, name:'은행 및 증권', logo:logo8}, {id:10, name:'위택스', logo:logo9}, {id:11, name:'한국에너지공단', logo:logo10}, {id:12, name:'대한무역투자진흥공사', logo:logo11},
  {id:13, name:'전자계약', logo:logo2}, {id:14, name:'관세청 유니패스', logo:logo13}, {id:15, name:'통합인허가지원', logo:logo14}, {id:16, name:'4대사회보험', logo:logo16}
])
</script>

<template>
  <div class="w-full">
    <!-- PC/태블릿 상단 헤더 영역 (기존 코드 및 펼쳐보기 토글 완벽 유지) -->
    <div class="mb-4 flex items-center justify-center md:justify-between gap-4 text-black opacity-75 max-md:hidden">
      <h5 class="font-semibold text-base sm:text-lg text-black md:text-2xl">모든 용도로 사용 가능한 범용인증서</h5>
      
      <div class="flex items-center gap-2">
        <button @click="navigateTo('')" class="flex max-md:hidden items-center gap-1 cursor-pointer hover:text-primary transition-colors">
          <Icon name="solar:widget-linear" class="text-lg opacity-50" />
          <span class="text-lg font-medium">전체보기</span>
        </button>
        
        <span class="max-md:hidden text-base font-extralight opacity-20">|</span>
        
        <button @click="isExpanded = !isExpanded" class="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
          <span class="max-md:hidden text-lg font-medium">펼쳐보기</span>
          <Icon :name="isExpanded ? 'solar:round-arrow-up-bold' : 'solar:round-arrow-down-bold'" class="text-3xl opacity-100" />
        </button>
      </div>
    </div>

    <!-- PC 및 태블릿 전체 그리드 영역 (기존 렌더링 스펙 및 클래스 100% 동일 보존) -->
    <div class="w-full mt-6.5 max-md:hidden">
      <div class="grid w-full grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-3">
        <div v-for="cert in certList.slice(0, 4)" :key="cert.id" class="flex items-center bg-white rounded-xl py-4.5 px-4 sm:py-6 sm:px-3.5">
          <div class="w-15 flex justify-center items-center"><img :src="cert.logo" class="max-w-full max-h-6.75 object-contain" /></div>
          <span class="text-base sm:text-lg font-medium text-left whitespace-nowrap tracking-tight">{{ cert.name }}</span>
        </div>

        <template v-if="isExpanded">
          <div v-for="cert in certList.slice(4)" :key="cert.id" class="flex items-center bg-white rounded-xl py-4.5 px-4 sm:py-6 sm:px-3.5">
            <div class="w-15 flex justify-center items-center"><img :src="cert.logo" class="max-w-full max-h-6.75 object-contain" /></div>
            <span class="text-base sm:text-lg font-medium text-left whitespace-nowrap tracking-tight">{{ cert.name }}</span>
          </div>
        </template>
      </div>
    </div>

    <!-- 교정: 전체보기 버튼 자리에 max-md 사이즈부터만 시안의 회색박스 구조가 표출되도록 완벽 대응 -->
    <div class="hidden max-md:block w-full bg-[#ebf2f4]/60 p-6 rounded-3xl text-left">
      <h5 class="text-xl font-bold text-slate-900 mb-5 pl-1">범용인증서 인기 활용처</h5>
      
      <div class="flex flex-col gap-3 w-full">
        <!-- 교정: 기본 6개만 깔끔하게 노출하고, 더보기 토글 활성화 시 시안에 선언된 조건 개수(7개)만 정확히 렌더링되도록 슬라이싱 제한 -->
        <div v-for="cert in (isMobileExpanded ? certList.slice(0, 7) : certList.slice(0, 6))" :key="'mo-' + cert.id" class="w-full bg-white rounded-xl py-4 px-4 flex items-center justify-start max-sm:justify-center max-sm:text-center shadow-sm border border-slate-100/50">
          <!-- 교정: max-sm 구간에서만 로고 아이콘을 숨기고, max-md(태블릿) 구간에서는 정상 유지 -->
          <div class="w-15 flex justify-center items-center max-sm:hidden shrink-0 mr-2"><img :src="cert.logo" class="max-w-full max-h-6.75 object-contain" /></div>
          <span class="text-base sm:text-lg font-medium text-slate-800 tracking-tight">{{ cert.name }}</span>
        </div>

        <!-- 시안의 가이드라인에 맞춰 제작된 전용 더보기 토글 버튼 -->
        <button @click="isMobileExpanded = !isMobileExpanded" class="w-full border border-blue-500 bg-white text-blue-600 rounded-xl py-3.5 text-center font-semibold text-base mt-2 transition-colors active:bg-blue-50/50 cursor-pointer">
          {{ isMobileExpanded ? '- 접기' : '+ 더보기' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>