<script setup lang="ts">
import Routes from '@/router';
import { type Menu } from '@/types/menu';
import Master from '@/layouts/master.vue';


const menus: Menu[] = [
  // { route: Routes.TONE_OF_VOICE_ROUTE, label: 'Tone of Voice'},
  { route: Routes.LOGO_ROUTE, label: 'Logo'},
  { route: Routes.COLOR_ROUTE, label: 'Color'},
  { route: Routes.GRID_ROUTE, label: 'Grid'},
  { route: Routes.BRAND_EXPRESSION_ROUTE, label: 'Brand Expression'},
  { route: Routes.PHOTOGRAPHY_ROUTE, label: 'Photography'},
  // { route: Routes.PRODUCT_ASSET_ROUTE, label: 'Product Asset'},
  // { route: Routes.TYPOGRAPHY_ROUTE, label: 'Typography'},
  { route: Routes.TEXT_ROUTE, label: 'Text'},
  // { route: Routes.ICONOGRAPHY_ROUTE, label: 'Iconography'},
  // { route: Routes.ILLUSTRATION_ROUTE, label: 'Illustration'},
  // { route: Routes.DATA_VISUALIZATION_ROUTE, label: 'Data Visualization'},
  { route: Routes.FINAL_COMPOSITION_ROUTE, label: 'Final Composition'},
]
</script>
<template>
  <master :menus="menus" show-user />
</template>
