<script setup lang="ts">
import { ref } from 'vue'
import TitleH4 from '../components/title_h4.vue'
import TabNewsletter from '../components/tab_newsletter.vue'

// img
import Subscription1 from '../img/sub/subscription_1.svg'

defineEmits(['nextStep', 'changeTab'])

const inputFields = ref([
  {
    id: 'email-input',
    type: 'email',
    placeholder: '이메일을 입력해주세요.',
    btnText: '인증하기',
    btnClass: 'w-24 h-12 bg-sky-blue text-white font-medium rounded-lg whitespace-nowrap'
  },
  {
    id: 'auth-input',
    type: 'email',
    placeholder: '인증번호를 입력해주세요.',
    btnText: '확인',
    btnClass: 'h-12 px-6 bg-primary text-white font-medium rounded-lg whitespace-nowrap',
    wrapperClass: 'w-24 flex justify-start'
  }
])
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <TitleH4 text="사업자 뉴스레터 구독" class="text-2xl font-bold text-dark mb-6" />

    <TabNewsletter selectedTab="subscribe" @changeTab="$emit('changeTab', $event)" />

    <div class="flex flex-col items-center mb-8.25 gap-1">
      <img :src="Subscription1" alt="구독 신청 icon" class="w-32 h-32 bg-[#CDD2F5] p-6 rounded-full mb-6 mb-4" />
      <p class="text-base text-black/70 text-center leading-relaxed">사업자에게 필요한 다양한 소식을 분야별로<br>쉽게 알려주는 뉴스레터를 구독하세요!</p>
    </div>

    <div class="w-full max-w-128 bg-muted-light border border-bs-gray rounded-2xl p-6 flex flex-col gap-2 max-sm:gap-4">
      <div v-for="field in inputFields" :key="field.id" class="flex gap-2 max-sm:flex-col">
        <input :id="field.id" :type="field.type" :placeholder="field.placeholder" autocomplete="username" aria-required="true" class="flex-1 h-12 px-4 bg-white border border-gray-300 rounded-lg text-base focus:outline-none focus:border-primary max-sm:py-3.75">
        <div v-if="field.wrapperClass" :class="field.wrapperClass" class="max-sm:w-full">
          <button type="button" @click="field.id === 'auth-input' ? $emit('nextStep') : null" :class="field.btnClass" class="max-sm:w-full">{{ field.btnText }}</button>
        </div>
        <button v-else type="button" @click="field.id === 'auth-input' ? $emit('nextStep') : null" :class="field.btnClass" class="max-sm:w-full">{{ field.btnText }}</button>
      </div>

      <div class="flex items-center">
        <input id="__BVID__792" type="checkbox" class="appearance-none w-4.5 h-4.5 rounded-full border border-bs-gray bg-white checked:bg-primary checked:border-primary mr-2" value="true" gtm-id="gtm-id-li670z" gtm-path="gtm-path-bq6269">
        <label class="text-sm text-[#6C757D] cursor-pointer" for="__BVID__792"><span class="text-primary">개인정보 수집 및 이용</span>에 동의합니다.</label>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>