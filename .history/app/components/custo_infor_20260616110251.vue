<script setup lang="ts">
import { ref } from 'vue'
import TitleH4 from '../components/title_h4.vue'
import Button from '../components/btn.vue'

const currentStep = ref(1)

defineEmits(['nextStep'])

const formModels = ref<Record<string, any>>({
  gender: '',
  age: '',
  interest: []
})

const formSections = ref([
  {
    id: 'gender',
    label: '성별',
    type: 'radio',
    wrapperClass: 'flex flex-wrap gap-x-4 gap-y-[11px]',
    options: [
      { id: 'male', label: '남성' },
      { id: 'female', label: '여성' }
    ]
  },
  {
    id: 'age',
    label: '연령',
    type: 'radio',
    wrapperClass: 'grid grid-cols-3 gap-x-4 gap-y-[11px]',
    options: [
      { id: '10s', label: '10대' },
      { id: '20s', label: '20대' },
      { id: '30s', label: '30대' },
      { id: '40s', label: '40대' },
      { id: '50s', label: '50대' },
      { id: '60s', label: '60대 이상' }
    ]
  },
  {
    id: 'interest',
    label: '관심<br>정보',
    type: 'checkbox',
    wrapperClass: 'flex flex-wrap gap-x-4 gap-y-[11px]',
    options: [
      { id: 'tax', label: '세무·금융' },
      { id: 'bid', label: '입찰·계약' },
      { id: 'support', label: '지원사업·정책자금' },
      { id: 'admin', label: '행정·무역' },
      { id: 'all', label: '기타 모든 정보' }
    ]
  }
])
</script>

<template>
  <div class="w-full mx-auto flex flex-col items-center px-11.25">
    <TitleH4 text="구독 신청이 완료되었습니다!" class="text-2xl font-bold text-dark mb-6" />
    <p class="text-center text-black/70 text-lg">맞춤 소식을 전달드리기 위해<br class="max-sm:hidden">간단한 정보를 선택적으로 받고 있습니다.</p>

    <div class="w-full bg-muted-light border border-bs-gray rounded-2xl p-6 pb-8.5 flex flex-col gap-6 my-7.5 max-sm:my-5">
      <div v-for="section in formSections" :key="section.id" class="flex items-start">
        <span class="mr-4 text-lg max-md:text-base font-medium text-black flex-shrink-0" v-html="section.label"></span>
        <div :class="section.wrapperClass" class="max-sm:flex max-sm:flex-wrap">
          <template v-for="(item, index) in section.options" :key="item.id">
            <label class="flex items-center text-bace text-[#6C757D] cursor-pointer">
              <input :type="section.type" :name="section.id" :value="item.id" v-model="formModels[section.id]" class="appearance-none w-5 h-5 rounded-full border border-[#CED4DA] bg-white checked:border-primary checked:bg-primary mr-2 max-sm:mr-1.5 max-sm:w-4 max-sm:h-4 max-sm:flex-wrap">
              {{ item.label }}
            </label>
          </template>
        </div>
      </div>
    </div>

    <Button @click="$emit('nextStep')" text="맞춤 정보 저장하기" class="bg-primary text-white py-4.5 px-14" hideArrow />
  </div>
</template>

<style scoped>
input[type="radio"]:checked, input[type="checkbox"]:checked {
  background-color: var(--primary, #007bff);
  border-color: var(--primary, #007bff);
}
</style>