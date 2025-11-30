<script setup lang="ts">
import { computed } from "vue";

interface Props {
  class?: string;
  style?: string | Array<string> | Record<string, string>;
}

const props = defineProps<Props>();

const mergedClass = computed(() => {
  return ["", props.class].filter(Boolean).join(" ");
});
</script>

<template>
  <span :class="mergedClass">
    <slot />
  </span>
</template>
