<template>
  <div :class="[
      'bSheet',
      `mShadow-d${blok.shadow}`,
      { 'mSheet-childmargin': blok.childmargin !=null }
    ]">
    <slot>
      <StoryblokComponent v-for="blok in blok.contents" :key="blok._uid" :blok="blok" class="bSheet-contents"/>
    </slot>
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
  
  const maxWidth = computed( () => {
    return (prop.blok.maxWidth == null || prop.blok.maxWidth == 0) ? '': `${prop.blok.maxWidth}px`;
  });
  const get4Position = (pos) => {
    if( pos == null || pos.ison === false) return "0%";
    const u = pos.unit == null ? '%' : pos.unit;
    const valt = (pos.sett == null || pos.sett ) ? `${pos.top}${u}`   : 'auto' ;
    const valr = (pos.setr == null || pos.setr ) ? `${pos.right}${u}` : 'auto';
    const vall = (pos.setl == null || pos.setl ) ? `${pos.left}${u}`: 'auto';
    const valb = (pos.setb == null || pos.setb ) ? `${pos.bottom}${u}`  : 'auto';
    return `${valt} ${valr} ${valb} ${vall}`;
  };
  const marginSP = computed( () => {
    return get4Position(prop.blok.marginSP);
  } );
  const paddingSP = computed( () => {
    return get4Position(prop.blok.paddingSP);
  } );
  const marginPC = computed( () => {
    return get4Position(prop.blok.marginPC);
  } );
  const paddingPC = computed( () => {
    return get4Position(prop.blok.paddingPC);
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
  max-width: v-bind(maxWidth);
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