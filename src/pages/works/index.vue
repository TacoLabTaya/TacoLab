<script setup>
const story = await useStoryblok('works', { version: 'published' });
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
