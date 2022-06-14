<template>
  <mColors :blok="blok.color" class="mGlobal">
    <mFontJp p :blok="blok.font">
      <StoryblokComponent v-for="blok in blok.header" :key="blok._uid" :blok="blok" />
      <slot></slot>
      <StoryblokComponent v-for="blok in blok.footer" :key="blok._uid" :blok="blok" />
    </mFontJp>
  </mColors>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" >
  .mGlobal{
    background-color:var(--c-base);
    color:var(--c-main);
  }
</style>