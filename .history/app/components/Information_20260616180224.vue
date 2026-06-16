<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import TitleH2 from './title_h2.vue'
import TitleP from './title_p.vue'
import Button from './btn.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const modules = [Autoplay]
const isRolling = ref(false)

const checkResize = () => {
  isRolling.value = window.innerWidth < 1024
}

onMounted(() => {
  checkResize()
  window.addEventListener('resize', checkResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkResize)
})

// img
import infor1 from '../img/main/information1.svg'
import infor2 from '../img/main/information2.svg'
import infor3 from '../img/main/information3.svg'

const infoList = [
  {link: '', img: infor1, category: '[정책]', title: '홈택스 공인인증서 쉬운 발급방법', date: '2024. 3. 8.'},
  {link: '', img: infor2, category: '[정책]', title: '신용평가등급 발급 나라장터 등록 쉽게!!!!!', date: '2024. 3. 8.'},
  {link: '', img: infor3, category: '[정책]', title: '사업자 궁금증 모든 것', date: '2024. 3. 8.'}
]
</script>

<template>
    <div class="w-full">
        <div class="flex items-end justify-between gap-4 max-sm:flex-col max-sm:items-start">
            <div>
                <TitleH2 text="사업자 정보 마당" />
                <TitleP text="사업자들에게 꼭 필요한 정보를 제공합니다." />
            </div>

            <NuxtLink to="/sub02_01">
                <Button text="정보 게시글 더 보기" class="bg-primary text-inverted" />
            </NuxtLink>
        </div>

        <swiper
            :key="isRolling ? 'rolling' : 'fixed'"
            :modules="modules"
            :slides-per-view="1"
            :space-between="16"
            :loop="isRolling"
            :autoplay="isRolling ? { delay: 3500, disableOnInteraction: false } : false"
            :watch-overflow="true"
            :breakpoints="{
                768: { slidesPerView: 2, spaceBetween: 24, allowTouchMove: true },
                1024: { slidesPerView: 3, spaceBetween: 24, allowTouchMove: false }
            }"
            class="w-full mt-8 md:mt-12"
        >
            <swiper-slide v-for="(item, idx) in infoList" :key="idx">
                <a :href="item.link" class="group w-full block cursor-pointer">
                    <div class="relative w-full h-[202px] rounded-2xl overflow-hidden hover:shadow-xl">
                        <img :src="item.img" :alt="item.title" class="w-full h-full object-cover" />
                        
                        <div class="absolute inset-0 z-10 pointer-events-none rounded-2xl border-3 border-transparent transition-colors duration-300"></div>
                    </div>
                    
                    <div class="mt-6">
                        <h4 class="text-xl font-medium text-black transition-colors truncate w-full">
                            <span class="mr-1">{{ item.category }}</span>{{ item.title }}
                        </h4>
                        <p class="text-base font-medium text-black/40 mt-1">{{ item.date }}</p>
                    </div>
                </a>
            </swiper-slide>
        </swiper>
    </div>
</template>

<style scoped>
</style>