<template>
  <mFontJp
    :blok="blok.font" 
    :headelem="'div'"
    :class="[
      'eText',
      `eText-${blok.aligin}`,
      `eText-colorset-${blok.colorset}`,
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

</script>

<style lang="scss" >
  .eText{
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

  }
</style>