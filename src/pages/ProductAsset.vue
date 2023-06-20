<script setup lang="ts">
import { useMainStore } from '@/store';
import { ProductAssetOptions } from '@/data/product-asset';

const { selectedProductAsset } = storeToRefs(useMainStore());
</script>
<template>
  <div class="grid grid-cols-2 h-full w-[1200px]">
    <div
      v-for="item in ProductAssetOptions"
      :key="item.id"
      class="outline outline-gray-100 outline-1 p-6 h-1/2 cursor-pointer transition border-4 flex items-center justify-center"
      :class="item.id === selectedProductAsset ? 'border-black' :  'border-transparent'"
      @click="selectedProductAsset = item.id"
    >
      <img :src="item.preview" class="w-full h-full select-none object-contain" draggable="false" />
    </div>
  </div>
</template>
