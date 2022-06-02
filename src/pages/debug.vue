<script setup>
const story = ref(null);
onMounted(async () => {
  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get('cdn/stories/home', {
    version: 'draft',
  });
  story.value = data.story;
  useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory));
});
</script>

<template>
  <div>
    Debug
    <StoryblokComponent v-if="story" :blok="story" />
  </div>
</template>
