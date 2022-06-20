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
    if( prop.blok.marginSP == null || prop.blok.marginSP.ison === false) return "0%";
    return`${prop.blok.marginSP.top}% ${prop.blok.marginSP.right}% ${prop.blok.marginSP.bottom}% ${prop.blok.marginSP.left}%`;
  } );
  const paddingSP = computed( () => {
    if( prop.blok.paddingSP == null || prop.blok.paddingSP.ison === false) return "0%";
    return`${prop.blok.paddingSP.top}% ${prop.blok.paddingSP.right}% ${prop.blok.paddingSP.bottom}% ${prop.blok.paddingSP.left}%`;
  } );
  const marginPC = computed( () => {
    if( prop.blok.marginPC == null || prop.blok.marginPC.ison === false) return "0%";
    return`${prop.blok.marginPC.top}% ${prop.blok.marginPC.right}% ${prop.blok.marginPC.bottom}% ${prop.blok.marginPC.left}%`;
  } );
  const paddingPC = computed( () => {
    if( prop.blok.paddingPC == null || prop.blok.paddingPC.ison === false) return "0%";
    return`${prop.blok.paddingPC.top}% ${prop.blok.paddingPC.right}% ${prop.blok.paddingPC.bottom}% ${prop.blok.paddingPC.left}%`;
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
    //top:0;right:0;bottom:0;left:0;
  }
}
</style>