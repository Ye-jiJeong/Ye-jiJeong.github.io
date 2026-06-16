<script setup>
import TitleH4 from '../components/title_h4.vue'
import Button from '../components/btn.vue'

// img
import Subscription2 from '../img/sub/subscription_2.svg'
import SubscriptionBG from '../img/sub/subscription_2bg.svg'

const showPopup = ref(false)
const currentStep = ref(1)

watch(showPopup, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

</script>

<template>
  <TitleH4 text="맞춤 소식 설정이 완료되었습니다." class="mb-6 max-md:mb-3 max-[363px]:mt-4" />
  <p class="text-center text-black/70 text-lg max-md:text-base">매주 1회 새로운 소식을<br class="max-sm:hidden">이메일로 전달드리겠습니다!</p>

  <div class="w-32 h-32 relative bg-[#F5DCCD] rounded-full mb-12 mt-9">
    <img :src="SubscriptionBG" alt="구독 신청 배경" class="w-full h-full absolute top-0 left-0" />
    <img :src="Subscription2" alt="구독 신청 icon" class="w-full h-full absolute top-0 left-0 p-6 z-10" />
  </div>

  <Button @click="showPopup = false; currentStep = 1" text="닫기" class="bg-primary text-white py-4.5 px-14" hideArrow />
</template>

<style scoped>
</style>