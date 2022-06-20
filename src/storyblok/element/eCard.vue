<template>
  <div class="eCard">
    <div class="eCard-title">
      <StoryblokComponent v-for="blok in blok.title" :key="blok._uid" :blok="blok"/>
    </div>
    <div class="eCard-text">
      <StoryblokComponent v-for="blok in blok.text" :key="blok._uid" :blok="blok"/>
    </div>
    <StoryblokComponent v-for="blok in blok.background" :key="blok._uid" :blok="blok" class="eCard-background"/>
  </div>
</template>

<script setup>
  const prop = defineProps({ blok: Object });
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
.eCard{
  .eCard-title{}
  .eCard-text {}
  
  @include mq('SHORT'){ 
    margin :v-bind(marginSP);
    padding:v-bind(paddingSP);
  }
  @include mq('LARGE'){ 
    margin :v-bind(marginPC);
    padding:v-bind(paddingPC);
  }
  
  position:relative;
  z-index: 0;
  .eCard-title,.eCard-text{
    z-index:1;
  }
  .eCard-background{
    position:absolute;
    z-index:-1;
    top:0;right:0;bottom:0;left:0;
  }
}
</style>