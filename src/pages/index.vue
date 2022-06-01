<script setup>
const story = await useStoryblok('home', { version: 'published' });
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content.body" />
</template>
