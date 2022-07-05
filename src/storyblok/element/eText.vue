<template>
  <mFontJp
    :blok="blok.font" 
    :headelem="'div'"
    :class="[
      'eText',
      `eText-${blok.aligin}`,
      `eText-colorset-${blok.colorset}`,
      { 'eText-childmargin': blok.childmargin !=null }
    ]"
    >
      <mTextContent
        v-for="(con,index) in blok.text.content"
        :key="`con-${index}`"
        :content="con"
      />
  </mFontJp>
</template>

<script setup>
  const prop = defineProps({ blok: Object });

  const childmargin = computed( () => {
    return `${prop.blok.childmargin}rem`;
  } );

  const widthPC = computed( () => { 
    if( prop.blok.widthPC == null ) return '100%';
    if( prop.blok.widthPC.value == '0'  ) return 'auto';
    return `${prop.blok.widthPC.value}%`;
  });
  const widthSP = computed( () => { 
    if( prop.blok.widthSP == null ) return '100%';
    if( prop.blok.widthSP.value == '0'  ) return 'auto';
    return `${prop.blok.widthSP.value}%`;
  });
</script>

<style lang="scss" >
  .eText{
    @include mq('SHORT'){width:v-bind(widthSP);}
    @include mq('LARGE'){width:v-bind(widthPC);}

    &.eText-left   {text-align:left  }
    &.eText-right  {text-align:right }
    &.eText-center {text-align:center}

    
    @mixin setDecoText($d,$t){
        --c-deco  :var(#{$d});
        --c-deco-d:var(#{$d}-d);
        --c-deco-l:var(#{$d}-l);
        --c-text  :var(#{$t});
        --c-text-d:var(#{$t}-d);
        --c-text-l:var(#{$t}-l);
    }
    .eText-colorset-base-main{
      @include setDecoText(--c-base,--c-main);
    }
    .eText-colorset-base-acce{
      @include setDecoText(--c-base,--c-acce);
    }
    .eText-colorset-main-base{
      @include setDecoText(--c-main,--c-base);
    }
    .eText-colorset-main-acce{
      @include setDecoText(--c-main,--c-acce);
    }
    .eText-colorset-acce-base{
      @include setDecoText(--c-acce,--c-base);
    }
    .eText-colorset-acce-main{
      @include setDecoText(--c-acce,--c-main);
    }

    color: var(--c-text);

    &.eText-childmargin{
      .mTextContent-display-block + .mTextContent-display-block{
        margin-top: v-bind(childmargin);
      }
    }
  }
</style>