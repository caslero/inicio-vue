<!-- <script setup lang="ts">
import type { VNode } from 'vue'

interface Slots {
  default?: () => VNode[]
}

defineSlots<Slots>()
</script>

<template>
  <nav class="flex justify-between items-center w-full">
    <slot />
  </nav>
</template> -->


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
  <nav :class="mergedClass">
    <slot />
  </nav>
</template>
