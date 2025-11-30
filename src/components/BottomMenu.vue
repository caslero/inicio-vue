<script setup lang="ts">
import Button from "@/components/padres/Button.vue";

const props = defineProps<{
  funcionNext: () => void;
}>();
</script>

<template>
  <Button
    @click="props.funcionNext"
    type="button"
    aria-label="Open/Close"
    class="block sm:hidden text-gray-400 text-4xl hover:font-medium"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="w-6 h-6 fill-gray-500 hover:fill-blue-600 transition-colors"
    >
      <path d="M3 4H21V6H3V4Z" />
      <path d="M3 11H21V13H3V11Z" />
      <path d="M3 18H21V20H3V18Z" />
    </svg>
  </Button>
</template>
