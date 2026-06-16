<script setup lang="ts">
import Button from '../components/btn.vue'
import TitleH3 from '../components/title_h3.vue'

// img
import NewsletterImg from '../img/sub/newsletter_bg.svg'
</script>

<template>
  <div 
    :style="{ 
      backgroundImage: `url(${NewsletterImg}), linear-gradient(to right, #0098F9, #9243FF)`,
      backgroundPosition: 'right 35px center, center',
    }" 
    class="mb-17 mt-14.5 bg-no-repeat py-12 px-14 rounded-2xl text-white bg-[position:center] bg-[size:cover] md:bg-[position:right_35px_center,_center] md:bg-[size:60%,_100%]"
  >
    <TitleH3 text="모르면 손해 보는 사업자 필수 정보" class="text-white" />
    <p class="mt-2 text-base opacity-90">사장님의 성공을 바라며, 꼭 필요한 실무 소식만 요약해 드립니다.</p>
    <Button text="지금 무료로 구독하기" class="mt-6 bg-white text-black py-4 px-6 text-lg font-semibold max-md:text-base" />
  </div>
  <!-- max-lg:w-85 max-lg:leading-tight -->
</template>

<style scoped>
</style>