<script setup>
  const route = useRoute()
  const story = await useStoryblok(`story/${route.params.id}`, { version: 'published' });
</script>

<template>
  <div>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>
