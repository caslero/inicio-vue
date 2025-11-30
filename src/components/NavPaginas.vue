<!-- <script setup lang="ts">
import { ref, reactive, onMounted, watch } from "vue";
import Div from "./padres/Div.vue";
import DropdowsCarrito from "@/views/components/home/DropdowsCarrito.vue";
import Dropdows from "@/views/components/home/Dropdows.vue";

type Props = {
  items: { label: string; to: string }[];
  initialIndex?: number;
  underlineColor?: string;
};

const props = defineProps<Props>();

const navRef = ref<HTMLElement | null>(null);
const activeIndex = ref<number | null>(props.initialIndex ?? null);

const underlineStyle = reactive<{
  left: string;
  width: string;
  opacity: string;
  backgroundColor: string;
}>({
  left: "0px",
  width: "0px",
  opacity: "0",
  backgroundColor: "hsl(26, 100%, 55%)",
});

const updateUnderline = (index: number) => {
  const nav = navRef.value;
  if (!nav) return;

  const links = nav.querySelectorAll("[data-index]");
  const el = Array.from(links).find(
    (link) => link.getAttribute("data-index") === index.toString()
  ) as HTMLElement | undefined;

  if (!el) return;

  underlineStyle.left = `${el.offsetLeft}px`;
  underlineStyle.width = `${el.offsetWidth}px`;
  underlineStyle.opacity = "1";
};

const handleClick = (index: number) => {
  activeIndex.value = index;
  updateUnderline(index);
};

const handleHover = (index: number) => {
  updateUnderline(index);
};

const handleLeave = () => {
  if (activeIndex.value !== null) {
    updateUnderline(activeIndex.value);
  } else {
    underlineStyle.opacity = "0";
  }
};

onMounted(() => {
  if (activeIndex.value !== null) {
    updateUnderline(activeIndex.value);
  }
});

watch(
  () => props.initialIndex,
  (newIndex) => {
    if (newIndex !== null && newIndex !== undefined) {
      activeIndex.value = newIndex;
      updateUnderline(newIndex);
    }
  }
);
</script>

<template>
  <nav
    ref="navRef"
    class="relative flex justify-between items-center border-b border-[#dbdada] pb-7"
    @mouseleave="handleLeave"
  >
    <Div class="flex items-center">
      <RouterLink to="/" class="text-2xl font-semibold me-10"
        >Sneakers</RouterLink
      >
      <ul
        ref="navRef"
        class="flex gap-5 m-0 p-0 list-none"
        @mouseleave="handleLeave"
      >
        <li
          class="text-[10px] opacity-60 hover:opacity-100"
          v-for="(item, index) in props.items"
          :key="index"
        >
          <RouterLink
            :to="item.to"
            :data-index="index"
            @click="handleClick(index)"
            @mouseenter="handleHover(index)"
            class="nav-link"
          >
            {{ item.label }}
          </RouterLink>
        </li>
      </ul>

      <span
        class="nav-underline absolute bottom-0 h-[3px] transition-all duration-300 pointer-events-none"
        :style="{
          left: underlineStyle.left,
          width: underlineStyle.width,
          opacity: underlineStyle.opacity,
          backgroundColor: underlineStyle.backgroundColor,
        }"
      ></span>
    </Div>

    <Div class="flex items-center gap-8">
      <Div class="opacity-60">
        <DropdowsCarrito />
      </Div>

      <Dropdows />
    </Div>
  </nav>
</template> -->

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import Div from "./padres/Div.vue";
import DropdowsCarrito from "@/views/components/home/DropdowsCarrito.vue";
import Dropdows from "@/views/components/home/Dropdows.vue";

type NavItem = {
  label: string;
  to: string;
};

const props = defineProps<{
  items: NavItem[];
  underlineColor?: string;
}>();

const route = useRoute();
const navRef = ref<HTMLElement | null>(null);
const activeIndex = ref<number | null>(null);

const underlineStyle = reactive({
  left: "0px",
  width: "0px",
  opacity: "0",
  backgroundColor: props.underlineColor ?? "hsl(26, 100%, 55%)",
});

const updateUnderline = (index: number) => {
  const nav = navRef.value;
  if (!nav) return;

  const links = nav.querySelectorAll("[data-index]");
  const el = Array.from(links).find(
    (link) => link.getAttribute("data-index") === index.toString()
  ) as HTMLElement | undefined;

  if (!el) return;

  underlineStyle.left = `${el.offsetLeft}px`;
  underlineStyle.width = `${el.offsetWidth}px`;
  underlineStyle.opacity = "1";
};

const handleClick = (index: number) => {
  activeIndex.value = index;
  updateUnderline(index);
};

const handleHover = (index: number) => {
  updateUnderline(index);
};

const handleLeave = () => {
  if (activeIndex.value !== null) {
    updateUnderline(activeIndex.value);
  } else {
    underlineStyle.opacity = "0";
  }
};

const syncWithRoute = () => {
  const index = props.items.findIndex((item) => item.to === route.path);
  if (index !== -1) {
    activeIndex.value = index;
    updateUnderline(index);
  } else {
    underlineStyle.opacity = "0";
  }
};

onMounted(() => {
  syncWithRoute();
});

watch(
  () => route.path,
  () => {
    syncWithRoute();
  }
);
</script>

<template>
  <nav
    class="relative flex justify-between items-center border-b border-[#dbdada] pb-7"
    @mouseleave="handleLeave"
  >
    <Div class="flex items-center">
      <RouterLink to="/" class="text-2xl font-semibold me-10"
        >Sneakers</RouterLink
      >

      <ul
        ref="navRef"
        class="flex gap-5 m-0 p-0 list-none"
        @mouseleave="handleLeave"
      >
        <li
          v-for="(item, index) in props.items"
          :key="index"
          class="text-[10px] opacity-60 hover:opacity-90"
        >
          <RouterLink
            :to="item.to"
            :data-index="index"
            @click="handleClick(index)"
            @mouseenter="handleHover(index)"
            class="inline-block px-1 transition-colors duration-300"
          >
            {{ item.label }}
          </RouterLink>
        </li>
      </ul>

      <span
        class="absolute bottom-0 h-[3px] transition-all duration-300 pointer-events-none"
        :style="{
          left: underlineStyle.left,
          width: underlineStyle.width,
          opacity: underlineStyle.opacity,
          backgroundColor: underlineStyle.backgroundColor,
        }"
      ></span>
    </Div>

    <Div class="flex items-center gap-8">
      <Div class="opacity-60 hover:opacity-100 transition-opacity duration-300">
        <DropdowsCarrito />
      </Div>
      <Dropdows />
    </Div>
  </nav>
</template>
