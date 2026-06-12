<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import TitleH2 from './title_h2.vue'
import TitleP from '../components/title_p.vue'
import Button from '../components/btn.vue'

const modules = [Navigation, Autoplay]

const reviews = ref([
  {
    id: 1,
    author: '김*지',
    content: '정말 편리하고 좋아요! 다음에도 다시 이용할 계획입니다. 정말 편리하고 좋아요! 다음에도 다시 이용할 계획입니다. 정말 편리하고 좋아요! 다음에도 다시 이용할 계획입니다. 정말 편리하고 좋아요! 다음에도 다시 이용할 계획입니다. 정말 편리하고 좋아요! 다음에도 다시 이용할 계획입니다. 정말 편리하고 좋아요! 다음에도 다시 이용할 계획입니다. 정말 편리하고 좋아요! 다음에도 다시 이용할 계획입니다.',
    rating: 5,
    date: '2023.10.24',
    product: '사업자 범용 공동인증서 (1년)',
  },
  {
    id: 2,
    author: '이*훈',
    content: '발급 과정이 엄청 빠르네요. 주변에도 적극 추천합니다.',
    rating: 4.5,
    date: '2023.10.23',
    product: '전자세금용 인증서',
  },
  {
    id: 3,
    author: '박*수',
    content: '상담원 분이 친절하게 안내해주셔서 무사히 완료했습니다.',
    rating: 4,
    date: '2023.10.20',
    product: '사업자 범용 공동인증서 (3년)',
  },
  {
    id: 4,
    author: '최*영',
    content: '복잡한 절차 없이 비대면으로 모바일 신청이 가능해서 무척 만족해요.',
    rating: 5,
    date: '2023.10.18',
    product: '특수목적용 인증서',
  },
  {
    id: 5,
    author: '정*호',
    content: '안전하고 믿을 수 있는 서비스입니다. 시간 절약 최고! 안전하고 믿을 수 있는 서비스입니다. 시간 절약 최고! 안전하고 믿을 수 있는 서비스입니다. 시간 절약 최고!',
    rating: 3.5,
    date: '2023.10.15',
    product: '사업자 범용 공동인증서 (1년)',
  },
])
</script>

<template>
  <section class="w-full pt-18 max-lg:pt-14 max-md:pt-10">
    <div class="mx-auto w-full">
      <div class="mb-1 flex items-start md:items-center justify-between gap-4">
        <div class="flex-1 flex flex-wrap items-end gap-x-3.5 gap-y-1">
          <div class="order-1 w-auto max-md:w-full flex items-center justify-between">
            <TitleH3 text="생생한 고객 후기" class="mr-1.5 whitespace-nowrap" />
            <TitleH2 text="생생한 고객 후기" class="mr-1.5 whitespace-nowrap" />
            
            <div class="md:hidden flex items-center gap-1.5 max-sm:gap-1 shrink-0">
              <button class="review-prev flex h-11 w-11 max-sm:h-8 max-sm:w-8 cursor-pointer items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/60 transition-colors max-sm:text-sm">
                <icon name="fa6-solid:chevron-left" />
              </button>
              <button class="review-next flex h-11 w-11 max-sm:h-8 max-sm:w-8 cursor-pointer items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/60 transition-colors max-sm:text-sm">
                <icon name="fa6-solid:chevron-right" />
              </button>
            </div>
          </div>
          
          <div class="flex items-center gap-2 sm:gap-3.5 order-2 max-md:order-3 max-md:w-full max-md:mt-2 shrink-0">
            <p class="text-lg max-lg:text-base max-md:text-sm py-1.25 px-2.5 bg-black/10 font-medium rounded-lg">고객 만족도</p>
            <ul class="flex items-center gap-1.25 text-2xl max-lg:text-xl max-md:text-lg font-bold">
              <li><i class="xi-star text-warning"></i></li>
              <li>4.8</li>
              <li class="text-sm max-md:text-xs text-black/45 font-medium">(1,234건)</li>
            </ul>
          </div>

          <TitleP text="실제 서비스를 이용하신 고객님들의 만족스러운 후기입니다." class="order-3 max-md:order-2 w-full mt-1.5 max-md:mt-1" />
        </div>

        <div class="shrink-0 pt-1 md:pt-0 max-md:hidden">
          <Button text="발급 후기 전체보기" class="bg-primary text-inverted text-xl max-lg:text-lg max-md:text-base font-medium py-2.5 px-6 max-md:py-2 max-md:px-4" />
        </div>
      </div>

      <div class="relative w-full mt-10">
        
        <button class="review-prev max-md:hidden absolute top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/60 -left-14 max-lg:left-2 max-xl:left-0">
          <icon name="fa6-solid:chevron-left" />
        </button>

        <button class="review-next max-md:hidden absolute top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/60 -right-14 max-lg:right-2 max-xl:right-0">
          <icon name="fa6-solid:chevron-right" />
        </button>

        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="16"
          :loop="true"
          :autoplay="{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
          :navigation="{ nextEl: '.review-next', prevEl: '.review-prev' }"
          :breakpoints="{
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }"
          class="w-full py-4"
        >
          <swiper-slide v-for="review in reviews" :key="review.id" class="h-auto">
            <div class="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border-2 border-violet-400 bg-white min-h-58">
              
              <div class="absolute -left-[50%] -top-[50%] z-0 hidden h-[200%] w-[200%] animate-[spin_2s_linear_infinite] group-hover:block" style="background: conic-gradient(from 90deg, transparent 70%, #7c3aed 100%);"></div>
              <div class="absolute inset-[2px] z-10 hidden rounded-xl bg-white group-hover:block"></div>

              <div class="relative z-20 flex flex-1 w-full flex-col justify-between p-6 hover:text-primary">
                <div>
                  <div class="mb-3 flex items-center justify-between">
                    <div class="flex items-center text-warning gap-0.5 text-lg max-md:text-base">
                      <icon
                        name="fa6-solid:star"
                        v-for="n in Math.floor(review.rating)"
                        :key="'full-' + n"
                      />
                      <icon name="fa6-solid:star-half-stroke" v-if="review.rating % 1 !== 0" />
                      <icon
                        name="fa6-regular:star"
                        v-for="n in 5 - Math.ceil(review.rating)"
                        :key="'empty-' + n"
                      />
                    </div>

                    <span class="text-base max-md:text-sm text-black/45">{{ review.date }}</span>
                  </div>

                  <p class="mb-4 line-clamp-3 font-medium text-lg max-md:text-base break-keep mt-6">{{ review.content }}</p>
                </div>

                <p class="flex items-center text-sm max-md:text-xs text-black/45">
                  <span class="font-bold">{{ review.author }}</span>
                  <span class="mx-2 text-xs">|</span>
                  <span class="text-xs">{{ review.product }}</span>
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>