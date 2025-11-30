<script setup lang="ts">
import HeaderPagina from "./components/header/HeaderPagina.vue";
import SeccionProducto from "./components/home/SeccionProducto.vue";
import Main from "../components/padres/Main.vue";

/** investigar estos conceptos
 * ref, computed, reactive, propiedades computadas
 */
</script>

<template>
  <HeaderPagina />
  <Main>
    <SeccionProducto />
  </Main>
</template>
