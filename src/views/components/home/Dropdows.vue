<script setup lang="ts">
import { ref } from "vue";
import imgUserLogin from "@/assets/img/image-avatar.png";
import Img from "@/components/padres/Img.vue";
import Div from "@/components/padres/Div.vue";
import Ul from "@/components/padres/Ul.vue";
import Li from "@/components/padres/Li.vue";
import Button from "@/components/padres/Button.vue";

const menuVisible = ref(false);

function toggleMenu() {
  menuVisible.value = !menuVisible.value;
}

function logout() {
  // Aquí va tu lógica real de logout
  console.log("Sesión cerrada");
}
</script>

<template>
  <Div class="relative inline-block text-left">
    <Div
      @click="toggleMenu"
      class="border-2 border-gray-300 rounded-full hover:border-2 hover:border-orange-500 cursor-pointer"
    >
      <Img
        class="w-8"
        :src="imgUserLogin"
        alt="Imagen de usuario al iniciar sesion"
      />
    </Div>

    <transition name="fade">
      <Div
        v-if="menuVisible"
        class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50"
      >
        <Ul class="py-1">
          <Li>
            <Button
              @click="logout"
              class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Cerrar sesión
            </Button>
          </Li>
        </Ul>
      </Div>
    </transition>
  </Div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
