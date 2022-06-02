<template>
  <div class="bPoint3">
    <StoryblokComponent v-for="blok in blok.points" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" >
.bPoint3{
  display:flex;
}
</style>