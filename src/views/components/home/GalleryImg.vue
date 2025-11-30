<!-- <script setup lang="ts">
import { ref } from "vue";

import img1 from "@/assets/img/image-product-1.jpg";
import img2 from "@/assets/img/image-product-2.jpg";
import img3 from "@/assets/img/image-product-3.jpg";
import img4 from "@/assets/img/image-product-4.jpg";
import Img from "@/components/padres/Img.vue";
import Div from "@/components/padres/Div.vue";

const images = [img1, img2, img3, img4];

const activeImage = ref(images[0]);
</script>

<template>
  <Div class="flex flex-col items-center w-full me-14">
   
    <Div class="ps-10">
      <Img :src="activeImage" class="max-h-[350px] w-full rounded-lg shadow" />

      
      <Div class="grid grid-cols-4 gap-2 mt-4 w-full">
        <Div
          v-for="img in images"
          :class="{
            ' rounded-lg border-2 border-orange-500 opacity-70':
              img === activeImage,
          }"
        >
          <Img
            :key="img"
            :src="img"
            class="aspect-square object-cover cursor-pointer rounded-lg transition-transform duration-200 ease-in-out hover:scale-105"
            :class="{
              'opacity-50': img === activeImage,
            }"
            @click="activeImage = img"
          />
        </Div>
      </Div>
    </Div>
  </Div>
</template> -->

<script setup lang="ts">
import { ref, watch } from "vue";

import img1 from "@/assets/img/image-product-1.jpg";
import img2 from "@/assets/img/image-product-2.jpg";
import img3 from "@/assets/img/image-product-3.jpg";
import img4 from "@/assets/img/image-product-4.jpg";
import Img from "@/components/padres/Img.vue";
import Div from "@/components/padres/Div.vue";
import BottonPrevious from "@/components/BottonPrevious.vue";
import BottonNext from "@/components/BottonNext.vue";
import BottomClose from "@/components/BottomClose.vue";

const images: string[] = [img1, img2, img3, img4];

const activeImage = ref<string>(images[0]!);
const showModal = ref(false);
const currentIndex = ref(0);

const openModal = (index: number) => {
  currentIndex.value = index;
  activeImage.value = images[index]!;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
  activeImage.value = images[currentIndex.value]!;
};

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
  activeImage.value = images[currentIndex.value]!;
};

watch(showModal, (visible) => {
  document.body.style.overflow = visible ? "hidden" : "auto";
});
</script>

<template>
  <Div class="flex flex-col items-center w-full me-14">
    <!-- Imagen principal -->
    <Div class="ps-10">
      <Img
        :src="activeImage"
        class="max-h-[350px] w-full rounded-lg shadow cursor-pointer"
        @click="openModal(images.indexOf(activeImage))"
      />

      <!-- Miniaturas adaptativas -->
      <Div class="grid grid-cols-4 gap-2 mt-4 w-full">
        <Div
          v-for="(img, index) in images"
          :key="index"
          :class="{
            'rounded-lg border-2 border-orange-500 opacity-70':
              img === activeImage,
          }"
        >
          <Img
            :src="img"
            class="aspect-square object-cover cursor-pointer rounded-lg transition-transform duration-200 ease-in-out hover:scale-105"
            :class="{ 'opacity-50': img === activeImage }"
            @click="activeImage = img"
          />
        </Div>
      </Div>
    </Div>

    <!-- Modal -->
    <Div
      v-if="showModal"
      class="fixed inset-0 bg-[rgba(0,0,0,0.9)] flex items-center justify-center z-50"
    >
      <Div class="relative max-w-sm w-full px-4 mt-10">
        <!-- Imagen principal con navegación -->
        <Div class="flex items-center justify-between">
          <!-- Botón cerrar sobre la imagen -->
          <Div class="absolute -top-10 right-4 z-10">
            <BottomClose :funcionNext="closeModal" />
          </Div>

          <Div class="absolute left-0">
            <BottonPrevious :funcionPrevious="prevImage" />
          </Div>

          <Img
            :src="activeImage"
            class="max-h-[500px] max-w-[350px] rounded-lg"
          />

          <Div class="absolute right-0">
            <BottonNext :funcionNext="nextImage" />
          </Div>
        </Div>

        <!-- Miniaturas en modal -->
        <Div class="grid grid-cols-4 gap-4 mt-4 px-10">
          <Div
            v-for="(img, index) in images"
            :key="index"
            :class="{
              'border-2 border-orange-500 opacity-70': index === currentIndex,
            }"
            class="rounded-lg cursor-pointer"
            @click="openModal(index)"
          >
            <Img
              :src="img"
              class="aspect-square object-cover cursor-pointer rounded-md transition duration-200 ease-in-out hover:scale-105"
              :class="{
                'brightness-[1.8] saturate-0': img === activeImage,
              }"
              @click="activeImage = img"
            />
          </Div>
        </Div>
      </Div>
    </Div>
  </Div>
</template>
