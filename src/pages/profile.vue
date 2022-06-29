<script setup>
const story = await useStoryblok('profile', { version: 'published' });
</script>

<template>
<div>
  Profile
  <StoryblokComponent v-if="story" :blok="story.content" />
</div>
</template>
