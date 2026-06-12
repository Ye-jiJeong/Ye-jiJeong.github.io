<script setup>
import Button from './btn.vue'

// img
import logo1 from '../img/main/certified1.svg'
import logo2 from '../img/main/certified2.svg'
import logo3 from '../img/main/certified3.svg'
import logo4 from '../img/main/certified4.svg'
import logo5 from '../img/main/certified5.svg'

const certColumns = [
  {
    class: 'gap-3',
    items: [
      { id: 1, logo: logo1, text: '정부지정\n공동인증기관' },
      { id: 2, logo: logo2, text: 'ISO\n27001 인증' }
    ]
  },
  {
    class: 'sm:pt-24 lg:pt-35',
    items: [
      { id: 3, logo: logo3, text: '안정적 운영\nSINCE 2018' }
    ]
  },
  {
    class: 'gap-3 sm:pt-0 lg:pt-28',
    items: [
      { id: 4, logo: logo4, text: '국세청 인증\n시스템 사업자' },
      { id: 5, logo: logo5, text: '전자서명\n인증서비스' }
    ]
  }
]
</script>

<template>
  <section class="mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between text-center lg:text-left gap-10 lg:gap-4">
    <div class="w-full lg:w-auto">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
        최고 수준의 보안으로<br>믿을 수 있는 인증 서비스
      </h2>
      <p class="text-base md:text-lg lg:text-xl mt-5 mb-8 font-medium leading-relaxed">
        정보 보안부터 소프트웨어 품질까지,<br>검증된 기술로 안전성을 증명합니다.
      </p>
      <Button text="인증기관 자세히 보기" class="mt-0 sm:mt-2 md:mt-4 lg:mt-10 text-white py-3 px-5 md:py-4 md:px-6 rounded-xl text-lg md:text-xl font-semibold bg-primary inline-flex" />
    </div>

    <div class="max-sm:w-full max-sm:flex max-sm:flex-col sm:grid sm:grid-cols-3 gap-2 sm:gap-3 items-center sm:items-start mt-8 lg:mt-0 max-sm:pb-2">
      <div v-for="(col, index) in certColumns" :key="index" :class="[col.class, 'flex max-sm:flex-row max-sm:w-full max-sm:justify-center max-sm:gap-2 sm:flex-col']">
        <div v-for="cert in col.items" :key="cert.id" class="bg-white border border-primary/45 rounded-2xl flex flex-col items-center justify-center text-center aspect-square w-40 max-sm:w-[calc(50%-4px)] max-sm:max-w-40 p-3.5 pt-4.5">
          <img :src="cert.logo" :alt="cert.text.replace('\n', ' ')" class="w-18 mb-3 object-contain" />
          <p class="text-lg max-md:text-base max-sm:text-sm font-medium whitespace-pre-line leading-snug tracking-tight">{{ cert.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>