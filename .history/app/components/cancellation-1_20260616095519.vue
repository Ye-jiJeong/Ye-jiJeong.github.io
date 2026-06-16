<script setup lang="ts">
import { ref } from 'vue'
import TitleH4 from '../components/title_h4.vue'
import TabNewsletter from '../components/tab_newsletter.vue'

// img
import Subscription3 from '../img/sub/subscription_3.svg'

defineEmits(['nextStep', 'changeTab'])
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <TitleH4 text="사업자 뉴스레터 구독" />

    <TabNewsletter selectedTab="unsubscribe" @changeTab="$emit('changeTab', $event)" />

    <div class="flex flex-col items-center mb-8.25 gap-1">
      <div class="w-32 h-32 bg-[#F5CDCD] rounded-full p-6 mb-6 mb-4 flex justify-center items-center">
        <img :src="Subscription3" alt="구독 취소 icon" class="w-full h-full object-contain" />
      </div>
      <p class="text-base text-black/70 text-center leading-relaxed">구독을 신청했던 이메일 주소를 입력해주세요.<br class="max-sm:hidden">취소가 완료되면 이메일로 안내드리겠습니다.</p>
    </div>

    <div class="w-full max-w-128 bg-muted-light border border-bs-gray rounded-2xl p-6 flex flex-col gap-4">
      <div class="flex gap-2">
        <input id="email-input" type="email" placeholder="이메일을 입력해주세요." autocomplete="username" aria-required="true" class="flex-1 h-12 px-4 bg-white border border-gray-300 rounded-lg text-base focus:outline-none focus:border-primary">
        <button type="button" @click="$emit('nextStep')" class="h-12 px-6 bg-primary text-white font-medium rounded-lg whitespace-nowrap">인증하기</button>
      </div>
      <!-- <div class="valid-feedback">사용 가능한 이메일입니다.</div> -->
      <!-- <div class="invalid-feedback"></div> -->
      <!-- <div class="flex items-center">
        <input id="__BVID__792" type="checkbox" class="appearance-none w-4.5 h-4.5 rounded-full border border-bs-gray bg-white checked:bg-primary checked:border-primary mr-2" value="true" gtm-id="gtm-id-li670z" gtm-path="gtm-path-bq6269">
        <label class="text-sm text-[#6C757D] cursor-pointer" for="__BVID__792"><span class="text-primary">개인정보 수집 및 이용</span>에 동의합니다.</label>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
</style>