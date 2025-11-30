<script setup lang="ts">
import Button from "./padres/Button.vue";

const props = defineProps<{
  funcionPrevious: () => void;
}>();
</script>

<template>
  <Button
    @click="props.funcionPrevious"
    type="button"
    aria-label="Anterior"
    class="text-[black] hover:text-[hsl(26_100%_55%)] text-3xl bg-white flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      class="fill-current"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"
      />
    </svg>
  </Button>
</template>
