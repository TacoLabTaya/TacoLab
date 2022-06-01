<template>
  <div class="bPoint3">
    bPoint3
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
.bPoint3{
  display:flex;
}
</style>