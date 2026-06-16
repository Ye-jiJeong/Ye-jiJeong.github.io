<script setup lang="ts">
import type { PropType } from 'vue'
import Button from './btn.vue'
import TitleH4 from '../components/title_h4.vue'

const props = defineProps({
  badgeText: {type: String, required: true},
  timeText: {type: String, required: true},
  badgeClass: {type: String, required: true},
  titleLine1: {type: String, required: true},
  titleLine2: {type: String, required: true},
  titleClass: {type: String, required: true},
  checkList: {type: Array as PropType<any[]>, required: true},
  imgUrl: {type: String, required: true},
  useList: {type: Array as PropType<string[]>, required: true},
  visualBadgeText: { type: String, required: false },
  tabClass: { type: String, default: 'px-4.5' }
})
</script>

<template>
  <section class="flex items-end justify-between max-md:flex-col-reverse max-md:items-start max-md:gap-6">
    <div class="max-md:w-full">
      <div class="text-base flex gap-2.5">
        <span class="flex items-center gap-2.5 bg-white py-2 px-3.75 rounded-lg">
            <icon name="solar:shield-check-bold" class="text-teal-500 text-2xl" />
            {{ badgeText }}
        </span>
        
        <p :class="['py-2 px-3.75 rounded-lg', badgeClass]">{{ timeText }}</p>
      </div>

      <h1 class="text-5xl font-bold mt-6.75 mb-5 leading-snug max-md:text-4xl max-sm:text-3xl">
          {{ titleLine1 }} <br>
          <span :class="titleClass">{{ titleLine2 }}</span>
          신청
      </h1>

      <ul class="flex flex-col gap-1">
          <li v-for="(item, idx) in checkList" :key="idx" class="text-xl flex items-center gap-2.5 font-medium max-sm:flex-wrap max-xl:flex-wrap max-md:text-base">
            <Icon name="lucide:check" :class="titleClass" />
            <span>{{ item.text || item }}</span>
            <Button v-if="item.btnText" :text="item.btnText" class="!text-base text-primary !p-0 hover:[&>span]:underline" iconClass="translate-y-[-1px]" />
          </li>
      </ul>
    </div>

    <div class="w-fit max-md:w-full max-md:flex max-md:justify-end max-md:mb-2">
      <div class="relative inline-block max-md:w-[130px]">
        <img :src="imgUrl" alt="비주얼 이미지" class="max-md:w-full" />
        <p v-if="visualBadgeText" class="absolute top-6 right-5 inline-block rounded-lg bg-warning py-1 px-4 font-bold text-lg max-md:top-2 max-md:right-2 max-md:py-0.5 max-md:px-1.5 max-md:text-[10px]">
            {{ visualBadgeText }}
        </p>
      </div>
    </div>
  </section>

  <section class="mt-16 max-md:mt-10">
    <div class="bg-slate-200 py-7.5 px-8.75 rounded-2xl max-md:bg-transparent max-md:p-0">
      <TitleH4 text="범용인증서 인기 활용처" class="mb-5 text-black font-bold" />
      <div class="text-base flex flex-wrap justify-start min-xl:flex-nowrap min-xl:justify-between gap-2.75 max-md:grid max-md:grid-cols-4 max-md:gap-2 max-sm:grid-cols-3">
        <button v-for="(tab, idx) in useList" :key="idx" type="button" :class="['bg-white py-4 rounded-xl font-medium border border-white pointer-events-none max-md:py-3 max-md:text-sm max-md:border-slate-200', tabClass]">{{ tab }}</button>
        <button type="button" class="bg-white py-4 rounded-xl font-medium border border-primary !px-5.5 text-primary hover:bg-primary/10 hover:border-primary/10 transition-colors max-md:py-3 max-md:text-sm">+ 더보기</button>
      </div>
    </div>
  </section>

  <div>
    <slot />
  </div>
</template>

<style scoped>
</style>