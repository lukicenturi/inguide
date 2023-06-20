<script setup lang="ts">
import Routes from '@/router';
import { type Menu } from '@/types/menu';
import Master from '@/layouts/master.vue';

const menus: Menu[] = [
  { route: Routes.TOOLS_ROUTE, label: 'Tools'},
]
</script>
<template>
  <master :menus="menus" show-user />
</template>
