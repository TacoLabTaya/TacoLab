<script setup>
const story = await useStoryblok('home', { version: 'published' });
</script>

<template>
    <bStory 
      v-if="story"
      :blok="story.content"
      :datePub="story.first_published_at"
      :dateMod="story.published_at"
    />
</template>
