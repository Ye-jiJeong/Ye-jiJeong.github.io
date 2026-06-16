<script setup>
import TitleH4 from '../components/title_h4.vue'
import Button from '../components/btn.vue'

// img
import Subscription4 from '../img/sub/subscription_4.svg'
import SubscriptionBG from '../img/sub/subscription_4bg.svg'

defineEmits(['close'])
</script>

<template>
  <TitleH4 text="구독 취소 신청이 되었습니다." class="mb-6 max-md:mb-3 max-[363px]:mt-4" />
  <p class="text-center text-black/70 text-lg">다음에 또 구독해주시면<br>좋은 정보를 공유해드리겠습니다!</p>

  <div class="w-32 h-32 max-sm:w-24 max-sm:h-24 relative bg-[#CDEAF5] rounded-full mb-12 mt-9 max-sm:w-28 max-sm:h-28 max-sm:p-4.5 max-sm:mb-4">
    <img :src="SubscriptionBG" alt="구독 신청 배경" class="w-full h-full absolute top-0 left-0" />
    <img :src="Subscription4" alt="구독 신청 icon" class="w-full h-full absolute top-0 left-0 p-6 max-sm:p-4 z-10" />
  </div>

  <Button @click="$emit('close')" text="닫기" class="bg-primary text-white py-4.5 px-14" hideArrow />
</template>

<style scoped>
</style>