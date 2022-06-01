<template>
  <div class="bFooter">
    bFooter
    <!--
    <div>
        <StoryblokComponent v-for="blok in blok.logo" :key="blok._uid" :blok="blok" />
    </div>
    <div  >
        <StoryblokComponent v-for="blok in blok.navi" :key="blok._uid" :blok="blok" />
    </div>
    -->
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" >
.bFooter{
  display:flex;
}
</style>