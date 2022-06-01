<template>
  <StoryblokComponent :blok="global.content">
    <slot />
  </StoryblokComponent>
</template>
<script setup>
const global = await useStoryblok('global', { version: 'published' });
</script>   