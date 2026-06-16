<script setup>
import { ref } from 'vue'
import TitleH5 from '../components/title_h5.vue'
import TitleH2 from './title_h2.vue'
import StickBar from '../components/stick_bar.vue'
import Navigation from '../components/navigation_bar.vue'

// img
import review1 from '../img/sub/review1.svg'
import review2 from '../img/sub/review2.svg'
import review3 from '../img/sub/review3.svg'
import review4 from '../img/sub/review4.svg'

const reviewImages = [review1, review2, review3, review4]

const reviews = ref([
  {id:1, type:'개인사업자 대리인', name:'가온푸****', date:'2024-03-17', rating:5, title:'3년형 인증서 발급', content:'가장 믿을 수 있어 보였고 검색 했을 때 바로 나온 사이트여서 이용하였습니다.'},
  {id:2, type:'법인사업자 대표', name:'가온푸****', date:'2024-03-17', rating:4.5, title:'3년형 인증서 발급', content:'가장 믿을 수 있어 보였고 검색 했을 때 바로 나온 사이트여서 이용하였습니다.'},
  {id:3, type:'개인사업자 대표', name:'가온푸****', date:'2024-03-17', rating:4, title:'3년형 인증서 발급', content:'가장 믿을 수 있어 보였고 검색 했을 때 바로 나온 사이트여서 이용하였습니다.'},
  {id:4, type:'법인사업자 대리인', name:'가온푸****', date:'2024-03-17', rating:5, title:'3년형 인증서 발급', content:'가장 믿을 수 있어 보였고 검색 했을 때 바로 나온 사이트여서 이용하였습니다.'},
  {id:5, type:'개인사업자 대리인', name:'가온푸****', date:'2024-03-17', rating:5, title:'3년형 인증서 발급', content:'가장 믿을 수 있어 보였고 검색 했을 때 바로 나온 사이트여서 이용하였습니다.'}
])

const filterCategories = ref([
  { id: 'period', selected: '', defaultText: '인증서 기간', options: ['1년형', '3년형'], widthClass: 'w-[170px] max-sm:w-[120px]' },
  { id: 'bizType', selected: '', defaultText: '사업자 유형', options: ['개인사업자', '법인사업자'], widthClass: 'w-[170px] max-sm:w-[120px]' },
  { id: 'applicant', selected: '', defaultText: '신청자', options: ['대표', '대리인'], widthClass: 'w-[130px] max-sm:w-[100px]' }
])
</script>

