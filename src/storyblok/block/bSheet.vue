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
    const valt = (pos.sett == null || !pos.sett ) ? 'auto': `${pos.top}${u}`;
    const valr = (pos.setr == null || !pos.setr ) ? 'auto': `${pos.right}${u}`;
    const vall = (pos.setl == null || !pos.setl ) ? 'auto': `${pos.left}${u}`;
    const valb = (pos.setb == null || !pos.setb ) ? 'auto': `${pos.bottom}${u}`;
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

  const rowHeight = computed( () => {
    return 10;
  } );

  const columnNumber = computed( () => {
    if(prop.blok.layout == null) return {sp:1,tb:2,pc:3,xl:4};
    return {
      sp: prop.blok.layout.number.sp,
      tb: prop.blok.layout.number.tb,
      pc: prop.blok.layout.number.pc,
      xl: prop.blok.layout.number.xl,
    };
  } );
  const columnNumberXS = computed( () => { return columnNumber.value.sp });
  const columnNumberSP = computed( () => { return columnNumber.value.sp });
  const columnNumberTB = computed( () => { return columnNumber.value.tb });
  const columnNumberPC = computed( () => { return columnNumber.value.pc });
  const columnNumberXL = computed( () => { return columnNumber.value.xl });

  const fr = '1fr ';
  const gridColumnsXS = computed(  () =>  { return fr.repeat(columnNumberXS.value) });
  const gridColumnsSP = computed(  () =>  { return fr.repeat(columnNumberSP.value) });
  const gridColumnsTB = computed(  () =>  { return fr.repeat(columnNumberTB.value) });
  const gridColumnsPC = computed(  () =>  { return fr.repeat(columnNumberPC.value) });
  const gridColumnsXL = computed(  () =>  { return fr.repeat(columnNumberXL.value) });

  const itemWidthXS = computed(  () =>  { return `${100 / columnNumberXS.value }%`;});
  const itemWidthSP = computed(  () =>  { return `${100 / columnNumberSP.value }%`;});
  const itemWidthTB = computed(  () =>  { return `${100 / columnNumberTB.value }%`;});
  const itemWidthPC = computed(  () =>  { return `${100 / columnNumberPC.value }%`;});
  const itemWidthXL = computed(  () =>  { return `${100 / columnNumberXL.value }%`;});

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
    z-index:1;
  }
  .bSheet-background{
    position:absolute;
    z-index:-1;
  }
  &.mSheet-childmargin > .bSheet-contents + .bSheet-contents {
    margin-top: v-bind(childmargin);
  }

  &.mSheet-layout-fRow,&.mSheet-layout-fWrap,&.mSheet-layout-fColumn{
    display:flex;
    gap:v-bind(gridGap);
  }
  &.mSheet-layout-fRow   { flex-direction:row; }
  &.mSheet-layout-fWrap  { flex-direction:row; flex-wrap:wrap}
  &.mSheet-layout-fColumn{ flex-direction:column; }

  &.mSheet-layout-gMasonry,&.mSheet-layout-gMasonryRow,&.mSheet-layout-gTile{
    display:grid;
    grid-gap:v-bind(gridGap);
    
    @include mq('xs'){ grid-template-columns:v-bind(gridColumnsXS); }
    @include mq('sp'){ grid-template-columns:v-bind(gridColumnsSP); }
    @include mq('tb'){ grid-template-columns:v-bind(gridColumnsTB); }
    @include mq('pc'){ grid-template-columns:v-bind(gridColumnsPC); }
    @include mq('xl'){ grid-template-columns:v-bind(gridColumnsXL); }
    
    //grid-template-columns:repeat(auto-fit,minmax(100px,1fr));
  }
  &.mSheet-layout-gMasonry{
    //grid-template-columns: repeat(auto-fit, minmax(33%, 1fr));
    grid-auto-rows: v-bind(rowHeight);
    grid-auto-flow: row dense;
    @for $i from 1 through 99 {
      >*:nth-child(#{$i}){
        @include mq('xs'){ grid-row: #{$i} / span v-bind(columnNumberXS);}
        @include mq('sp'){ grid-row: #{$i} / span v-bind(columnNumberSP);}
        @include mq('tb'){ grid-row: #{$i} / span v-bind(columnNumberTB);}
        @include mq('pc'){ grid-row: #{$i} / span v-bind(columnNumberPC);}
        @include mq('xl'){ grid-row: #{$i} / span v-bind(columnNumberXL);}
      }
    }
  }
  &.mSheet-layout-fRow,&.mSheet-layout-fWrwap,&.mSheet-layout-fColumn,
  &.mSheet-layout-gMasonry,&.mSheet-layout-gMasonryRow,&.mSheet-layout-gTile{
    justify-content: v-bind(justifyContent);  
    justify-items  : v-bind(justifyItems);  
    align-content  : v-bind(alignContent);  
    align-items    : v-bind(alignItems);  
    /*
    >*{
        @include mq('xs'){ width:v-bind(itemWidthXS);}
        @include mq('sp'){ width:v-bind(itemWidthSP);}
        @include mq('tb'){ width:v-bind(itemWidthTB);}
        @include mq('pc'){ width:v-bind(itemWidthPC);}
        @include mq('xl'){ width:v-bind(itemWidthXL);}
    }
    */
  }
}
</style>