
<template>
  <MGlobal  v-if="global" :blok="global.content">
    <slot></slot>
  </MGlobal>
</template>
<script setup>
  const global = await useStoryblok('global', { version: 'published' });
</script>   