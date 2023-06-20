<script setup lang="ts">
import { useMainStore } from '@/store';
import TextField from '@/components/TextField.vue';

const { headlineText, bodyText } = storeToRefs(useMainStore());
</script>
<template>
  <div class="max-w-[500px]">
    <div class="text-2xl font-bold">Input Texts</div>
    <div class="mt-4">
      <text-field v-model="headlineText" label="Headline"/>
    </div>
    <div class="mt-4">
      <text-field v-model="bodyText" label="Body Text"/>
    </div>
  </div>
</template>