<template>
  <div class="w-full">
    <div class="mb-8">
      <TitleH5 text="실제 발급 · 사용 후기" />
      <p class="mt-3 text-lg text-black/80">사업자 인증서를 발급 받은 고객님들의 솔직한 후기입니다.</p>
    </div>

    <div class="px-20 py-16.25 border border-slate-100 rounded-2xl flex items-center justify-between gap-25 max-md:px-10 max-md:py-8 max-md:gap-12 max-sm:px-5 max-sm:gap-6 max-sm:flex-col">
      <div class="text-center ml-5 max-md:ml-0 flex-shrink-0">
        <p class="text-xl text-slate-900 max-md:text-lg">고객 만족도</p>
        <TitleH2 text="4.8" class="my-2.25 max-md:my-1 max-lg:!text-5xl" />
        <p class="text-base text-slate-400">(1,234건 후기)</p>
        
        <div class="flex justify-center gap-0.05 mt-4 max-md:mt-2 text-warning text-3xl">
          <icon name="ic:round-star" />
          <icon name="ic:round-star" />
          <icon name="ic:round-star" />
          <icon name="ic:round-star" />
          <icon name="material-symbols:star-half-rounded" />
        </div>
      </div>
      
      <div class="w-full">
        <p class="text-slate-500 max-md:text-sm">1,234명의 실제 고객님들의 후기 입니다.</p>
        
        <div class="mt-3 flex flex-col gap-3 max-md:gap-2">
          <StickBar label="최고예요" :percentage="70" textClass="text-primary/95" />
          <StickBar label="추천해요" :percentage="20" barClass="bg-primary/20" textClass="text-gray-400" />
          <StickBar label="괜찮아요" :percentage="5" barClass="bg-primary/20" textClass="text-gray-400" />
          <StickBar label="아쉬워요" :percentage="3" barClass="bg-primary/20" textClass="text-gray-400" />
          <StickBar label="별로예요" :percentage="2" barClass="bg-primary/20" textClass="text-gray-400" />
        </div>
      </div>
    </div>

    <div class="mt-13.5 flex items-center justify-between border-slate-100 mb-4 max-md:mt-8 max-sm:flex-wrap max-sm:gap-3">
      <div class="flex gap-2 mb-7.5 max-sm:mb-0">
        <div v-for="category in filterCategories" :key="category.id" class="relative">
          <select 
            v-model="category.selected" 
            :class="['appearance-none border border-slate-200 rounded-lg py-2 px-4 max-md:px-3 text-base max-md:text-sm text-slate-700 cursor-pointer focus:outline-none focus:border-blue-500', category.widthClass]"
          >
            <option value="">{{ category.defaultText }}</option>
            <option v-for="(opt, idx) in category.options" :key="idx" :value="opt">{{ opt }}</option>
          </select>
          
          <icon name="bxs:down-arrow" class="absolute right-4.5 max-md:right-3 top-1/2 -translate-y-1/2 text-xs max-md:scale-75 text-slate-500" />
        </div>
      </div>

      <div class="flex items-center text-base max-md:text-sm mb-7.5 max-sm:mb-0">
        <button class="text-primary">최신순</button>
        <button class="text-slate-900 before:content-['|'] before:text-slate-200 before:px-4 max-md:before:px-2">평점순</button>
      </div>
    </div>

    <div class="flex flex-col gap-7.5 max-md:gap-4">
      <div 
        v-for="(review, index) in reviews" 
        :key="review.id" 
        class="py-8 px-6 flex items-start gap-4 border-b border-slate-200 rounded-3xl max-md:py-6 max-sm:rounded-none max-sm:flex-wrap"
      >
        <img :src="reviewImages[index % 4]" alt="고객 프로필" class="flex-shrink-0 max-md:w-12 max-md:h-12 max-sm:self-stretch max-sm:w-auto max-sm:object-cover" />

        <div class="min-w-0 flex-1 flex flex-col">
          <div class="flex items-center justify-between w-full gap-4 max-md:gap-2 max-sm:flex-col max-sm:items-start max-sm:gap-1.5">
      
            <div class="flex items-center gap-4 max-md:gap-2 flex-wrap max-sm:flex-col max-sm:items-start max-sm:gap-1">
              <div class="flex items-center text-warning text-2xl">
                <icon name="ic:round-star" v-for="n in Math.floor(review.rating)" :key="'full-' + n" />
                <icon name="material-symbols:star-half-rounded" v-if="review.rating % 1 !== 0" />
                <icon name="material-symbols:star-outline-rounded" v-for="n in 5 - Math.ceil(review.rating)" :key="'empty-' + n" />
              </div>
              <span class="text-lg font-semibold text-primary">{{ review.title }}</span>
            </div>

            <div class="text-right text-sm text-slate-700/40 whitespace-nowrap flex-shrink-0 max-sm:text-left max-sm:whitespace-normal max-sm:mt-0.5">
              <span class="text-slate-500 max-sm:hidden">{{ review.type }}</span>
              <span class="before:content-['|'] before:text-slate-200 before:px-2 max-sm:before:hidden after:content-['|'] after:text-slate-200 after:px-2">{{ review.name }}</span>
              <span>{{ review.date }}</span>
            </div>

          </div>

          <p class="text-lg mt-2 max-md:text-base max-md:mt-1 leading-relaxed text-slate-900 w-full max-sm:hidden">{{ review.content }}</p>
          
        </div>
        <p class="w-full text-base mt-4 leading-relaxed text-slate-900 sm:hidden">{{ review.content }}</p>
      </div>
    </div>

    <Navigation />
  </div>
</template>

<style scoped>
</style>