<script setup lang="ts">
import { useMainStore } from '@/store';
import { ProductAssetOptions } from '@/data/product-asset';
import { IconOptions } from '@/data/icon';

const { selectedIcons } = storeToRefs(useMainStore());
</script>
<template>
  <div class="grid grid-cols-2 h-full w-[1200px]">
    <div
      v-for="item in IconOptions"
      :key="item.id"
      class="outline outline-gray-100 outline-1 p-6 h-full cursor-pointer transition border-4 flex flex-col"
      :class="item.id === selectedIcons ? 'border-black' :  'border-transparent'"
      @click="selectedIcons = item.id"
    >
      <div class="flex justify-end mb-4">
        <div class="bg-gray-100 px-2 py-1 rounded">{{ item.id }}</div>
      </div>
      <div class="p-4" :style="{ backgroundColor: item.previewBackground }">
        <img :src="item.preview" class="select-none object-contain" draggable="false" />
      </div>
    </div>
  </div>
</template>
