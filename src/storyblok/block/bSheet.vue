<template>
  <div class="bSheet">
    <StoryblokComponent v-for="blok in blok.contents" :key="blok._uid" :blok="blok" />
    <StoryblokComponent v-for="blok in blok.background" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
  const prop = defineProps({ blok: Object });
  const height = computed( () => {
    var ret = "auto";
    if( prop.blok.vheight !== 0 ){
      ret = `${prop.blok.vheight}vh`;
    }
    return ret;
  } );
</script>

<style lang="scss" >
.bSheet{
  height:v-bind(height);
  //display:flex;
}
</style>