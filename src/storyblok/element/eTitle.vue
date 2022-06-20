<template>

  <mFontJp
    :blok="blok.font" 
    :headelem="headelem"
    :class="[
      'eTitle',
      `eTitle-${blok.aligin}`,
      {'eTitle-wrap': blok.wrap},
      `eTitle-typo-${blok.typo}`,
      `eTitle-colorset-${blok.colorset}`,
      `mShadow-d${blok.shadow}`
    ]">
      <span 
        v-for="word in words"
        :data-text="word"
        :key="word"
        :class="['eTitle-word']"
      >
        {{word}}
      </span>
  </mFontJp>
</template>

<script setup>
  const prop = defineProps({ blok: Object });
  const headelem = computed(() => {
    switch(prop.blok.headline){
      case 'h1':
        return 'h1';
      case 'h2':
        return 'h2';
      case 'h3':
        return 'h3';
      case 'h4':
        return 'h4';
      case 'p':
        return 'p';
      default:
        return 'h1';
    };
  });
  const words = computed( () => {
    return prop.blok.text.split('\n');
  } );
  /*
  const emsize = computed( () => {
    if(prop.blok.emsize){
      return `${prop.blok.emsize.value}em`;
    }
    return "1em";
  } );
  const weight = computed( () => {
    if(prop.blok.weight){
      return `${prop.blok.weight*100}`;
    }
    return "400";
  } );
  */
 /*
  const psize = computed( () => {
    let base = 1;
    switch(prop.blok.headline){
      case 'h1':
        base += 0.2;
      case 'h2':
        base += 0.2;
    }
    return `${9  * base}`;
  } );
  */
</script>

<style lang="scss" scoped>

@import "@/assets/styles/_shadow.scss";
@import "@/assets/styles/_typography.scss";

  .eTitle{
    .eTitle-word{
      display:inline-block;
      /*
      font-size:v-bind(emsize);
      font-weight:v-bind(weight);
      */
    }
    
    &.eTitle-left   {text-align:left  }
    &.eTitle-right  {text-align:right }
    &.eTitle-center {text-align:center}
    &.eTitle-wrap   {display:flex;flex-direction:column;}


    @mixin setDecoText($d,$t){
        --c-deco  :var(#{$d});
        --c-deco-d:var(#{$d}-d);
        --c-deco-l:var(#{$d}-l);
        --c-text  :var(#{$t});
        --c-text-d:var(#{$t}-d);
        --c-text-l:var(#{$t}-l);
    }
    &.eTitle-colorset-base-main{
      .eTitle-word, .eTitle-word::before, .eTitle-word::after{
        @include setDecoText(--c-base,--c-main);
      }
    }
    &.eTitle-colorset-base-acce{
      .eTitle-word, .eTitle-word::before, .eTitle-word::after{
        @include setDecoText(--c-base,--c-acce);
      }
    }
    &.eTitle-colorset-main-base{
      .eTitle-word, .eTitle-word::before, .eTitle-word::after{
        @include setDecoText(--c-main,--c-base);
      }
    }
    &.eTitle-colorset-main-acce{
      .eTitle-word, .eTitle-word::before, .eTitle-word::after{
        @include setDecoText(--c-main,--c-acce);
      }
    }
    &.eTitle-colorset-acce-base{
      .eTitle-word, .eTitle-word::before, .eTitle-word::after{
        @include setDecoText(--c-acce,--c-base);
      }
    }
    &.eTitle-colorset-acce-main{
      .eTitle-word, .eTitle-word::before, .eTitle-word::after{
        @include setDecoText(--c-acce,--c-main);
      }
    }

    &.eTitle-typo-none{
      .eTitle-word{}
    }
    &.eTitle-typo-grad{
      .eTitle-word{}
    }
    &.eTitle-typo-neon{
      .eTitle-word{
        @include typo-blight-01((var(--c-base-l)),(var(--c-base)),(var(--c-acce-d)),6s);
      }
    }
    &.eTitle-typo-pop{
      .eTitle-word{}
    }
    &.eTitle-typo-stecker{
      .eTitle-word{
        @include typo-retro-02(var(--c-deco),var(--c-text-d),var(--c-text));
      }
    }
    &.eTitle-typo-layered{
      .eTitle-word{
         @include retrostecker(var(--c-deco),var(--c-text));
      }
    }
  }
</style>