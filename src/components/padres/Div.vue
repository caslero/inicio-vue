<script setup lang="ts">
import { computed } from "vue";

interface Props {
  class?: string | string[] | Record<string, boolean>;
}

const props = defineProps<Props>();

const mergedClass = computed(() => {
  return ["", props.class].filter(Boolean).join(" ");
});
</script>

<template>
  <div :class="mergedClass">
    <slot />
  </div>
</template>
