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
    aria-label="Cerrar"
    class="text-[hsl(26_100%_55%)] text-4xl hover:font-medium"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      class="fill-current"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
        d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"
      ></path>
    </svg>
  </Button>
</template>
