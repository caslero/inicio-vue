<script setup lang="ts">
import GalleryImg from "@/views/components/home/GalleryImg.vue";
import Section from "@/components/padres/Section.vue";
import DetallesProducto from "@/views/components/home/DetallesProducto.vue";
</script>

<template>
  <Section class="flex flex-col sm:flex-row sm:gap-2 sm:my-16">
    <GalleryImg class="basis-[50%]" />
    <DetallesProducto class="basis-[50%]" />
  </Section>
</template>
