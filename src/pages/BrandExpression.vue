<script setup lang="ts">
import { useMainStore } from '@/store';
import { BrandExpressionOptions } from '@/data/brand-expression';

const { selectedBrandExpression } = storeToRefs(useMainStore());
</script>
<template>
  <div class="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 h-full max-w-[1200px]">
    <div
      v-for="item in BrandExpressionOptions"
      :key="item.id"
      class="outline outline-gray-100 outline-1 p-6 h-full cursor-pointer transition border-4 flex items-center justify-center"
      :class="item.id === selectedBrandExpression ? 'border-black' :  'border-transparent'"
      @click="selectedBrandExpression = item.id"
    >
      <img :src="item.preview" class="w-full h-full select-none" draggable="false" />
    </div>
  </div>
</template>
