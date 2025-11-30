<!-- <script setup lang="ts">
import Div from "@/components/padres/Div.vue";
import Header from "@/components/padres/Header.vue";
import Li from "@/components/padres/Li.vue";
import Nav from "@/components/padres/Nav.vue";
import Ul from "@/components/padres/Ul.vue";
import Dropdows from "@/views/components/home/Dropdows.vue";
import DropdowsCarrito from "../home/DropdowsCarrito.vue";
</script>

<template>
  <Header class="border-b border-gray-200 pt-4 pb-5">
    <Nav class="flex justify-between items-center">
      <Ul class="flex flex-row items-center gap-4">
        <Li class="text-2xl font-semibold me-4">sneakers</Li>
        <Li class="text-xs text-gray-500">Collections</Li>
        <Li class="text-xs text-gray-500">Men</Li>
        <Li class="text-xs text-gray-500">Women</Li>
        <Li class="text-xs text-gray-500">Contact</Li>
      </Ul>

      <Div class="flex items-center gap-8">
        <Div class="opacity-60">
          <DropdowsCarrito />
        </Div>

        <Dropdows />
      </Div>
    </Nav>
  </Header>
</template> -->

<!-- <script setup lang="ts">
import { ref, reactive } from 'vue'

const items = ['Inicio', 'Servicios', 'Proyectos', 'Contacto']
const navRef = ref<HTMLElement | null>(null)
const activeIndex = ref<number | null>(null)

const underlineStyle = reactive({
  left: '0px',
  width: '0px',
  opacity: '0',
})

const updateUnderline = (index: number) => {
  const nav = navRef.value
  if (!nav) return

  const links = nav.querySelectorAll('a')
  const el = links[index] as HTMLElement | undefined
  if (!el) return

  const { offsetLeft, offsetWidth } = el
  underlineStyle.left = `${offsetLeft}px`
  underlineStyle.width = `${offsetWidth}px`
  underlineStyle.opacity = '1'
}

const handleClick = (index: number) => {
  activeIndex.value = index
  updateUnderline(index)
}

const handleHover = (index: number) => {
  updateUnderline(index)
}

const handleLeave = () => {
  if (activeIndex.value !== null) {
    updateUnderline(activeIndex.value)
  } else {
    underlineStyle.opacity = '0'
  }
}
</script>

<template>
  <nav ref="navRef" class="nav-container" @mouseleave="handleLeave">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <a
          href="#"
          @click.prevent="handleClick(index)"
          @mouseenter="handleHover(index)"
        >
          {{ item }}
        </a>
      </li>
    </ul>
    <span class="nav-underline" :style="underlineStyle"></span>
  </nav>
</template>

<style scoped>
.nav-container {
  position: relative;
  display: inline-block;
}

ul {
  display: flex;
  gap: 40px;
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  display: inline-block;
  padding: 8px 4px;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #007bff;
}

.nav-underline {
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: #007bff;
  transition: all 0.3s ease;
  pointer-events: none;
}
</style> -->

<script setup lang="ts">
import Header from "@/components/padres/Header.vue";
import NavPaginas from "@/components/NavPaginas.vue";
</script>

<template>
  <Header>
    <NavPaginas
      :items="[
        { label: 'Collections', to: '/collections' },
        { label: 'Men', to: '/men' },
        { label: 'Women', to: '/women' },
        { label: 'About', to: '/about' },
        { label: 'Contacts', to: '/contacts' },
      ]"
      underlineColor="hsl(26, 100%, 55%)"
    />
  </Header>
</template>
