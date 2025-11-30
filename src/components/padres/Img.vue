<script setup lang="ts">
defineProps<{
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  class?: string | string[] | Record<string, boolean>;
  lazy?: boolean;
}>();
</script>

<template>
  <img
    :src="src ?? ''"
    :alt="alt ?? ''"
    :width="width"
    :height="height"
    :loading="lazy ? 'lazy' : 'eager'"
    :class="class"
  />
</template>
