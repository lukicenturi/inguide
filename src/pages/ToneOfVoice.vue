<script setup lang="ts">
import { ToneOfVoiceOptions } from '@/data/tone-of-voice';
import { useMainStore } from '@/store';

const { selectedToneOfVoice } = storeToRefs(useMainStore());
</script>
<template>
  <div class="grid grid-cols-2 h-full w-[1200px]">
    <div
      v-for="item in ToneOfVoiceOptions"
      :key="item.id"
      class="outline outline-gray-100 outline-1 p-6 h-full cursor-pointer transition border-4"
      :class="item.id === selectedToneOfVoice ? 'border-black' :  'border-transparent'"
      @click="selectedToneOfVoice = item.id"
    >
      <div>{{ item.label }}</div>
      <div class="mt-4">{{ item.description }}</div>
    </div>
  </div>
</template>
