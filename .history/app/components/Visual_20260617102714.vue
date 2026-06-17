<script setup>
import { ref } from 'vue'
import Button from './btn.vue'

import TitleH4 from '../components/title_h4.vue'

// img
import img1 from '../img/main/btn_issue1.svg'
import img2 from '../img/main/btn_issue2.svg'
import img3 from '../img/main/btn_issue3.svg'

const issueList = ref([
  {id: 1, theme: 'success', img: img1, badge: 'BEST', label: '10분 발급', title: '비대면 온라인 신청', desc: ['모든 과정 온라인 진행', '평일 9~16시 즉시 발급'], btnText: '온라인으로 신청하기', link: '/sub01_01'},
  {id: 2, theme: 'primary', img: img2, badge: null, label: '빠른 발급', title: '발급기관 직접 방문', desc: ['전국 77개 발급기관 운영', '평일 9~17시 당일 발급'], btnText: '가까운 발급기관 찾기', link: '/sub01_02'},
  {id: 3, theme: 'danger', img: img3, badge: null, label: '간편 발급', title: '우체부 방문 예약', desc: ['원하는 장소 및 날짜 선택', '신청 기준 2~3일 내 발급'], btnText: '방문 예약 신청하기', link: '/sub01_03'},
])
</script>

<template>
  <ul class="flex w-full justify-center gap-5 max-lg:flex-col">
    <li v-for="issue in issueList" :key="issue.id" :class="['card-item rounded-2xl flex-1', issue.theme]">
      
      <NuxtLink :to="issue.link" class="group relative flex h-full flex-col overflow-hidden rounded-2xl card-link max-lg:flex-row max-lg:items-center max-sm:flex-wrap max-lg:p-8 max-lg:p-5 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
        
        <div class="spin-bg absolute inset-0 z-10 pointer-events-none rounded-2xl border-3 border-transparent transition-colors duration-300"></div>
        
        <div class="relative w-full shrink-0 overflow-hidden max-lg:w-2/5 max-sm:w-full max-sm:h-22 max-lg:rounded-xl max-sm:mb-3">
          <img :src="issue.img" class="w-full h-full object-cover" />

          <p v-if="issue.badge" class="absolute top-6 right-5 inline-block rounded-lg bg-warning py-1 px-4 font-bold text-lg max-md:top-3 max-md:right-3 max-md:py-0.5 max-md:px-2.5 max-md:text-sm">
            {{ issue.badge }}
          </p>
        </div>

        <div class="flex grow flex-col items-start py-6 px-7.5 max-lg:py-0 max-lg:pl-8 max-md:pl-4 max-sm:p-0">
          <p class="theme-label inline-block rounded-md py-1 px-2.5 font-bold text-15 max-sm:text-xs">
            {{ issue.label }}
          </p>

          <TitleH4 :text="issue.title" class="mt-2 mb-1 md:mb-3.5 font-semibold " />

          <dl class="flex flex-col gap-0.5 mb-5 max-lg:mb-0">
            <dd v-for="(descText, idx) in issue.desc" :key="idx" :class="['items-center text-lg max-sm:text-sm max-md:text-15 font-medium', idx > 0 ? 'hidden md:flex' : 'flex']"><Icon name="lucide:check" class="theme-icon text-lg max-sm:text-sm max-md:text-15 mr-2.5 max-md:mr-0 max-md:hidden" />{{ descText }}</dd>
          </dl>

          <Button :text="issue.btnText" class="w-full bg-primary text-lg font-semibold text-inverted py-4 max-lg:hidden" />
        </div>

        <div class="ml-auto pr-1 hidden max-lg:block max-sm:pr-0">
          <Icon name="solar:alt-arrow-right-linear" class="text-3xl max-md:text-2xl text-black opacity-80" />
        </div>

      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>

.card-item {
  $themes: (
    'success': --color-success,
    'primary': --color-primary,
    'danger': --color-danger,
  );

  @each $name, $color in $themes {
    &.#{$name} {
      background: #{"color-mix(in srgb, var(#{$color}) 5%, transparent)"};

      .spin-bg {
        color: var(#{$color});
      }

      .theme-label {
        @if $name == 'success' {
          background: #{"color-mix(in srgb, #404B6C 10%, transparent)"};
          color: var(--color-dark);
        } @else {
          background: #{'color-mix(in srgb, var(' + $color + ') 15%, transparent)'};
          color: var(#{$color});
        }
      }
      .theme-icon {
        color: var(#{$color});
      }
    }
  }
}

</style>