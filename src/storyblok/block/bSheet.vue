<template>
  <div class="bSheet">
    <StoryblokComponent v-for="blok in blok.contents" :key="blok._uid" :blok="blok" class="bSheet-contents"/>
    <StoryblokComponent v-for="blok in blok.background" :key="blok._uid" :blok="blok" class="bSheet-background"/>
  </div>
</template>

<script setup>
  const prop = defineProps({ blok: Object });
  const height = computed( () => {
    switch(prop.blok.height.style){
      case 'percent':
        return `${prop.blok.height.value}%`;
      case 'vheight':
        return `${prop.blok.height.value}vh`;
      case 'auto':
      default:
        return 'auto';
    }
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
  const justify = computed( () => {
    return `${prop.blok.justify}`;
  } );
</script>

<style lang="scss" scoped >
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

  position:relative;
  z-index: 0;
  .bSheet-contents{
    //position:static;
    z-index:1;
  }
  .bSheet-background{
    position:absolute;
    z-index:-1;
    top:0;right:0;bottom:0;left:0;
  }

  display:flex;
  flex-direction: column;
  justify-content: v-bind(justify);
}
</style>