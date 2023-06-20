<script setup lang="ts">
import { useMainStore } from '@/store';
import { GridOptions } from '@/data/grid';

const { selectedGrid } = storeToRefs(useMainStore());
</script>
<template>
  <div class="grid lg:grid-cols-2 lg:grid-rows-2 h-full max-w-[1200px]">
    <div
      v-for="item in GridOptions"
      :key="item.id"
      class="outline outline-gray-100 outline-1 p-6 h-full cursor-pointer transition border-4 flex items-center justify-center"
      :class="item.id === selectedGrid ? 'border-black' :  'border-transparent'"
      @click="selectedGrid = item.id"
    >
      <img :src="item.preview" class="w-full h-full select-none object-contain" draggable="false" />
    </div>
  </div>
</template>
