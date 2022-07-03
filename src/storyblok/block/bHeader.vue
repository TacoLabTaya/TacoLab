<template>
  <div class="bHeader">
    <div class="bHeader-left">
        <StoryblokComponent v-for="blok in blok.logo" :key="blok._uid" :blok="blok" class="bHeader-logo"/>
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
  background:hsl(var(--c-main));
  color:hsl(var(--c-base));
  width: 100%;
  display:flex;
  justify-content: space-between;
  align-items: center;
  height:3rem;
  .bHeader-left{
    .bHeader-logo{
      width: 3rem;
      padding: 0.5rem;
    }
  }
}
</style>