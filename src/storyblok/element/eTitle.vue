<template>

  <mFontJp
    :blok="fontset" 
    :headelem="headelem"
    :class="[
      'eTitle',
      {'eTitle-wrap'  : blok.wrap},
      {'eTitle-living': blok.living},
      blok.aligin   != null && blok.aligin   != '' ? `eTitle-${blok.aligin}` : '',
      blok.typo     != null && blok.typo     != '' ? `eTitle-typo-${blok.typo}` : '',
      blok.colorset != null && blok.colorset != '' ? `eTitle-colorset-${blok.colorset}` : '',
      blok.appear   != null && blok.appear   != '' ? `eTitle-appear-${blok.appear}` : '',
      blok.shadow   != null && blok.shadow   != '' ? `mShadow-d${blok.shadow}` : ''
    ]">
      <span 
        v-for="word in words"
        :data-text="word"
        :key="word"
        :class="['eTitle-word']"
        v-appear="{ cl: 'APPEAR' }"
      >
        {{word}}
      </span>
  </mFontJp>
</template>

<script setup>
  const prop = defineProps({ blok: Object, text:{ type:String ,default:''} });
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
    if(prop.text != '') return prop.text.split('\n');
    return prop.blok.text.split('\n');
  } );
  const fontset = computed( () => {
    if(prop.blok.font == null) return {ison:false};
    return prop.blok.font;
  } );
</script>

<style lang="scss" scoped>

@import "@/assets/styles/_shadow.scss";
@import "@/assets/styles/_typography.scss";
@import "@/assets/styles/_appear.scss";

  .eTitle{
    .eTitle-word{
      display:inline-block;
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
        @include typo-neon-01((var(--c-base-l)),(var(--c-base)),(var(--c-acce-d)));
      }
      &.eTitle-living .eTitle-word{
        @include typo-neon-01-living((var(--c-base-l)),(var(--c-base)),(var(--c-acce-d)),var(--s-bpm-4));
      }
      &.eTitle-appear-special .eTitle-word.APPEAR{
        @include typo-neon-01-appear((var(--c-base-l)),(var(--c-base)),(var(--c-acce-d)),var(--s-bpm-4));
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
         @include typo-retro-01(var(--c-deco),var(--c-text));
      }
    }

    &.eTitle-typo-spark{
      .eTitle-word{
         @include typo-spark-01(var(--c-text),var(--c-deco-l));
      }
      &.eTitle-living .eTitle-word{
        @include typo-spark-01-living(var(--c-text),var(--c-deco-l),var(--s-bpm-4));
      }
      &.eTitle-appear-special .eTitle-word.APPEAR{
        @include typo-spark-01-appear(var(--c-text),var(--c-deco-l),var(--s-bpm-4));
      }
    }


    &.eTitle-appear-slidein{
      //overflow:hidden;
      .eTitle-word{
        &:not(.APPEAR){ @include appear-slidein-off(var(--s-bpm-half));}
             &.APPEAR { @include appear-slidein-on (var(--s-bpm-half));}
      }
    }
  }
</style>