<script setup>
import quick1 from '../img/common/quick1.svg'
import quick2 from '../img/common/quick2.svg'
import quick3 from '../img/common/quick3.svg'

import quick1_hover from '../img/common/quick1_hover.svg'
import quick2_hover from '../img/common/quick2_hover.svg'
import quick3_hover from '../img/common/quick3_hover.svg'

const quickMenu = [
  { id: 1, text: '발급', icon: 'ci:download' },
  { id: 2, text: '갱신', img: quick1, hoverImg: quick1_hover },
  { id: 3, text: '재발급', img: quick2, hoverImg: quick2_hover },
  { id: 4, text: '관리', img: quick3, hoverImg: quick3_hover }
]

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
</script>

<template>
  <div class="fixed right-10 max-xl:!right-5 top-65 flex w-17.5 flex-col justify-center gap-3 hidden lg:flex z-15">
    <div class="flex flex-col rounded-xl bg-white py-3 shadow-sm">
      <button v-for="item in quickMenu" :key="item.id" class="group mx-3.5 flex flex-col items-center border-b border-gray-200 pt-3.25 pb-2 hover:text-primary last:border-b-0 cursor-pointer">
        <icon v-if="item.icon" :name="item.icon" class="mb-2.5 text-2xl" />
        
        <div v-else class="mb-2.5 w-6 h-6 relative">
          <img :src="item.img" :alt="item.text" class="absolute inset-0 w-full h-full object-contain group-hover:opacity-0 transition-opacity duration-200" />
          <img :src="item.hoverImg" :alt="item.text" class="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>

        {{ item.text }}
      </button>
    </div>

    <div class="flex w-full aspect-square flex-col justify-center rounded-full bg-white shadow-sm">
      <button @click="scrollToTop" class="flex flex-col items-center justify-center bg-transparent leading-none text-lg hover:text-primary cursor-pointer">
        <icon name="fa6-solid:angle-up" class="text-base mb-0.5" />TOP
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>