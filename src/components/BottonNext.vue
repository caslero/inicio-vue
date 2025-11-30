<script setup lang="ts">
import Button from "./padres/Button.vue";

const props = defineProps<{
  funcionNext: () => void;
}>();
</script>

<template>
  <Button
    @click="props.funcionNext"
    type="button"
    aria-label="Siguiente"
    class="text-[black] hover:text-[hsl(26_100%_55%)] text-3xl bg-white flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      class="fill-current"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
        d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"
      ></path>
    </svg>
  </Button>
</template>
