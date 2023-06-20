<script setup lang="ts">
withDefaults(defineProps<{
  modelValue: string,
  label: string,
  type?: string,
}>(), {
  type: 'text'
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>
<template>
  <div class="mb-6">
    <label class="outline-0">
      <div class="text-sm mb-2">{{ label }}</div>
      <input class="w-full rounded-md border-none bg-gray-200 focus:bg-gray-300 outline-0 focus:outline-0 px-4 py-2 shadow-none focus:ring-0 transition-all" :type="type" :value="modelValue" @input="emit('update:modelValue', $event.target.value)">
    </label>
  </div>
</template>
