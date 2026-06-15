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
  <section class="flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-8">
    <div>
      <div class="text-base flex gap-2.5">
        <span class="flex items-center gap-2.5 max-sm:gap-1.5 bg-white py-2 px-3.75 max-sm:py-1.5 max-sm:px-2.5 rounded-lg max-sm:text-sm">
            <icon name="solar:shield-check-bold" class="text-teal-500 text-2xl max-sm:text-xl" />
            {{ badgeText }}
        </span>
        
        <p :class="['py-2 px-3.75 max-sm:py-1.5 max-sm:px-2.5 rounded-lg max-sm:text-sm', badgeClass]">{{ timeText }}</p>
      </div>

      <h1 class="text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-bold mt-6.75 max-md:mt-4 mb-5 max-md:mb-3 leading-snug">
          {{ titleLine1 }}<br />
          <span :class="titleClass">{{ titleLine2 }}</span>
          신청
      </h1>

      <ul class="flex flex-col gap-1">
          <li v-for="(item, idx) in checkList" :key="idx" class="text-xl max-lg:text-lg max-md:text-base flex items-center flex-wrap gap-2.5 max-sm:gap-1.5 font-medium">
          <Icon name="lucide:check" :class="[titleClass, 'shrink-0']" />
          <span>{{ item.text || item }}</span>
          <Button v-if="item.btnText" :text="item.btnText" class="text-base max-md:text-sm text-primary hover:[&>span]:underline" iconClass="translate-y-[-1px]" />
          </li>
      </ul>
    </div>

    <div class="relative w-fit max-md:w-full max-md:max-w-sm max-md:mx-auto">
      <img :src="imgUrl" alt="비주얼 이미지" />
      <p v-if="visualBadgeText" class="absolute top-6 right-5 inline-block rounded-lg bg-warning py-1 px-4 font-bold text-lg max-md:top-3 max-md:right-3 max-md:py-0.5 max-md:px-2.5 max-md:text-sm">
          {{ visualBadgeText }}
      </p>
    </div>
  </section>

  <section class="mt-16 max-md:mt-10">
    <div class="bg-slate-200 py-7.5 px-8.75 max-md:py-5 max-md:px-5 rounded-2xl">
      <TitleH4 text="범용인증서 인기 활용처" class="mb-5 text-black font-bold" />
      <div class="[&>button]:bg-white [&>button]:py-4 max-md:[&>button]:py-2.5 [&>button]:rounded-xl [&>button]:font-medium text-base max-md:text-sm flex flex-wrap justify-between gap-2.75 max-md:gap-2 [&>button]:border [&>button]:hover:bg-primary/10 [&>button]:hover:border-primary/10">
        <button v-for="(tab, idx) in useList" :key="idx" type="button" :class="['border-white', tabClass]">{{ tab }}</button>
        <button type="button" class="!px-5.5 max-md:!px-4 border-primary whitespace-nowrap">+ 더보기</button>
      </div>
    </div>
  </section>

  <div>
    <slot />
  </div>
</template>

<style scoped>
</style>