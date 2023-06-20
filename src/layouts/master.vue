<script setup lang="ts">
import { type Menu } from '@/types/menu';
import Routes from '@/router';

withDefaults(
  defineProps<{
    menus: Menu[],
    showUser?: boolean
  }>(), {
    showUser: false
  }
);
</script>
<template>
  <div class="h-full flex">
    <div class="h-full p-6 w-[250px] lg:w-[400px] min-w-[250px] flex flex-col justify-between">
      <div class="divide-y border-t border-b">
        <div v-for="menu in menus">
          <router-link :to="menu.route" active-class="[&>div]:bg-gray-100">
            <div class="py-2">{{ menu.label}}</div>
          </router-link>
        </div>
      </div>
      <div title="Go To Login Page" class="cursor-pointer" @click="$router.push(Routes.INDEX_ROUTE)">
        <img src="/img/logo/horizontal.svg" alt="">
      </div>
    </div>
    <div class="h-full p-6 flex-grow overflow-y-auto">
      <div class="h-full flex-grow flex flex-col">
        <div v-if="showUser" class="pb-4 flex justify-end space-x-2">
          <div class="cursor-pointer rounded-full bg-black text-white w-10 h-10 flex items-center justify-center font-bold">M</div>
          <div class="cursor-pointer rounded-full border border-black w-10 h-10 flex items-center justify-center font-bold">
            <img src="/img/example/logo/1.png" alt="">
          </div>
        </div>
        <div class="flex-grow">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
