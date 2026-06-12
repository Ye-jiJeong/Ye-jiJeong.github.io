<script setup lang="ts">
import type {PageLink} from '@nuxt/ui'

const tailwindLinks = ref<PageLink[]>([
  {label: 'Spacing', to: 'https://tailwindcss.com/docs/padding', target: '_blank'},
  {label: 'Sizing', to: 'https://tailwindcss.com/docs/width', target: '_blank'},
  {label: 'Typography', to: 'https://tailwindcss.com/docs/font-family', target: '_blank'},
  {label: 'Backgrounds', to: 'https://tailwindcss.com/docs/background-attachment', target: '_blank'},
  {label: 'Borders', to: 'https://tailwindcss.com/docs/border-radius', target: '_blank'},
  {label: 'Effects', to: 'https://tailwindcss.com/docs/box-shadow', target: '_blank'},
  {label: 'Tables', to: 'https://tailwindcss.com/docs/border-collapse', target: '_blank'},
  {label: 'Transitions & Animation', to: 'https://tailwindcss.com/docs/transition-property', target: '_blank'},
  {label: 'Transforms', to: 'https://tailwindcss.com/docs/backface-visibility', target: '_blank'},
])

const nuxtUILinks = ref<PageLink[]>([
  {label: 'Layout', to: 'https://ui.nuxt.com/docs/components/app', target: '_blank'},
  {label: 'Element', to: 'https://ui.nuxt.com/docs/components/alert', target: '_blank'},
  {label: 'Form', to: 'https://ui.nuxt.com/docs/components/checkbox', target: '_blank'},
  {label: 'Data', to: 'https://ui.nuxt.com/docs/components/accordion', target: '_blank'},
  {label: 'Navigation', to: 'https://ui.nuxt.com/docs/components/breadcrumb', target: '_blank'},
  {label: 'Overlay', to: 'https://ui.nuxt.com/docs/components/context-menu', target: '_blank'},
  {label: 'Page', to: 'https://ui.nuxt.com/docs/components/auth-form', target: '_blank'},
  {label: 'Dashboard', to: 'https://ui.nuxt.com/docs/components/dashboard-group', target: '_blank'},
  {label: 'Content', to: 'https://ui.nuxt.com/docs/components/content-navigation', target: '_blank'},
])

const iconLinks = ref<PageLink[]>([
  {label: 'XEIcon 2.4.0', to: 'https://xpressengine.github.io/XEIcon/library-2.4.0.html', target: '_blank'},
  {label: 'Iconify', to: 'https://icon-sets.iconify.design/', target: '_blank'},
])

const semanticColors = ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'] as const
const colors = ['red', 'orange', 'amber', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'mauve', 'olive', 'mist', 'taupe']
const colorValues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
</script>

<template>
  <div>
    <UCard class="mb-10">
      <div class="flex p-4">
        <aside class="w-64">
          <UPageLinks title="Tailwind 가이드 바로가기" :links="tailwindLinks"/>
        </aside>
        <aside class="w-64">
          <UPageLinks title="Nuxt UI 가이드 바로가기" :links="nuxtUILinks"/>
        </aside>
        <aside>
          <UPageLinks title="Icon 바로가기" :links="iconLinks"/>
        </aside>
      </div>
    </UCard>
    <div>
      <p class="text-xs">text-xs: 가나다라</p>
      <p class="text-sm">text-sm: 가나다라</p>
      <p class="text-base">text-base: 가나다라</p>
      <p class="text-lg">text-lg: 가나다라</p>
      <p class="text-xl">text-xl: 가나다라</p>
      <p class="text-2xl">text-2xl: 가나다라</p>
      <p class="text-3xl">text-3xl: 가나다라</p>
      <p class="text-4xl">text-4xl: 가나다라</p>
      <p class="text-5xl">text-5xl: 가나다라</p>
      <p class="text-6xl">text-6xl: 가나다라</p>
      <p class="text-7xl">text-7xl: 가나다라</p>
      <p class="text-8xl">text-8xl: 가나다라</p>
      <p class="text-9xl">text-9xl: 가나다라</p>
      <p class="text-[30px]">text-[30px]: 가나다라</p>
      <br/>
      <p class="font-thin">font-thin: 가나다라</p>
      <p class="font-extralight">font-extralight: 가나다라</p>
      <p class="font-light">font-light: 가나다라</p>
      <p class="font-normal">font-normal: 가나다라</p>
      <p class="font-medium">font-medium: 가나다라</p>
      <p class="font-semibold">font-semibold: 가나다라</p>
      <p class="font-bold">font-bold: 가나다라</p>
      <p class="font-extrabold">font-extrabold: 가나다라</p>
      <p class="font-black">font-black: 가나다라</p>
      <p class="font-black">font-black: 가나다라</p>
      <p class="font-[500]">font-[500]: 가나다라</p>
      <br/>
      <div class="flex flex-wrap text-sm">
        <div v-for="color in colors" class="w-34 mb-1">
          <p v-for="colorValue in colorValues" :class="`text-${color}-${colorValue} pl-1`">text-{{ color }}-{{ colorValue }}</p>
        </div>
        <div class="w-34 mb-1">
          <p class="text-black pl-1">text-black</p>
          <p class="text-white pl-1 bg-black">text-white</p>
        </div>
      </div>
      <br/>
      <div class="flex flex-wrap text-sm">
        <div v-for="color in colors" class="w-34 mb-1">
          <p v-for="colorValue in colorValues" :class="`bg-${color}-${colorValue} pl-1`">bg-{{ color }}-{{ colorValue }}</p>
        </div>
        <div class="w-34 mb-1">
          <p class="bg-black pl-1 text-white">bg-black</p>
          <p class="bg-white pl-1">bg-white</p>
        </div>
      </div>
      <!-- -->
      <USeparator class="my-3"/>
      <h2>Badge</h2>
      <div class="flex gap-2">
        <UBadge v-for="semanticColor in semanticColors" :color="semanticColor">{{ semanticColor }}</UBadge>
      </div>
      <!-- -->
      <USeparator class="my-3"/>
      <h2>Button</h2>
      <div class="flex gap-2">
        <UButton v-for="semanticColor in semanticColors" :color="semanticColor">{{ semanticColor }}</UButton>
      </div>
      <!-- -->
      <USeparator class="my-3"/>
      <h2>Chip</h2>
      <div class="flex gap-2">
        <UChip v-for="semanticColor in semanticColors" :color="semanticColor">
          <UButton color="neutral" variant="subtle">{{ semanticColor }}</UButton>
        </UChip>
      </div>
      <!-- -->
      <USeparator class="my-3"/>
      <h2>Alert</h2>
      <div>
        <UAlert v-for="semanticColor in semanticColors" :color="semanticColor" :title="semanticColor" icon="i-lucide-terminal" class="mb-1"></UAlert>
      </div>
      <!-- -->
      <USeparator class="my-3"/>
      <h2>Banner</h2>
      <div>
        <UBanner v-for="semanticColor in semanticColors" :color="semanticColor" :title="semanticColor" class="mb-1" close></UBanner>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>