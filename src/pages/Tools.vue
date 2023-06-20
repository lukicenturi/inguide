<template>
  <div>
    Feature DEIN-1
  </div>
  <div class="mt-12 text-3xl">
    Choose DEIN-1 tools.
  </div>
  <div class="grid lg:grid-cols-2 gap-8 xl:gap-16 my-8 max-w-[700px]">
    <div>
      <div>
        <div>
          You already synchronized brand guideline?
        </div>
        <div class="font-bold">
          Let’s start generate design here..
        </div>
      </div>
      <div class="group mt-8 rounded-md p-6 pb-10 text-center border border-black cursor-pointer" @click="$router.push(Routes.LOGO_ROUTE)">
        <div class="font-medium text-2xl">AI Design System</div>
        <div class="flex justify-center mt-8">
          <img src="/img/loading/inner.png" class="w-[120px] h-[120px]">
        </div>
        <div class="mt-8">
          <button class="group-hover:bg-yellow w-full rounded border border-black px-4 py-3 transition-all">Choose Generate</button>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div>
          Do you have brand guideline?
        </div>
        <div class="font-bold">
          Sync your digital brand guideline here..
        </div>
      </div>
      <div class="mt-8 rounded-md p-6 pb-10 text-center border border-gray-300 select-none">
        <div class="font-medium text-2xl text-gray-400">Digital Brand Guideline</div>
        <div class="flex justify-center mt-8">
          <img src="/img/digital-brand-guideline.png" class="w-[120px] h-[120px] opacity-40">
        </div>
        <div class="mt-8">
          <button class="w-full rounded border border-gray-300 px-4 py-3 bg-gray-100 text-gray-400" disabled>Choose Sync</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Routes from '@/router';
</script>
