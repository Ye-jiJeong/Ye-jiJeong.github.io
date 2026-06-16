<script setup>
import { ref } from 'vue'
import TitleH5 from '../components/title_h5.vue'
import Button from '../components/btn.vue'

// img
import Question from '../img/sub/question.svg'

import { ChevronRight, ChevronDown } from 'lucide-vue-next';

const faqList = ref([
  {question: '인증서를 발급하려면 반드시 대면확인을 해야하나요?', answer: '네, 대면 확인이 필수적입니다.', isOpen: false},
  {id:2, question: '인증서 1개로 여러 사업자번호에서 사용할 수 있나요?', answer: '아니요, 사업자번호당 하나의 인증서가 발급됩니다.', isOpen: false},
  {id:3, question: '신청서 작성 후, 결제 및 신청서 출력을 하지 않고 창을 닫았습니다. 결제와 출력은 어디서 할 수 있나요?', answer: '마이페이지 내 신청 내역 조회에서 재진행이 가능합니다.', isOpen: false},
  {id:4, question: '발급기관 직접방문(당일발급)으로 인증서를 신청할 경우 꼭 신청날짜에 방문해야 하나요?', answer: '예약된 날짜 외에 방문 시 처리가 지연될 수 있습니다.', isOpen: false},
  {id:5, question: '사업자등록증에 상호가 없는 경우 어떻게 작성해야 하나요?', answer: '등록증 상의 공란 또는 대표자명을 기준으로 수동 기입합니다.', isOpen: false},
  {question: '인증서 1개로 여러 사업자번호에서 사용할 수 있나요?', answer: '아니요, 사업자번호당 하나의 인증서가 발급됩니다.', isOpen: false},
  {question: '신청서 작성 후, 결제 및 신청서 출력을 하지 않고 창을 닫았습니다. 결제와 출력은 어디서 할 수 있나요?', answer: '마이페이지 내 신청 내역 조회에서 재진행이 가능합니다.', isOpen: false},
  {question: '발급기관 직접방문(당일발급)으로 인증서를 신청할 경우 꼭 신청날짜에 방문해야 하나요?', answer: '예약된 날짜 외에 방문 시 처리가 지연될 수 있습니다.', isOpen: false},
  {question: '사업자등록증에 상호가 없는 경우 어떻게 작성해야 하나요?', answer: '등록증 상의 공란 또는 대표자명을 기준으로 수동 기입합니다.', isOpen: false}
]);

const toggleTarget = (index) => {
  faqList.value.forEach((item, i) => {
    if (i === index) {
      item.isOpen = !item.isOpen;
    } else {
      item.isOpen = false;
    }
  });
};
</script>

<template>
  <div class="">
    <div class="flex items-center justify-between mb-13.5 max-sm:mb-3">
      <div>
        <TitleH5 text="자주 하는 질문(FAQ)" />
        <p class="mt-3 text-lg text-black/80 max-sm:hidden">
          <span class="max-md:hidden">인증서 발급과 관련하여 </span>고객님들이 가장 많이 질문하시는 문의&답변입니다.
        </p>
        <p class="mt-3 text-lg text-black/80 max-sm:hidden w-full md:w-80">인증서 발급과 관련하여 고객님들이 가장 많이 질문하시는 문의&답변입니다.</p>
      </div>

      <Button text="자주하는 질문 전체 보기" class="bg-primary text-white py-4 px-6 max-sm:hidden" />
      <Button text="더보기" class="bg-white text-black py-2 px-4 sm:hidden whitespace-nowrap" />
    </div>

    <div class="flex flex-col gap-4">
      <div v-for="(item, index) in faqList" :key="index" :class="['border border-primary rounded-2xl py-6 px-8 transition-colors duration-300', item.isOpen ? 'bg-primary/3' : 'hover:bg-primary/3']">
        <div v-for="(item, index) in faqList" :key="index" :class="['border border-slate-200 rounded-2xl py-6 px-8 transition-colors duration-300', item.isOpen ? 'bg-primary/5 border-primary' : 'hover:bg-primary/5 hover:border-primary']">
          <button class="w-full flex justify-between items-center text-left" @click="toggleTarget(index)">
            <div class="flex items-center gap-4">
              <img :src="Question" alt="Q" />
              <span class="text-xl">{{ item.question }}</span>
            </div>
            <i :class="['xi-angle-down text-2xl text-primary transition-transform duration-300', item.isOpen ? 'rotate-180' : '']"></i>
          </button>

          <div :class="['grid transition-all duration-300 ease-in-out', item.isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]']">
            <div class="overflow-hidden">
              <div class="mt-6 pt-8 pb-2.5 border-t border-slate-200 text-xl">
                {{ item.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
</style>