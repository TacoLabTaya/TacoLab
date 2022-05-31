<template>
  <div>
      HEDOGA
    <div v-for="blok in blok.NaviMenus" :key="blok._uid" >
      <StoryblokComponent :blok="blok" />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
//console.log(blok);
</script>
