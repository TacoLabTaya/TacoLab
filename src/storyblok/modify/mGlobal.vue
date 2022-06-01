<template>
  <MColor :blok="blok.color[0]">
    <mFont :blok="blok.font[0]">
      <MAppear :blok="blok.appear[0]">
        <StoryblokComponent v-for="blok in blok.header" :key="blok._uid" :blok="blok" />
        <slot />
        <StoryblokComponent v-for="blok in blok.footer" :key="blok._uid" :blok="blok" />
      </MAppear>
    </mFont>
  </MColor>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" scoped >
</style>