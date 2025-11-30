<script setup lang="ts">
import { computed } from "vue";

interface Props {
  class?: string;
}

const props = defineProps<Props>();

const mergedClass = computed(() => {
  return ["", props.class].filter(Boolean).join(" ");
});
</script>

<template>
  <section :class="mergedClass">
    <slot />
  </section>
</template>
