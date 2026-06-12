<script setup lang="ts">

// img
import Logo from '../img/common/ft_logo.svg'
import Cooperation1 from '../img/common/cooperation_logo1.svg'
import Cooperation2 from '../img/common/cooperation_logo2.svg'
import Cooperation3 from '../img/common/cooperation_logo3.svg'
import Cooperation4 from '../img/common/cooperation_logo4.svg'

const addressList = [
  '서울시 영등포구 여의나루로4길 21 ㈜코스콤',
  '경기도 성남시 분당구 판교로 338 한국전자무역센터 6층 인증센터',
  '광주 북구 첨단과기로 208번길 43-22, 와이어스파크 B동 1901~3'
]

const menuList = [
  { title: '개인정보처리방침', link: '' },
  { title: '이용약관', link: '' },
  { title: '인증업무준칙', link: '' },
  { title: '회사소개', link: '' },
  { title: '공지사항', link: '' }
]

const companyInfoList = [
  ['대표이사 : 이천호'],
  ['(주) 케이넷  : 사업자등록번호 416-81-38772', '통신판매업신고 제2010-7호'],
  ['(주) 위   더  : 사업자등록번호 715-86-00561', '통신판매업신고 제2018-45호']
]

const cooperationList = [
  { id: 1, logo: Cooperation1, alt: '협력기관 1' },
  { id: 2, logo: Cooperation2, alt: '협력기관 2' },
  { id: 3, logo: Cooperation3, alt: '협력기관 3' },
  { id: 4, logo: Cooperation4, alt: '협력기관 4' }
]
</script>

<template>
  <div class="flex flex-col-reverse gap-6 xl:flex-row xl:justify-between xl:items-end mb-6">
    <img :src="Logo" alt="한국사업자인증 로고" class="w-61" />

    <ul class="flex justify-between max-sm:justify-center flex-wrap sm:flex-nowrap items-center gap-4 text-base max-md:text-sm">
      <li v-for="(menu, index) in menuList" :key="index">
        <a :href="menu.link">{{ menu.title }}</a>
      </li>
    </ul>
  </div>


  <div class="flex flex-col justify-start xl:flex-row xl:justify-between gap-4 max-md:gap-10">
    <div class="flex flex-col items-start gap-0.5">
      <ul class="text-base max-md:text-sm">
        <li v-for="(address, index) in addressList" :key="index">{{ address }}</li>
      </ul>

      <p class="text-sm mt-2 opacity-45 max-md:text-xs">Copyright 2022 한국사업자인증. All Rights Reserved.</p>
    </div>

    <div class="max-md:w-fit">
      <ul class="flex flex-col items-start xl:items-end sm:gap-0.5 gap-1.5 text-base max-md:text-xs">
        <li v-for="(info, index) in companyInfoList" :key="index" class="flex items-center flex-wrap sm:flex-nowrap sm:gap-3 gap-0.5">
          <span v-for="(text, idx) in info" :key="idx" class="relative flex items-center before:content-[''] before:bg-black/20 before:absolute before:-left-1.5 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-3 first:before:hidden">
            {{ text }}
          </span>
        </li>
      </ul>

      <ul class="flex flex-wrap sm:flex-nowrap max-sm:gap-y-6 max-sm:place-items-center justify-between items-center gap-4.5 mt-12.5 max-sm:w-full w-120 xl:w-full">
        <li v-for="coop in cooperationList" :key="coop.id">
          <img :src="coop.logo" :alt="coop.alt" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>