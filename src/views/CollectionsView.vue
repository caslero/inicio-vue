<script setup lang="ts">
import HeaderPagina from "@/views/components/header/HeaderPagina.vue";
import Section from "@/components/padres/Section.vue";
import Img from "@/components/padres/Img.vue";
</script>

<template>
  <div>
    <HeaderPagina />
    <h2 class="my-5 mt-20">Estas son las diferentes vistas a diseñar</h2>

    <Section class="flex flex-col gap-4 items-center">
      <Img
        src="../../public/images/vistas/active-states-basket-empty.jpg"
        alt="Foto de perfil"
        class="w-full rounded-md shadow-md border"
        lazy
      />

      <Img
        src="../../public/images/vistas/active-states-basket-filled.jpg"
        alt="Ejemplo remoto"
        class="w-full rounded-md shadow-md border"
        lazy
      />

      <Img
        src="../../public/images/vistas/active-states-lightbox.jpg"
        alt="Ejemplo remoto"
        class="w-full rounded-md shadow-md border"
        lazy
      />

      <Img
        src="../../public/images/vistas/desktop-design-lightbox.jpg"
        alt="Ejemplo remoto"
        class="w-full rounded-md shadow-md border"
        lazy
      />

      <Img
        src="../../public/images/vistas/desktop-design.jpg"
        alt="Ejemplo remoto"
        class="w-full rounded-md shadow-md border"
        lazy
      />

      <Img
        src="../../public/images/vistas/desktop-preview.jpg"
        alt="Ejemplo remoto"
        class="w-full rounded-md shadow-md border"
        lazy
      />

      <Img
        src="../../public/images/vistas/mobile-design-basket-empty.jpg"
        alt="Ejemplo remoto"
        class="w-full rounded-md shadow-md border"
        lazy
      />

      <Img
        src="../../public/images/vistas/mobile-design-basket-filled.jpg"
        alt="Ejemplo remoto"
        class="w-full rounded-md shadow-md border"
        lazy
      />

      <Img
        src="../../public/images/vistas/mobile-design.jpg"
        alt="Ejemplo remoto"
        class="w-full rounded-md shadow-md border"
        lazy
      />

      <Img
        src="../../public/images/vistas/mobile-menu.jpg"
        alt="Ejemplo remoto"
        class="w-full rounded-md shadow-md border"
        lazy
      />
    </Section>
  </div>
</template>
