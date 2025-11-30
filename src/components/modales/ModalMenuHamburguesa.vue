<script setup lang="ts">
import { RouterLink } from "vue-router";
import Div from "@/components/padres/Div.vue";
import Button from "@/components/padres/Button.vue";

const props = defineProps<{
  isModalOpen: boolean;
  items: { label: string; to: string }[];
  underlineColor?: string;
  openClose: () => void;
}>();
</script>

<template>
  <transition
    enter-active-class="transform transition duration-600 ease-out"
    enter-from-class="-translate-x-full opacity-0"
    enter-to-class="translate-x-0 opacity-400"
    leave-active-class="transform transition duration-600 ease-in"
    leave-from-class="translate-x-0 opacity-400"
    leave-to-class="-translate-x-full opacity-0"
  >
    <Div v-if="props.isModalOpen" class="fixed inset-0 flex z-50">
      <Div class="w-[65%] bg-white px-5 shadow-lg flex flex-col gap-7">
        <Button
          @click="props.openClose"
          class="text-2xl text-start text-gray-600 mt-3 font-medium"
        >
          x
        </Button>

        <ul class="flex flex-col gap-3">
          <li
            v-for="(item, index) in props.items"
            :key="index"
            class="text-sm font-semibold"
          >
            <RouterLink
              :to="item.to"
              @click="props.openClose"
              class="block hover:text-blue-500"
            >
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </Div>

      <Div
        class="w-[35%] bg-[#121010] opacity-90"
        @click="props.openClose"
      ></Div>
    </Div>
  </transition>
</template>
