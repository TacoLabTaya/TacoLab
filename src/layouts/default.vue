<template>
  <div>
    <div v-for="blok in global.content.Header" :key="blok._uid" >
        <StoryblokComponent :blok="blok" />
    </div>
    <slot />
    Footer
  </div>
</template>
<script setup>
const global = await useStoryblok('global', { version: 'published' });
//console.log(global.content.Header[0]);
</script>   