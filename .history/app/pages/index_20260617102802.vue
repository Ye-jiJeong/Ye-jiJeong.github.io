<script setup lang="ts">
import TitleH1 from '../components/title_h1.vue'
import Visual from '../components/Visual.vue'
import TitleP from '../components/title_p.vue'
import Button from '../components/btn.vue'
import UseLogo from '../components/UseLogo.vue'

import CreditRating from '../components/credit_rating.vue'
import BannerEvent from '../components/banner_event.vue'
import Certified from '../components/certified.vue'

import BannerReview from '../components/banner_review.vue'
import Information from '../components/information.vue'
import Query from '../components/query.vue'
import Support from '../components/support.vue'
</script>

<template>
  <section class="bg-gradient-to-b from-slate-100 to-white pt-20 max-lg:pt-16 max-md:pt-10">
    <div class="w-full max-w-[1140px] mx-auto px-8 max-lg:px-6 max-md:px-4 text-center">
      <div>
        <p class="text-xl max-md:text-base max-sm:text-sm font-medium inline-flex justify-center items-center py-2.5 max-md:py-1.5 px-4 bg-white rounded-lg">
          <icon name="solar:shield-check-bold" class="text-teal-500 me-2 text-2xl max-lg:text-xl max-md:text-lg inline-block" />사업자 전용 인증센터
        </p>
        
        <TitleH1 text="사업자 공동인증서, 하나면 됩니다" class="w-60 m-auto leading-snug sm:leading-none sm:w-full mt-6.5 max-lg:mt-5 max-md:mt-4 mb-6 max-lg:mb-4" />
        <TitleP text="홈택스·나라장터·정책자금·보증기금·금융까지 모든 인증업무 한 번에 해결" class="w-65 m-auto sm:w-full" />
        <Button text="나에게 맞는 신청 방법 찾기" class="bg-inverted text-white py-5 px-10 !text-2xl font-medium mt-6 max-md:mt-5 shadow-md max-lg:py-4 max-lg:px-8 max-lg:text-xl max-md:px-6 max-md:text-lg" />
      </div>
    
      <Visual class="mt-15 max-lg:mt-12 max-md:mt-8" />

      <UseLogo class="mt-11 max-lg:mt-10 max-md:mt-8 bg-slate-100 rounded-3xl max-md:rounded-2xl  px-5 py-7.5 lg:px-8.5 lg:py-7.5" />
    </div>
  </section>

  <section class="bg-gradient-to-b to-[#F1F6FD] from-white ">
    <div class="w-full max-w-[1140px] mx-auto px-8 max-lg:px-6 max-md:px-4">
      <div class="mt-16 max-lg:mt-12 max-md:mt-10 grid grid-cols-12 max-lg:grid-cols-1 gap-8 max-lg:gap-6">
        <CreditRating class="col-span-8 max-lg:col-span-1" />
        <BannerEvent class="col-span-4 max-lg:col-span-1" />
      </div>

      <Certified class="mt-23 max-lg:mt-16 max-md:mt-12 pb-10 max-md:pb-8" />
    </div>
  </section>

  <section>
    <div class="w-full max-w-[1140px] mx-auto">
      <BannerReview class="px-8 max-lg:px-6 max-md:px-4" />
      <Information class="my-23 max-lg:my-16 max-md:my-12 px-8 max-lg:px-6 max-md:px-4" />

      <div class="flex justify-between items-start gap-7.5 max-lg:gap-8 mb-19 max-lg:mb-16 max-md:mb-12 px-8 max-lg:px-6 max-md:px-4 max-lg:flex-col">
        <Query class="flex-1 max-lg:w-full" />
        <Support class="max-w-[32rem] max-lg:w-full max-lg:max-w-none" />
      </div>
    </div>
  </section>

</template>

<style scoped>
@reference "~/assets/css/main.css";

</style>