<template>
  <div :class="[
      'bSheet',
      `mShadow-d${blok.shadow}`,
      { 'mSheet-childmargin': blok.childmargin !=null }
    ]">
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
  const justify = computed( () => {
    return `${prop.blok.justify}`;
  } );
  const childmargin = computed( () => {
    return `${prop.blok.childmargin}rem`;
  } );
</script>

<style lang="scss" scoped >
@import "@/assets/styles/_shadow.scss";
.bSheet{
  height:100vh;
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
    //top:0;right:0;bottom:0;left:0; set in child
  }

  display:flex;
  flex-direction: column;
  justify-content: v-bind(justify);

  &.mSheet-childmargin > .bSheet-contents + .bSheet-contents {
    margin-top: v-bind(childmargin);
  }
}
</style>