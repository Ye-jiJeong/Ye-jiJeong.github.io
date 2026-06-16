<script setup lang="ts">
import { ref, watch } from 'vue'

import Button from '../components/btn.vue'
import BarNewsletter from '../components/bar_newsletter.vue'
import Subscription1 from '../components/subscription-1.vue'
import Subscription2 from '../components/subscription-2.vue'
import Subscription3 from '../components/subscription-3.vue'
import CustoInfor from '../components/custo_infor.vue'
import CustoInforCom from '../components/custo_infor_com.vue'
import Cancellation1 from '../components/cancellation-1.vue'
import Cancellation2 from '../components/cancellation-2.vue'

// img
import BoardCon from '../img/sub/board_con.svg'

const showPopup = ref(false)
const currentStep = ref(1)
const currentMode = ref('subscribe')

watch(showPopup, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <div class="w-full max-w-[1140px] mx-auto">
    
    <div class="mb-10">
      <img :src="BoardCon" alt="게시판 콘텐츠" class="w-full h-auto object-contain" />
    </div>

    <div class="flex justify-center mt-11 mb-14.5">
      <Button text="목록으로" class="bg-primary text-white py-4 px-6 rounded-xl" />
    </div>

    
    <BarNewsletter @click="showPopup = true" class="cursor-pointer" />

    <div v-if="showPopup" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-12">
      <div class="relative w-full max-w-2xl rounded-4xl bg-white shadow-xl overflow-hidden">
        <div class="pt-12 pb-13.5 px-6 flex flex-col items-center">
          <button @click="showPopup = false; currentStep = 1; currentMode = 'subscribe'" class="absolute top-6 right-6 text-slate-400 hover:text-black transition-colors">
            <i class="xi-close text-3xl text-black/60"></i>
          </button>

          <template v-if="currentMode === 'subscribe'">
            <Subscription1 v-if="currentStep === 1" @nextStep="currentStep = 2" @changeTab="currentMode = $event; currentStep = 1" />
            <Subscription2 v-else-if="currentStep === 2" @nextStep="currentStep = 3" @changeTab="currentMode = $event; currentStep = 1" />
            <Subscription3 v-else-if="currentStep === 3" @nextStep="currentStep = 4" @changeTab="currentMode = $event; currentStep = 1" />
            <CustoInfor v-else-if="currentStep === 4" @nextStep="currentStep = 5" />
            <CustoInforCom v-else />
          </template>
          <template v-else>
            <Cancellation1 v-if="currentStep === 1" @changeTab="currentMode = $event; currentStep = 1" @nextStep="currentStep = 2" />
            <Cancellation2 v-else />
          </template>
        </div>

        <button 
          v-if="(currentMode === 'subscribe' && currentStep < 4) || (currentMode === 'unsubscribe' && currentStep === 1)" 
          @click="currentMode === 'subscribe' ? currentStep = (currentStep === 1 ? 2 : currentStep === 2 ? 3 : 4) : currentStep = 2" 
          class="w-full h-14 bg-sky-blue text-white text-lg font-bold flex justify-center items-center hover:bg-primary transition-colors"
        >{{ currentMode === 'subscribe' ? '구독 신청하기' : '구독 취소하기' }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>