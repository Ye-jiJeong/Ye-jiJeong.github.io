<script setup>
import Button from './btn.vue'

const ratingServices = ['나이스디앤비', '크레딧노트']
</script>

<template>
    <div class="bg-cover bg-center text-inverted p-10 md:p-12 md:pt-14 rounded-2xl text-left max-md:cursor-pointer max-md:active:scale-[0.99] transition-transform">
        <a href="" class="bg-primary">
            <h3 class="text-xl sm:text-3xl font-medium md:text-4xl md:font-bold">기업 신용평가 서비스</h3>
            <p class="text-base font-normal w-40 sm:w-45 md:text-lg mt-2.5 md:w-60 md:mb-4 md:font-medium">조달청 및 공공기관 입찰에 필요한 신용등급확인서 바로 발급</p>

            <ul class="max-md:hidden flex gap-11 text-lg font-medium">
                <li v-for="service in ratingServices" :key="service" class="flex items-center">
                    <icon name="material-symbols:check-rounded" class="text-2xl mr-2" /> {{ service }}
                </li>
            </ul>

            <Button text="신용등급 확인하기" class="max-md:hidden bg-white text-black mt-10 py-2.5 px-6.25 text-xl font-medium" />
        </a>
    </div>
</template>

<style scoped>
div {
    background: url(../img/main/credit_rating.svg) no-repeat right 54px bottom 50px, var(--color-primary);
}

@media (max-width: 767px) {
    div {
        background-position: right 20px center;
        background-size: 30cqw;
    }
}
</style>
