<template>
  <div class="bStory">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" >
.bStory{
}
</style>