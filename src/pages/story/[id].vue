<script setup>
  const route = useRoute()
  const story = await useStoryblok(`story/${route.params.id}`, { version: 'published' });
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
