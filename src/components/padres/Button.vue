<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  class?: string | string[] | Record<string, boolean>;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string; // ojo: era "arialLabel", debería ser "ariaLabel"
}>();

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const mergedClass = computed(() => {
  return ["cursor-pointer", props.class].filter(Boolean).join(" ");
});

const buttonType = props.type ?? "button";
</script>

<template>
  <button
    :type="buttonType"
    :class="mergedClass"
    :aria-label="props.ariaLabel"
    @click="emit('click', $event)"
  >
    <slot />
  </button>
</template>