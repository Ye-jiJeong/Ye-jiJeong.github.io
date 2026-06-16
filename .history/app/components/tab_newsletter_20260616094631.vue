<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  selectedTab: {
    type: String,
    default: 'subscribe'
  }
})

defineEmits(['changeTab'])

const tabs = ref([{ id: 'subscribe', label: '구독신청' }, { id: 'unsubscribe', label: '구독취소' }])
</script>

<template>
  <ul class="flex gap-2 mb-7 mt-1.5 border border-bs-gray bg-muted-light p-1.75 rounded-lg max-sm:flex-col max-sm:w-full max-sm:justify-center">
    <li v-for="tab in tabs" :key="tab.id">
      <a href="" @click.prevent="$emit('changeTab', tab.id)" 
       :class="['py-2 px-7 font-medium text-lg rounded-lg block', selectedTab === tab.id ? 'bg-white border border-primary text-primary' 
       : 'text-[#6C757D] border border-transparent']"> {{ tab.label }}
      </a>
    </li>
  </ul>
</template>