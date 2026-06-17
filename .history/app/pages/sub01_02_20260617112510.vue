<script setup lang="ts">
import support from '../components/application.vue'
import Certificate from '../components/certificate.vue'
import TabApplication from '../components/tab_application.vue'
import Procedure from '../components/procedure.vue'
import IssueReview from '../components/issue_review.vue'
import Frequent from '../components/frequent.vue'

// img
import application from '../img/sub/application2.svg'
import nonfacetoface1 from '../img/sub/nonfacetoface1.svg'
import nonfacetoface2 from '../img/sub/nonfacetoface2-1.svg'
import nonfacetoface3 from '../img/sub/nonfacetoface3.svg'

const checkItems = [
  { text: '가까운 발급기관에 방문하여 서류 제출' },
  { text: '전국 77개 발급기관 운영', btnText: '발급기관 위치 확인' },
  { text: '평일 9~17시 신청 시 즉시 발급' }
]
const useTabs = ['조달청 나라장터', '국세청 홈택스', '중소벤처기업진흥공단', '소상공인 정책자금', '신용·기술 보증기금', '전자계약·은행']

const procedureTitle = '발급 진행 절차'
const procedureDescription = '발급기관 직접 방문 서비스의 신청부터 발급까지의 과정을 안내해드립니다.'

const procedureSteps = [
  {
    image: nonfacetoface1,
    title: '온라인 신청',
    description: 'PC/모바일에서\n신청서 작성 및 요금결제',
    highlight: '사업자등록증과 동일하게 작성'
  },
  {
    image: nonfacetoface2,
    title: '발급기관 방문 및 확인',
    description: '직접 발급기관에 방문하여\n신분증 확인 및 서류 제출',
    highlight: '전국 발급기관 위치 조회'
  },
  {
    image: nonfacetoface3,
    title: '발급 안내장 수령',
    description: '발급 코드를 확인하고\nPC에서 인증서 발급',
    highlight: '수령 후 즉시 발급 가능'
  }
]
</script>

<template>
  <section :class="$attrs.class" class="bg-gradient-to-b from-[#ebf2f4] to-white">
    <div class="w-full max-w-[1140px] mx-auto px-8 max-lg:px-6 max-md:px-4">
      <support
        badgeText="누적 발급 80만 건"
        timeText="빠른 발급"
        badgeClass="bg-primary/10 text-primary"
        titleLine1="사업자 공동인증서"
        titleLine2="발급기관 직접 방문"
        titleClass="text-primary"
        :checkList="checkItems"
        :imgUrl="application"
        :useList="useTabs"
        tabClass="px-3.75"
      >
      </support>

      <Certificate />
    </div>
  </section>

  <section class="w-full max-w-[1140px] mx-auto mt-25 px-8 max-lg:px-6 max-md:px-4">
    <TabApplication>
      <template #tab1>
        <Procedure 
          :title="procedureTitle" 
          :description="procedureDescription" 
          :steps="procedureSteps" 
        />
      </template>

      <template #tab2>
        <IssueReview />
      </template>

      <template #tab3>
        <Frequent />
      </template>
    </TabApplication>
  </section>
</template>

<style scoped>
</style>