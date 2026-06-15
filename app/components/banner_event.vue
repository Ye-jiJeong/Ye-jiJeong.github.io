<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import surveyBanner1 from '../img/main/survey_banner1.svg'
import surveyBanner2 from '../img/main/survey_banner2.svg'
import surveyBanner3 from '../img/main/survey_banner3.svg'

const modules = [Pagination, Navigation, Autoplay]

const events = ref([
  { id: 1, label: '설문조사 작성', title: '발급 후기 혜택', img: surveyBanner1, bgColor: 'bg-[#0DCB67]', textColor: 'text-white' },
  { id: 2, label: '사업자 범용인증서', title: '할인받고 발급받기', img: surveyBanner2, bgColor: 'bg-[#C76DEB]', textColor: 'text-white' },
  { id: 3, label: '근로복지공단 지정', title: '4대보험 무료대행', img: surveyBanner3, bgColor: 'bg-[#08BBCF]', textColor: 'text-white' }
])
</script>

<template>
  <section class="relative w-full rounded-3xl overflow-hidden">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :pagination="{ el: '.event-pagination', clickable: true }"
      :navigation="{ nextEl: '.event-next', prevEl: '.event-prev' }"
      class="w-full h-full"
    >
      <swiper-slide v-for="event in events" :key="event.id">
        <div :class="[event.bgColor, 'w-full h-full flex flex-row p-4 sm:flex-col items-center justify-between sm:justify-center text-left sm:text-center sm:p-6 relative']">
          <div>
            <span :class="[event.textColor, 'text-lg font-medium max-md:text-base']">{{ event.label }}</span>
            <h4 :class="[event.textColor, 'text-4xl font-bold mb-2 max-lg:text-3xl max-md:text-2xl']">{{ event.title }}</h4>
          </div>

          <img v-if="event.img" :src="event.img" alt="이벤트 이미지" class="mt-2 mb-2 sm:mb-8 object-contain z-10" />
          
          <div class="w-20 h-20 bg-white/20 rounded-full blur-xl absolute bottom-0 sm:bottom-12"></div>
        </div>
      </swiper-slide>
    </swiper>

    <button class="event-prev max-sm:hidden absolute top-1/2 left-4 z-10 -translate-y-1/2 flex items-center justify-center bg-white/20 hover:bg-white/30 text-white w-8 h-8 rounded-full transition-colors">
      <icon name="fa6-solid:chevron-left" class="text-sm" />
    </button>
    <button class="event-next max-sm:hidden absolute top-1/2 right-4 z-10 -translate-y-1/2 flex items-center justify-center bg-white/20 hover:bg-white/30 text-white w-8 h-8 rounded-full transition-colors">
      <icon name="fa6-solid:chevron-right" class="text-sm" />
    </button>

    <div class="event-pagination swiper-pagination !bottom-7.5 flex justify-center gap-1.5 [&_.swiper-pagination-bullet]:bg-white/40 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet]:w-1.5 [&_.swiper-pagination-bullet]:h-1.5 [&_.swiper-pagination-bullet]:!m-0 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet-active]:bg-white [&_.swiper-pagination-bullet-active]:w-[18px] [&_.swiper-pagination-bullet-active]:rounded-[3px]"></div>
  </section>
</template>

<style lang="scss" scoped>
.swiper-pagination {
  :deep(.swiper-pagination-bullet) {
    background-color: rgba(255, 255, 255, 0.4);
    opacity: 1;
    width: 6px;
    height: 6px;
    margin: 0 !important;
    transition: all 0.3s ease;
  }

  :deep(.swiper-pagination-bullet-active) {
    background-color: #ffffff;
    width: 18px;
    border-radius: 3px;
  }
}
</style>