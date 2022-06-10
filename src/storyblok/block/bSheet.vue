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
    if( prop.blok.height.value !== "0" ){
      ret = `${prop.blok.height.value}vh`;
    }
    return ret;
  } );
  const marginSP = computed( () => {
    return`${prop.blok.spaces.margintsp}% ${prop.blok.spaces.marginrsp}% ${prop.blok.spaces.marginbsp}% ${prop.blok.spaces.marginlsp}%`;
  } );
  const paddingSP = computed( () => {
    return `${prop.blok.spaces.paddingtsp}% ${prop.blok.spaces.paddingrsp}% ${prop.blok.spaces.paddingbsp}% ${prop.blok.spaces.paddinglsp}%`;
  } );
  const marginPC = computed( () => {
    return `${prop.blok.spaces.margintpc}% ${prop.blok.spaces.marginrpc}% ${prop.blok.spaces.marginbpc}% ${prop.blok.spaces.marginlpc}%`;
  } );
  const paddingPC = computed( () => {
   return `${prop.blok.spaces.paddingtpc}% ${prop.blok.spaces.paddingrpc}% ${prop.blok.spaces.paddingbpc}% ${prop.blok.spaces.paddinglpc}%`;
  } );
</script>

<style lang="scss" >
.bSheet{
  height:v-bind(height);
  @include mq('SHORT'){ 
    margin :v-bind(marginSP);
    padding:v-bind(paddingSP);
  }
  @include mq('LARGE'){ 
    margin :v-bind(marginPC);
    padding:v-bind(paddingPC);
  }
}
</style>