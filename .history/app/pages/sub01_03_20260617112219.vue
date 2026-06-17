<script setup lang="ts">
import support from '../components/application.vue'
import Certificate from '../components/certificate.vue'
import TabApplication from '../components/tab_application.vue'
import Procedure from '../components/procedure.vue'
import IssueReview from '../components/issue_review.vue'
import Frequent from '../components/frequent.vue'

// img
import application from '../img/sub/application3.svg'
import nonfacetoface1 from '../img/sub/nonfacetoface1.svg'
import nonfacetoface2 from '../img/sub/nonfacetoface2.svg'
import nonfacetoface3 from '../img/sub/nonfacetoface3.svg'

const checkItems = [
  { text: '찾아온 우체부에게 서류 제출' },
  { text: '방문 희망 장소 및 날짜 직접 선택' },
  { text: '신청 기준 2~3일 내 발급' }
]
const useTabs = ['조달청 나라장터', '국세청 홈택스', '중소벤처기업진흥공단', '소상공인 정책자금', '신용·기술 보증기금', '전자계약·은행']

const procedureTitle = '발급 진행 절차'
const procedureDescription = '우체부 방문 예약 신청부터 발급까지의 과정을 안내해드립니다.'

const procedureSteps = [
  {
    image: nonfacetoface1,
    title: '온라인 신청',
    description: 'PC/모바일에서\n신청서 작성 및 요금결제',
    highlight: '사업자등록증과 동일하게 작성'
  },
  {
    image: nonfacetoface2,
    title: '우체부 방문 및 확인',
    description: '방문한 우체부를 만나서\n신분증 확인 및 서류 제출',
    btnText: '등기 번호 조회',
    link: ''
  },
  {
    image: nonfacetoface3,
    title: '발급 안내장 수령',
    description: '발급 코드를 확인하고\nPC에서 인증서 발급',
    highlight: '수령 후 즉시 발급 가능'
  }
]

const procedureNotices = [
  '비대면 서비스는 **단독(1인) 대표자 사업장만 신청 가능**하며, 원활한 신청을 위해 PC에서 진행해 주시기 바랍니다.',
  '주말 및 공휴일은 신청/결제만 가능하며, 인증서 발급은 다음 영업일에 가능합니다.',
  '신청서 작성 중 화면을 잘못 종료된 경우, 이어서 신청 하시기 바랍니다. [[신청 이어하기]]',
  '서류는 신청일 포함 **7일 이내 발급분**을 전자문서지갑으로 제출해야 합니다.',
  '신청서와 서류 정보 불일치(사업자번호, 성명 등) 시 발급이 지연되며, 반드시 서류를 재업로드해야 합니다.',
  '서류 심사 과정에서 반려 사유 발생 시 입력하신 휴대폰으로 알림톡이 발송됩니다. **(문의 사항 : 1577-7337)**',
  '신청 후, 서류 심사가 완료되면 인증서 발급 정보가 발송됩니다. (이메일 : 인가코드 / 휴대폰 : 참조번호)'
]
</script>

<template>
  <section :class="$attrs.class" class="bg-gradient-to-b from-[#ebf2f4] to-white">
    <div class="w-full max-w-[1140px] mx-auto px-8 max-lg:px-6 max-md:px-4">
      <support
        badgeText="누적 발급 80만 건"
        timeText="예약 발급"
        badgeClass="bg-error/10 text-error"
        titleLine1="사업자 공동인증서"
        titleLine2="우체부 방문 예약"
        titleClass="text-error"
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