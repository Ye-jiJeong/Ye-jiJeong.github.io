<script setup lang="ts">
import { ref } from 'vue'
import Board from '../components/image_board.vue'
import TitleH3 from '../components/title_h3.vue'
import Button from '../components/btn.vue'
import Navigation from '../components/navigation_bar.vue'

// img
import Information1 from '../img/main/information1.svg'
import Information2 from '../img/main/information2.svg'
import Information3 from '../img/main/information3.svg'

const postList = ref([
  {title: '2024년 6월 한정 인증서, 기업평가 text text text text', summary: '한국사업자인증에서 한번에 신청가능한 사업자...', date: '2024-05-29', thumbnail: Information1, link: ''},
  {title: '[이벤트] 2024년 6월 인증서 활용 후 text text text text text text text text', summary: '2024년 6월 인증서 활용 후기 설문조사이벤트', date: '2024-05-29', thumbnail: Information2, link: ''},
  {title: '나라장터, 홈텍스 계산서 인증서', summary: '전자세금계산서, 4대보험, 전자입찰, 은행, 홈택...', date: '2024-05-29', thumbnail: Information3, link: ''},
  {title: '중소기업 정책자금 맞춤형 지원 안내', summary: '정책자금 신청 및 심사 기준 가이드라인 공유', date: '2024-05-28', thumbnail: Information1, link: ''},
  {title: '신규 창업자를 위한 종합 세무 가이드', summary: '부가가치세 및 종합소득세 절세 팁 완벽 정리', date: '2024-05-28', thumbnail: Information2, link: ''},
  {title: '공공입찰 참여를 위한 필수 서류 점검', summary: '적격심사 서류 보완 및 사전 등록 절차 안내', date: '2024-05-28', thumbnail: Information3, link: ''},
  {title: '사업자 맞춤형 고용지원금 제도 요약', summary: '청년 채용 및 정규직 전환 지원금 혜택 정보', date: '2024-05-27', thumbnail: Information1, link: ''},
  {title: '하반기 기업 신용평가 등급 관리 전략', summary: '재무제표 개선 및 신용도 향상을 위한 핵심 조치', date: '2024-05-27', thumbnail: Information2, link: ''},
  {title: '소상공인 디지털 전환 지원 사업 공고', summary: '스마트 상점 구축 및 온라인 판로 개척 지원금', date: '2024-05-27', thumbnail: Information3, link: ''}
]);
</script>

<template>
  <div class="w-full max-w-[1140px] mx-auto">
    <div class="text-center mb-10.5">
      <TitleH3 text="사업자 정보 마당" />
      <div class="mt-8 mx-auto w-fit flex items-center justify-center gap-2.5 bg-primary/5 py-4 px-13.5 rounded-xl text-xl text-black">
        <p>복잡한 정책부터 필수 정보까지, 사업 운영에 필요한 소식을 전해드립니다.</p>

        <Button text="뉴스레터 구독신청" class="text-primary text-base" iconClass="translate-y-[-1px]" />
      </div>
    </div>

    <Board :postList="postList" />

    <Navigation class="mb-32" />
  </div>
</template>

<style scoped>
</style>