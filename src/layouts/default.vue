
<template>
  <MGlobal  v-if="global" :blok="global.content">
    <slot></slot>
  </MGlobal>
</template>
<script setup>
import MGlobal from '~~/storyblok/modify/mGlobal.vue';
const global = await useStoryblok('global', { version: 'published' });
</script>   