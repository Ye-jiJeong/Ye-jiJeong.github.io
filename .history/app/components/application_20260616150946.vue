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
  <section class="flex items-end justify-between gap-6 max-md:!items-start max-sm:flex-col max-sm:gap-0">
    
    <div class="flex-1 min-w-0 max-sm:w-full">
      <div class="text-base flex gap-2.5">
        <span class="flex items-center gap-2.5 bg-white py-2 px-3.75 rounded-lg">
            <icon name="solar:shield-check-bold" class="text-teal-500 text-2xl" />
            {{ badgeText }}
        </span>
        
        <p :class="['py-2 px-3.75 rounded-lg', badgeClass]">{{ timeText }}</p>
      </div>

      <div class="hidden max-sm:block w-full my-4">
        <div class="relative inline-block w-full">
          <img :src="imgUrl" alt="비주얼 이미지" class="w-full rounded-2xl" />
          <p v-if="visualBadgeText" class="absolute max-sm:top-5 max-sm:right-5 inline-block rounded bg-warning py-0.5 px-2 font-bold text-base whitespace-nowrap">
              {{ visualBadgeText }}
          </p>
        </div>
      </div>

      <h1 class="text-5xl font-bold mt-6.75 mb-5 leading-snug max-md:text-4xl max-sm:text-3xl max-sm:mt-0 max-sm:mb-4">
          {{ titleLine1 }} <br class="max-sm:hidden">
          <span :class="titleClass">{{ titleLine2 }}</span>
          신청
      </h1>

      <ul class="flex flex-col gap-1">
          <li v-for="(item, idx) in checkList" :key="idx" class="text-xl flex items-center gap-2.5 font-medium whitespace-nowrap max-md:text-base max-sm:whitespace-normal max-sm:items-start max-sm:gap-2">
            <Icon name="lucide:check" :class="[titleClass, 'flex-shrink-0 max-sm:mt-1']" />
            <span>{{ item.text || item }}</span>
            <Button v-if="item.btnText" :text="item.btnText" class="!text-base text-primary !p-0 hover:[&>span]:underline" iconClass="translate-y-[-1px]" />
          </li>
      </ul>
    </div>

    <div class="w-fit flex-shrink-0 max-lg:w-[46%] max-sm:hidden">
      <div class="relative inline-block w-full">
        <img :src="imgUrl" alt="비주얼 이미지" class="w-full" />
        <p v-if="visualBadgeText" class="absolute top-6 right-5 inline-block rounded-lg bg-warning py-1 px-4 font-bold text-lg whitespace-nowrap max-md:rounded max-md:top-3 max-md:right-3 max-md:text-base">
            {{ visualBadgeText }}
        </p>
      </div>
    </div>
  </section>

  <section class="mt-16 max-md:mt-12">
    <div class="bg-slate-200 py-7.5 px-8.75 rounded-3xl max-md:p-6">
      <TitleH4 text="범용인증서 인기 활용처" class="mb-5 text-black font-bold" />
      <div class="text-base flex flex-wrap justify-start gap-2.5">
        <button v-for="(tab, idx) in useList" :key="idx" type="button" :class="['bg-white py-3 rounded-xl font-medium border border-white pointer-events-none max-md:px-4', tabClass]">{{ tab }}</button>
        <button type="button" class="bg-white py-3 rounded-xl font-medium border border-primary !px-5.5 text-primary hover:bg-primary/10 hover:border-primary/10 transition-colors">+ 더보기</button>
      </div>
    </div>
  </section>

  <div>
    <slot />
  </div>
</template>

<style scoped>
</style>