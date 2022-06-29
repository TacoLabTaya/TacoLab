<script setup>
const story = await useStoryblok('profile', { version: 'published' });
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
