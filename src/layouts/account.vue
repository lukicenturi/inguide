<script setup lang="ts">
import Master from '@/layouts/master.vue';
import { type Menu } from '@/types/menu';
import Routes from '@/router';
import { set, useTimeoutFn } from '@vueuse/core';

const menus: Menu[] = [
  { route: Routes.ACCOUNT_ROUTE, label: 'Account'},
]

const showLoadingOverlay: Ref<boolean> = ref(true);
const { start } = useTimeoutFn(() => {
  set(showLoadingOverlay, false);
}, 2000, { immediate: false })

onMounted(() => {
  start();
})
</script>

<template>
  <master :menus="menus" />

  <div class="fixed top-0 left-0 bg-white w-full h-full z-10 flex items-center justify-center transition-all duration-500 flex-col" :class="{ ['opacity-0 invisible']: !showLoadingOverlay }">
    <img src="/img/logo/vertical.svg" />
    <div class="mt-8 w-24 bg-gray-200 rounded-full h-2.5 overflow-hidden border border-black">
      <div class="bg-yellow h-2.5 rounded-full animate-[width_2s]"></div>
    </div>
  </div>
</template>
