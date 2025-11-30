<script setup lang="ts">
import CarritoSvg from "@/views/components/home/CarritoSvg.vue";
import Button from "@/components/padres/Button.vue";
import Div from "@/components/padres/Div.vue";
import P from "@/components/padres/P.vue";
import Section from "@/components/padres/Section.vue";
import Span from "@/components/padres/Span.vue";
import Heading from "@/components/Heading.vue";
</script>

<template>
  <Section class="py-10 ms-4">
    <Heading indice="h6" class="text-xs mb-3 opacity-60">SNEAKER COMPANY</Heading>
    <Heading indice="h1" class="text-3xl font-semibold mb-5"
      >Fall Limited Edition Sneakers</Heading
    >
    <P class="text-xs opacity-60 mb-3"
      >These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they'll withstand everything the
      weather con after.
    </P>
    <Div class="flex items-center gap-4">
      <Span class="text-md font-semibold opacity-90">$125.00</Span>
      <Span
        class="bg-[black] rounded-md px-2 text-[white] font-semibold text-[10px]"
        >50%</Span
      >
    </Div>
    <Span class="text-[10px] opacity-60 line-through">$250.00</Span>

    <Div class="flex items-center gap-8 mt-6 ps-4">
      <Div class="flex items-center justify-items-center gap-6">
        <Button class="text-[hsl(26_100%_55%)] font-semibold text-xl">-</Button>
        <Span class="text-xs mt-1">0</Span>
        <Button class="text-[hsl(26_100%_55%)] font-semibold text-xl">+</Button>
      </Div>
      <Button
        class="flex items-center gap-2 bg-[hsl(26_100%_55%)] py-2 px-8 rounded-md text-[10px] font-semibold"
        ><CarritoSvg :width="12" :height="12" /> Add to cart</Button
      >
    </Div>
  </Section>
</template>
