<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  indice?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  class?: string | string[] | Record<string, boolean>;
}>();

const tag = computed(() => props.indice ?? "h2"); // por defecto h2

const mergedClass = computed(() => {
  return [props.class].filter(Boolean).join(" ");
});
</script>

<template>
  <component :is="tag" :class="mergedClass">
    <slot />
  </component>
</template>
