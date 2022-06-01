<template>
  <div class="bHeader">
    <div class="bHeader-left">
        <StoryblokComponent v-for="blok in blok.logo" :key="blok._uid" :blok="blok" />
    </div>
    <div  class="bHeader-right">
        <StoryblokComponent v-for="blok in blok.navi" :key="blok._uid" :blok="blok" />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" scoped>
.bHeader{
  display:flex;
  justify-content: space-between;
}
</style>