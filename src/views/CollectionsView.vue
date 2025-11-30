<script setup lang="ts">
import HeaderPagina from "@/views/components/header/HeaderPagina.vue";
import Section from "@/components/padres/Section.vue";
import Img from "@/components/padres/Img.vue";

import img1 from "@/assets/img/vistas/active-states-basket-empty.jpg";
import img2 from "@/assets/img/vistas/active-states-basket-filled.jpg";
import img3 from "@/assets/img/vistas/active-states-lightbox.jpg";
import img4 from "@/assets/img/vistas/desktop-design-lightbox.jpg";
import img5 from "@/assets/img/vistas/desktop-design.jpg";
import img6 from "@/assets/img/vistas/desktop-preview.jpg";
import img7 from "@/assets/img/vistas/mobile-design-basket-empty.jpg";
import img8 from "@/assets/img/vistas/mobile-design-basket-filled.jpg";
import img9 from "@/assets/img/vistas/mobile-design.jpg";
import img10 from "@/assets/img/vistas/mobile-menu.jpg";
</script>

<template>
  <div>
    <HeaderPagina />
    <h2 class="my-5 mt-20">Estas son las diferentes vistas a diseñar</h2>

    <Section class="flex flex-col gap-4 items-center">
      <Img
        :src="img1"
        alt="Basket vacío"
        class="w-full rounded-md shadow-md border"
        lazy
      />
      <Img
        :src="img2"
        alt="Basket lleno"
        class="w-full rounded-md shadow-md border"
        lazy
      />
      <Img
        :src="img3"
        alt="Lightbox activo"
        class="w-full rounded-md shadow-md border"
        lazy
      />
      <Img
        :src="img4"
        alt="Lightbox desktop"
        class="w-full rounded-md shadow-md border"
        lazy
      />
      <Img
        :src="img5"
        alt="Diseño desktop"
        class="w-full rounded-md shadow-md border"
        lazy
      />
      <Img
        :src="img6"
        alt="Preview desktop"
        class="w-full rounded-md shadow-md border"
        lazy
      />
      <Img
        :src="img7"
        alt="Basket vacío móvil"
        class="w-full rounded-md shadow-md border"
        lazy
      />
      <Img
        :src="img8"
        alt="Basket lleno móvil"
        class="w-full rounded-md shadow-md border"
        lazy
      />
      <Img
        :src="img9"
        alt="Diseño móvil"
        class="w-full rounded-md shadow-md border"
        lazy
      />
      <Img
        :src="img10"
        alt="Menú móvil"
        class="w-full rounded-md shadow-md border"
        lazy
      />
    </Section>
  </div>
</template>
