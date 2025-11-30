<!-- <script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  width?: number; // controla ancho
  height?: number; // controla alto
  color?: string; // color del ícono
  strokeWidth?: number; // grosor del trazo si aplica
  class?: string | string[] | Record<string, boolean>;
}>();

const mergedClass = computed(() => {
  return ["fill-current", props.class].filter(Boolean).join(" ");
});

const ancho = props.width ?? 18;
const largo = props.width ?? 18;
const color = props.color ?? "currentColor";
const strokeWidth = props.strokeWidth ?? 1.5;
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="ancho"
    :height="largo"
    viewBox="0 0 24 24"
    :fill="color"
    :stroke-width="strokeWidth"
    :class="mergedClass"
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path
      d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"
    ></path>
  </svg>
</template> -->

<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "@/store/cart"; // Asegúrate de que la ruta sea correcta
import { storeToRefs } from "pinia";

const props = defineProps<{
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  class?: string | string[] | Record<string, boolean>;
}>();

const mergedClass = computed(() => {
  return ["fill-current", props.class].filter(Boolean).join(" ");
});

const ancho = props.width ?? 18;
const largo = props.width ?? 18;
const color = props.color ?? "currentColor";
const strokeWidth = props.strokeWidth ?? 1.5;

// 1. Inicializa el store
const cartStore = useCartStore();

// 2. Extrae el getter reactivo. Los getters son reactivos por defecto, pero
//    usar 'storeToRefs' ayuda a mantener la consistencia al extraer propiedades.
const { cartItemsCount } = storeToRefs(cartStore);

// 3. Lógica para mostrar el badge
const showBadge = computed(() => {
  return cartItemsCount.value >= 1;
});
</script>

<template>
  <div class="relative inline-block">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="ancho"
      :height="largo"
      viewBox="0 0 24 24"
      :fill="color"
      :stroke-width="strokeWidth"
      :class="mergedClass"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
        d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"
      ></path>
    </svg>

    <div
      v-if="showBadge"
      class="absolute -top-1 -right-1.5 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full leading-none"
      :style="{ fontSize: ancho * 0.4 + 'px' }"
    >
      {{ cartItemsCount > 99 ? "99+" : cartItemsCount }}
    </div>
  </div>
</template>
