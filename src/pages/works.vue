<script setup>
const story = await useStoryblok('works', { version: 'published' });
</script>

<template>
    <bStory 
      v-if="story"
      :blok="story.content"
      :datePub="story.first_published_at"
      :dateMod="story.published_at"
    />
</template>
