<template>
  <div class="bSheet">
    <StoryblokComponent v-for="blok in blok.contents" :key="blok._uid" :blok="blok" />
    <StoryblokComponent v-for="blok in blok.background" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" >
.bSheet{
  //display:flex;
}
</style>