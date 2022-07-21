<script setup>
  const story = await useStoryblok('profile', { version: 'published' });
</script>

<template>
  <div>
    <bStory 
      v-if="story"
      :blok="story.content"
      :datePub="story.first_published_at"
      :dateMod="story.published_at"
    />
  </div>
</template>
