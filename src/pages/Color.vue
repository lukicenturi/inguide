<script setup lang="ts">
import { useMainStore } from '@/store';
import { ColorOptions } from '@/data/colors';

const { selectedColor } = storeToRefs(useMainStore());
</script>
<template>
  <div class="grid grid-cols-3 lg:grid-cols-6 h-full w-full max-w-[1200px]">
    <div
      v-for="item in ColorOptions"
      :key="item"
      class="h-4/5 cursor-pointer transition box-content border-4"
      :class="item === selectedColor ? 'border-black transform translate-y-5' : 'border-transparent'"
      @click="selectedColor = item"
    >
      <div :style="{ backgroundColor: item }" class="w-full h-full"></div>
    </div>
  </div>
</template>
