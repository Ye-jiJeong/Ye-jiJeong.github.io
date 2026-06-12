<script setup>

import TitleH1 from '../components/title_h1.vue'
import TitleH4 from '../components/title_h4.vue'

const supportList = [
  { id: 1, title: '1:1 문의', link: '', type: 'i', iconClass: 'xi-message' },
  { id: 2, title: '블로그', link: '', type: 'i', iconClass: 'xi-naver-square text-green-500' },
  { id: 3, title: '유튜브', link: '', type: 'icon', iconName: 'mdi:youtube', iconClass: 'text-rose-600' }
]

const timeInfoList = [
  { id: 1, title: '운영시간', desc: '평일 09:00 ~ 18:00', subDesc: '(주말 및 공휴일 휴무)' },
  { id: 2, title: '점심시간', desc: '12:00 ~ 13:00' }
]

const contactInfoList = [
  { id: 1, title: 'FAX', desc: '02-6455-8385' },
  { id: 2, title: 'Email', desc: 'cs@knetbiz.com' }
]

</script>

<template>
  <div class="">
    <div class="flex items-center justify-between mb-6">
      <TitleH4 text="고객지원" />
    </div>

    <div>
      <div class="bg-indigo-500 text-white rounded-2xl p-10 max-lg:p-8 max-md:p-6">
        <TitleH1 text="1644-4074" class="" />
        <ul class="flex flex-col gap-0.25 mt-3 mb-4.5">
          <li v-for="info in timeInfoList" :key="info.id" class="flex max-sm:items-start items-center gap-3 text-gray-200 text-xl max-lg:text-lg max-md:text-base">
            <span class="shrink-0">{{ info.title }}</span>
            <div class="flex max-sm:flex-col sm:gap-1.5">
              <span class="">{{ info.desc }}</span>
              <span v-if="info.subDesc" class="">{{ info.subDesc }}</span>
            </div>
          </li>
        </ul>

        <ul class="mt-2 flex gap-9 max-sm:flex-col max-sm:gap-1">
          <li v-for="contact in contactInfoList" :key="contact.id" class="flex items-center gap-3 text-xl max-lg:text-lg max-md:text-base">
            <span class="">{{ contact.title }}</span>
            <span class="">{{ contact.desc }}</span>
          </li>
        </ul>
      </div>

      <ul class="flex gap-3.5 w-full mt-3.5 max-sm:flex-col">
        <li v-for="item in supportList" :key="item.id" class="flex-1">
          <a :href="item.link" class="flex justify-between items-center bg-gray-100 py-4 px-5 rounded-xl hover:bg-gray-200">
            <div class="flex items-center gap-2.5 text-lg max-md:text-base">
              <div class="flex items-center text-2xl max-md:text-xl">
                <icon v-if="item.type === 'icon'" :name="item.iconName" :class="item.iconClass" />
                <i v-else :class="item.iconClass" class="rounded"></i>
              </div>

              <span class="flex items-center">{{ item.title }}</span>
            </div>

            <i class="xi-angle-right-min"></i>
          </a>
        </li>
        </ul>
    </div>
  </div>
</template>

<style scoped>
</style>