<script setup lang="ts">
import Routes from '@/router';

interface Menu {
  route: typeof Routes,
  label: string
}

const menus: Menu[] = [
  { route: Routes.TONE_OF_VOICE_ROUTE, label: 'Tone of Voice'},
  { route: Routes.LOGO_ROUTE, label: 'Logo'},
  { route: Routes.COLOR_ROUTE, label: 'Color'},
  { route: Routes.TYPOGRAPHY_ROUTE, label: 'Typography'},
  { route: Routes.BRAND_EXPRESSION_ROUTE, label: 'Brand Expression'},
  { route: Routes.GRID_ROUTE, label: 'Grid'},
  { route: Routes.PRODUCT_ASSET_ROUTE, label: 'Product Asset'},
  { route: Routes.PHOTOGRAPHY_ROUTE, label: 'Photography'},
  { route: Routes.ICONOGRAPHY_ROUTE, label: 'Iconography'},
  { route: Routes.ILLUSTRATION_ROUTE, label: 'Illustration'},
  { route: Routes.DATA_VISUALIZATION_ROUTE, label: 'Data Visualization'},
  { route: Routes.FINAL_COMPOSITION_ROUTE, label: 'Final Composition'},
]
</script>
<template>
  <div class="h-screen flex">
    <div class="h-full p-6 w-[400px]">
      <div class="divide-y border-t border-b">
        <div v-for="menu in menus">
          <router-link :to="menu.route" active-class="[&>div]:bg-gray-100">
            <div class="py-2">{{ menu.label}}</div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="h-full p-6">
      <div class="h-full">
        <router-view />
      </div>
    </div>
  </div>
</template>
