<script setup>
import { ref, computed } from 'vue';
import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-vue-next';

const currentPage = ref(1);
const totalPages = ref(12);

// 화면에 보여질 페이지와 말줄임표(...)를 계산하는 함수
const visiblePages = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;
  
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 3) {
    return [1, 2, 3, 4, '...', total];
  } else if (current >= total - 2) {
    return [1, '...', total - 3, total - 2, total - 1, total];
  } else {
    return [1, '...', current - 1, current, current + 1, '...', total];
  }
});

const changePage = (page) => {
  currentPage.value = page;
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const arrowClass = 'p-2 [&>svg]:w-5 [&>svg]:h-5 transition-colors hover:text-blue-600 disabled:text-slate-200 disabled:cursor-not-allowed';
</script>


<template>
  <div class="mt-10 flex justify-center items-center text-lg text-slate-400">
    <button :class="arrowClass" :disabled="currentPage === 1" @click="changePage(1)"><ChevronsLeft /></button>
    <button :class="arrowClass" :disabled="currentPage === 1" @click="prevPage"><ChevronLeft /></button>

    <template v-for="(item, index) in visiblePages" :key="index">
      <span v-if="item === '...'" class="w-10.5 h-10.5 flex items-center justify-center text-slate-400">...</span>
      <button 
        v-else
        :class="[
          'w-10.5 h-10.5 flex items-center justify-center transition-colors',
          currentPage === item 
            ? 'bg-blue-600 text-white' 
            : 'text-slate-600 hover:bg-slate-50 cursor-pointer'
        ]"
        @click="changePage(item)"
      >
        {{ item }}
      </button>
    </template>

    <button :class="arrowClass" :disabled="currentPage === totalPages" @click="nextPage"><ChevronRight /></button>
    <button :class="arrowClass" :disabled="currentPage === totalPages" @click="changePage(totalPages)"><ChevronsRight /></button>
  </div>
</template>


<style scoped>
</style>