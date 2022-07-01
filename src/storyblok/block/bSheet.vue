<template>
  <div 
    ref="container"
    :class="[
      'bSheet',
      { 'mSheet-childmargin': blok.childmargin !=null },
      blok.layout == null ? '' :`mSheet-layout-${blok.layout.layout}`,
      `mShadow-d${blok.shadow}`,
    ]">
    <slot>
      <StoryblokComponent 
        v-for="blok in blok.contents" 
        :key="blok._uid" 
        :blok="blok" 
        class="bSheet-contents"
      />
    </slot>
    <StoryblokComponent v-for="blok in blok.background" :key="blok._uid" :blok="blok" class="bSheet-background"/>
  </div>
</template>

<script setup>
//import { ResizeObserver }from 'resize-observer-polyfill'
//import { ResizeObserver } from 'resize-observer';
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
  const childmargin = computed( () => {
    return `${prop.blok.childmargin}rem`;
  } );

  const justifyContent = computed( () => {
    if(prop.blok.layout == null) return 'stretch';
    return prop.blok.layout.content.justify;
  } );
  const justifyItems = computed( () => {
    if(prop.blok.layout == null) return 'stretch';
    return prop.blok.layout.items.justify;
  } );
  const alignContent = computed( () => {
    if(prop.blok.layout == null) return 'stretch';
    return prop.blok.layout.content.align;
  } );
  const alignItems = computed( () => {
    if(prop.blok.layout == null) return 'stretch';
    return prop.blok.layout.items.align;
  } );
  const gridGap = computed( () => {
    if(prop.blok.layout == null) return 'stretch';
    return `${prop.blok.layout.gap.x}px ${prop.blok.layout.gap.y}px`;
  } );


  const container = ref(null);
  const rowGap = computed( () => {
    if(prop.blok.layout == null) return 0;
    return parseInt(prop.blok.layout.gap.y);
  } );
  const rowHeight = computed( () => {
    return 10;
  } );


  var timeId = 0;
  const gMasonryObserver = new ResizeObserver((entries) => {
    entries.forEach((e) => { gMasonryObserver.unobserve(e.target); });
    entries.forEach((e) => {
      resizeSpan(e.target);
    });
    entries.forEach((e) => { gMasonryObserver.observe(e.target); });
  })

  /*
  onMounted(() => {
    if(prop.blok.layout != null && prop.blok.layout.layout === 'gMasonry'){
      for( const item of container.value.children ){
        resizeSpan(item);
        gMasonryObserver.observe(item);
      };
    }
  });
    */

  /*
  const resizeSpan = (elm) => {
    if(elm == null){ console.log("null elm");  return 0;}

    const { height } = elm.getBoundingClientRect();
    //const { height } = window.getComputedStyle(elm);
    //const iHeight = elm.getBoundingClientRect().height + rowGap.value;
    const iHeight = parseInt(height) + rowGap.value;
    const rowSpan = Math.ceil(iHeight / (rowGap.value + rowHeight.value));

    console.log(`sett  ${rowSpan} = ${iHeight} / (${rowGap.value} + ${rowHeight.value})`);
    elm.style['grid-row-end'] = `span ${rowSpan}`;
    window.getComputedStyle(elm);
  }
  
  onUpdated(() => {
    console.log('updated')
  })
  */

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
  &.mSheet-childmargin > .bSheet-contents + .bSheet-contents {
    margin-top: v-bind(childmargin);
  }

/*
  display:flex;
  flex-direction: column;
  justify-content: v-bind(justify);
*/  
  &.mSheet-layout-fRow,&.mSheet-layout-fWrwap,&.mSheet-layout-fColumn{
    display:flex;
  }
  &.mSheet-layout-fRow   { flex-direction:row; }
  &.mSheet-layout-fWrap  { flex-direction:row; flex-wrap:wrap}
  &.mSheet-layout-fColumn{ flex-direction:column; }

  &.mSheet-layout-gMasonry,&.mSheet-layout-gMasonryRow,&.mSheet-layout-gTile{
    display:grid;
    grid-gap:v-bind(gridGap);
  }
  &.mSheet-layout-gMasonry{
    //grid: masonry / repeat(auto-fit, minmax(2em, 1fr));
    //grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(33%, 1fr));
    grid-auto-rows: v-bind(rowHeight);
    grid-auto-flow: row dense;
  }
  &.mSheet-layout-fRow,&.mSheet-layout-fWrwap,&.mSheet-layout-fColumn,
  &.mSheet-layout-gMasonry,&.mSheet-layout-gMasonryRow,&.mSheet-layout-gTile{
    justify-content: v-bind(justifyContent);  
    justify-items  : v-bind(justifyItems);  
    align-content  : v-bind(alignContent);  
    align-items    : v-bind(alignItems);  
  }
}
</style>