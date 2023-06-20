<script setup lang="ts">
import { useMainStore } from '@/store';
import { LogoOptions } from '@/data/logo';

const { selectedLogo } = storeToRefs(useMainStore());
</script>
<template>
  <div class="grid grid-cols-2 h-full w-[1200px]">
    <div
      v-for="item in LogoOptions"
      :key="item.id"
      class="outline outline-gray-100 outline-1 p-6 h-1/2 cursor-pointer transition border-4 flex items-center justify-center"
      :class="item.id === selectedLogo ? 'border-black' :  'border-transparent'"
      @click="selectedLogo = item.id"
    >
      <img :src="item.src" class="w-full h-full select-none object-contain" draggable="false" />
    </div>
  </div>
</template>
