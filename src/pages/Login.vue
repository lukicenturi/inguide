<script setup lang="ts">
import TextField from '@/components/TextField.vue';
import Routes from '@/router';
</script>
<template>
  <div>
    Login DEIN-1
  </div>

  <div class="text-2xl mt-12">
    <div>
      HI, WELCOME TO DEIN-1,
    </div>
    <div class="font-medium">
      Consistent Design Created in Just a Snap️!⚡
    </div>
  </div>

  <form class="my-8 max-w-[600px]" @submit.prevent="$router.push(Routes.TOOLS_ROUTE)">
    <div>
      <text-field label="Company Code" model-value="gojekdesign" />
    </div>

    <div>
      <text-field label="Username Use" model-value="michael@gojek.design" />
    </div>

    <div>
      <text-field label="Password User" type="password" model-value="karyaanakbangsa2023" />
    </div>

    <div class="flex items-center md:space-x-4 mt-8">
      <button type="submit" class="rounded-md bg-black text-white py-2 px-4">Login</button>
      <button class="rounded-md bg-transparent border-none hover:bg-gray-200 py-2 px-4 transition-all">Sign Up</button>
      <button class="rounded-md bg-transparent border-none hover:bg-gray-200 py-2 px-4 transition-all">Reset Password</button>
    </div>
    <div class="mt-8">
      <div >No account? <a class="cursor-pointer hover:text-blue-500">Create one</a></div>
    </div>
  </form>
</template>
