<template>
  <div class="bFaqPage">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>
<script setup>
  const prop = defineProps({ 
    blok: Object
  });
</script>
<style lang="scss" >
.bFaqPage{
}
</style>