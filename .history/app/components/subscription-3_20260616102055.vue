<script setup lang="ts">
import { ref } from 'vue'
import TitleH4 from '../components/title_h4.vue'
import TabNewsletter from '../components/tab_newsletter.vue'

// img
import Subscription1 from '../img/sub/subscription_1.svg'

defineEmits(['changeTab'])

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
    btnText: '인증완료',
    btnClass: 'w-24 h-12 flex items-center justify-start text-primary font-bold whitespace-nowrap gap-1.5',
    isText: true,
    iconName: 'xi-check-circle'
  }
])
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <TitleH4 text="사업자 뉴스레터 구독" class="mb-6 max-md:mb-3 max-[363px]:mt-4" />

    <TabNewsletter selectedTab="subscribe" @changeTab="$emit('changeTab', $event)" />

    <div class="flex flex-col items-center mb-8.25 gap-1">
      <img :src="Subscription1" alt="구독 신청 icon" class="w-32 h-32 bg-[#CDD2F5] p-6 rounded-full mb-6 max-sm:w-28 max-sm:h-28 max-sm:p-4.5 max-sm:mb-4" />
      <p class="text-base text-black/70 text-center leading-relaxed">사업자에게 필요한 다양한 소식을 분야별로 <br class="max-sm:hidden">쉽게 알려주는 뉴스레터를 구독하세요!</p>
    </div>

    <div class="w-full max-w-128 bg-muted-light border border-bs-gray rounded-2xl p-6 flex flex-col gap-2 max-sm:py-3.75">
      <div v-for="field in inputFields" :key="field.id" class="flex gap-2">
        <input :id="field.id" :type="field.type" :placeholder="field.placeholder" :disabled="field.isText" autocomplete="username" aria-required="true" class="flex-1 h-12 px-4 bg-white border border-gray-300 rounded-lg text-base focus:outline-none focus:border-primary disabled:bg-slate-100 disabled:text-slate-500">
        <div v-if="field.wrapperClass">
          <span v-if="field.isText" :class="field.btnClass">
            <i v-if="field.iconName" class="text-lg" :class="field.iconName" class="max-sm:w-full"></i>{{ field.btnText }}
          </span>
          <button v-else type="button" :class="field.btnClass">
            <i v-if="field.iconName" class="text-lg" :class="field.iconName" class="max-sm:w-full"></i>{{ field.btnText }}
          </button>
        </div>
        <span v-else-if="field.isText" :class="field.btnClass">
          <i v-if="field.iconName" class="text-lg" :class="field.iconName" class="max-sm:w-full"></i>{{ field.btnText }}
        </span>
        <button v-else type="button" :class="field.btnClass">
          <i v-if="field.iconName" class="text-lg" :class="field.iconName" class="max-sm:w-full"></i>{{ field.btnText }}
        </button>
      </div>

      <div class="flex items-center">
        <input id="check-privacy" type="checkbox" class="appearance-none w-4.5 h-4.5 rounded-full border border-bs-gray bg-white checked:bg-primary checked:border-primary mr-2">
        <label class="text-sm text-[#6C757D] cursor-pointer" for="check-privacy"><span class="text-primary">개인정보 수집 및 이용</span>에 동의합니다.</label>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>