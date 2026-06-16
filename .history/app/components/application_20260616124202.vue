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
        <span class="flex items-center gap-2.5 bg-white py-2 px-3.75 rounded-lg">
            <icon name="solar:shield-check-bold" class="text-teal-500 text-2xl" />
            {{ badgeText }}
        </span>
        
        <p :class="['py-2 px-3.75 rounded-lg', badgeClass]">{{ timeText }}</p>
      </div>

      <h1 class="text-5xl font-bold mt-6.75 mb-5 leading-snug max-md:text-4xl max-sm:text-3xl">
          {{ titleLine1 }}<br />
          <span :class="titleClass">{{ titleLine2 }}</span>
          신청
      </h1>

      <ul class="flex flex-col gap-1">
          <li v-for="(item, idx) in checkList" :key="idx" class="text-xl flex items-center gap-2.5 font-medium max-sm:flex-wrap">
          <Icon name="lucide:check" :class="titleClass" />
          <span>{{ item.text || item }}</span>
          <Button v-if="item.btnText" :text="item.btnText" class="!text-base text-primary !p-0 hover:[&>span]:underline" iconClass="translate-y-[-1px]" />
          </li>
      </ul>
    </div>

    <div class="relative w-fit max-md:w-full max-md:flex max-md:justify-center max-md:mt-6">
      <img :src="imgUrl" alt="비주얼 이미지" />
      <p v-if="visualBadgeText" class="absolute top-6 right-5 inline-block rounded-lg bg-warning py-1 px-4 font-bold text-lg max-md:top-3 max-md:right-3 max-md:py-0.5 max-md:px-2.5 max-md:text-sm">
          {{ visualBadgeText }}
      </p>
    </div>
  </section>

  <section class="mt-16">
    <div class="bg-slate-200 py-7.5 px-8.75 rounded-2xl">
      <TitleH4 text="범용인증서 인기 활용처" class="mb-5 text-black font-bold" />
      <div class="[&>button]:bg-white [&>button]:py-4 [&>button]:rounded-xl [&>button]:font-medium text-base flex justify-between gap-2.75 [&>button]:border [&>button]:hover:bg-primary/10 [&>button]:hover:border-primary/10 max-lg:flex-wrap">
        <button v-for="(tab, idx) in useList" :key="idx" type="button" :class="['border-white pointer-events-none', tabClass]">{{ tab }}</button>
        <button type="button" class="!px-5.5 border-primary text-primary">+ 더보기</button>
      </div>
    </div>
  </section>

  <div>
    <slot />
  </div>
</template>

<style scoped>
</style>