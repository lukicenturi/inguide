<script setup lang="ts">
import { useMainStore } from '@/store';
import { LogoOptions } from '@/data/logo';
import { PhotographyOptions } from '@/data/photography';

const { selectedPhotography } = storeToRefs(useMainStore());
</script>
<template>
  <div class="grid lg:grid-cols-2 h-full max-w-[1200px]">
    <div
      v-for="item in PhotographyOptions"
      :key="item.id"
      class="outline outline-gray-100 outline-1 p-6 h-full cursor-pointer transition border-4 flex items-center justify-center"
      :class="item.id === selectedPhotography ? 'border-black' :  'border-transparent'"
      @click="selectedPhotography = item.id"
    >
      <img :src="item.src" class="w-full h-full select-none object-contain" draggable="false" />
    </div>
  </div>
</template>
