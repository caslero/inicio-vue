<script setup lang="ts">
import Div from "@/components/padres/Div.vue";
import Img from "@/components/padres/Img.vue";
import BottonPrevious from "@/components/BottonPrevious.vue";
import BottonNext from "@/components/BottonNext.vue";

interface Props {
  activeImage: string;
  prevImage: () => void;
  nextImage: () => void;
}

const props = defineProps<Props>();
</script>

<template>
  <Div class="absolute left-3 sm:-left-4 top-1/2 -translate-y-1/2">
    <BottonPrevious :funcionPrevious="props.prevImage" />
  </Div>

  <Img
    :src="props.activeImage"
    class="w-full sm:max-h-[500px] sm:max-w-[350px] sm:rounded-lg"
  />

  <Div class="absolute right-3 sm:-right-4 top-1/2 -translate-y-1/2">
    <BottonNext :funcionNext="props.nextImage" />
  </Div>
</template>
