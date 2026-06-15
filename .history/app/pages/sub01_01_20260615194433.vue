<script setup lang="ts">
import support from '../components/application.vue'
import Certificate from '../components/certificate.vue'
import TabApplication from '../components/tab_application.vue'
import Procedure from '../components/procedure.vue'
import IssueReview from '../components/issue_review.vue'
import Frequent from '../components/frequent.vue'

// img
import application from '../img/sub/application1.svg'
import nonfacetoface1 from '../img/sub/nonfacetoface1.svg'
import nonfacetoface2 from '../img/sub/nonfacetoface2.svg'
import nonfacetoface3 from '../img/sub/nonfacetoface3.svg'
import nonfacetoface4 from '../img/sub/nonfacetoface4.svg'

const checkItems = [
  { text: '모든 신청 과정 온라인 진행' },
  { text: '단독 대표자 신청 전용', btnText: '2인 이상 대표·대리인 신청' },
  { text: '평일 9~16시 신청 시 즉시 발급' }
]
const useTabs = ['조달청 나라장터', '국세청 홈택스', '중소벤처기업진흥공단', '소상공인 정책자금', '신용보증기금', '전자계약·은행']

const procedureTitle = '발급 진행 절차'
const procedureDescription = '비대면 온라인 신청부터 발급까지의 과정을 안내해드립니다.'

const procedureSteps = [
  {
    image: nonfacetoface1,
    title: '신청서 작성',
    description: '대표자 휴대폰으로\n본인인증 진행 후 정보 입력',
    highlight: '대표자 명의 핸드폰 필수'
  },
  {
    image: nonfacetoface2,
    title: '신분증 및 계좌인증',
    description: '대표자 신분증 인증 후\n계좌로 발송된 승인코드 입력',
    highlight: '법인 : 얼굴 인증 추가 진행'
  },
  {
    image: nonfacetoface3,
    title: '온라인 서류 제출',
    description: '사업장별 제출 서류 발급 후\n전자지갑으로 제출',
    highlight: '7일 이내 발급 분'
  },
  {
    image: nonfacetoface4,
    title: '인증서 발급',
    description: '승인 후 카카오톡/이메일로\n발송된 승인번호로 인증서 발급',
    highlight: '결제 완료 후 1시간 내 승인'
  }
]

const procedureNotices = [
  '예시문구 입니다.',
  '예시문구 입니다.'
]
</script>

<template>
  <section :class="$attrs.class" class="bg-gradient-to-b from-[#ebf2f4] to-white pt-10 max-lg:pt-8 max-md:pt-6 pb-16 max-lg:pb-12 max-md:pb-8">
    <div class="w-full max-w-[1140px] mx-auto px-8 max-lg:px-6 max-md:px-4">
      <support
        badgeText="누적 발급 80만 건"
        timeText="10분 발급"
        badgeClass="bg-slate-600/10 text-black"
        titleLine1="사업자 공동인증서"
        titleLine2="비대면 온라인"
        titleClass="text-success"
        :checkList="checkItems"
        :imgUrl="application"
        :useList="useTabs"
        visualBadgeText="BEST"
        tabClass="px-4.5"
      >
      </support>

      <Certificate />
    </div>
  </section>

  <section class="w-full max-w-[1140px] mx-auto mt-25 max-lg:mt-16 max-md:mt-12 px-8 max-lg:px-6 max-md:px-4">
    <TabApplication>
      <template #tab1>
        <Procedure 
          :title="procedureTitle" 
          :description="procedureDescription" 
          :steps="procedureSteps" 
          :notices="procedureNotices" 
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