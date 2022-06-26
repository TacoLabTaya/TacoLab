<template>
  <div 
    v-if="blok.modestyle!=''" 
    v-appear="'APPEAR'"
    :class="[
      'eBack',
      blok.modestyle != null && blok.modestyle   != '' ? `eBack-${blok.modestyle.mode}`    : '',
      blok.modestyle != null && blok.modestyle   != '' ? `eBack-${blok.modestyle.style}`   : '',
      blok.colorset  != null && blok.colorset    != '' ? `eBack-colorset-${blok.colorset}` : '',
      blok.appear    != null && blok.appear      != '' ? `eBack-appear-${blok.appear}`     : '',
      {'eBack-anime-living' : blok.living}
    ]"
  />
</template>

<script setup>
  const prop = defineProps({ blok: Object });
  const insetSP = computed( () => {
    if( prop.blok.positionsSP == null || prop.blok.positionsSP.ison === false) return "0%";
    return`${prop.blok.positionsSP.top}% ${prop.blok.positionsSP.right}% ${prop.blok.positionsSP.bottom}% ${prop.blok.positionsSP.left}%`;
  } );
  const insetPC = computed( () => {
    if( prop.blok.positionsPC == null || prop.blok.positionsPC.ison === false) return "0%";
    return`${prop.blok.positionsPC.top}% ${prop.blok.positionsPC.right}% ${prop.blok.positionsPC.bottom}% ${prop.blok.positionsPC.left}%`;
  } );
  const point = computed( () => {
    if( prop.blok.modestyle == null || prop.blok.modestyle.size == null) return "1";
    return `${prop.blok.modestyle.size}`;
  });
</script>


<style lang="scss">
/*
  --c-base: v-bind(cBase);
  --c-main: v-bind(cMain);
  --c-acce: v-bind(cAcce);
 */
@import "@/assets/styles/background/_texture.scss";
@import "@/assets/styles/background/_flame.scss";
@import "@/assets/styles/background/_gradient.scss";
@import "@/assets/styles/_appear.scss";



  .eBack{
    @include mq('SHORT'){ 
      inset :v-bind(insetSP);
    }
    @include mq('LARGE'){ 
      inset :v-bind(insetPC);
    }

    @mixin setDecoTexture($b,$d){
        --c-back  :var(#{$b});
        --c-back-d:var(#{$b}-d);
        --c-back-l:var(#{$b}-l);
        --c-deco  :var(#{$d});
        --c-deco-d:var(#{$d}-d);
        --c-deco-l:var(#{$d}-l);
    }
    &.eBack-colorset-base-main{
      @include setDecoTexture(--c-base,--c-main);
    }
    &.eBack-colorset-base-acce{
      @include setDecoTexture(--c-base,--c-acce);
    }
    &.eBack-colorset-main-base{
      @include setDecoTexture(--c-main,--c-base);
    }
    &.eBack-colorset-main-acce{
      @include setDecoTexture(--c-main,--c-acce);
    }
    &.eBack-colorset-acce-base{
      @include setDecoTexture(--c-acce,--c-base);
    }
    &.eBack-colorset-acce-main{
      @include setDecoTexture(--c-acce,--c-main);
    }


    &.eBack-heroimage{
      &.eBack-gradbase{}
      &.eBack-gradmain{}
      &.eBack-somedots{}
    }
    &.eBack-texture{
      &.eBack-zarazara{
        @include texture-3dbox-01((var(--c-back-l)),(var(--c-deco-l)),v-bind(point));
      }
      &.eBack-tsurutsuru{}
      &.eBack-dekoboko{}
    }
    &.eBack-gradient{
      &.eBack-circle{
        @include  grad-circle-01((var(--c-deco-l)),(var(--c-deco-d)),40%,40%);
      }
    }
    &.eBack-flame{
      &.eBack-glow{}

      &.eBack-metal{
        @include flame-metal-01(var(--c-deco-l),var(--c-deco-d),var(--c-back-l),var(--c-back-d),v-bind(point));
        &.eBack-anime-living{
          @include flame-metal-01-living(var(--c-deco-l),var(--c-deco-d),var(--c-back-l),var(--c-back-d),var(--s-bpm-8));
        }
        &.eBack-appear-special.APPEAR{
          @include flame-metal-01-appear(var(--c-deco-l),var(--c-deco-d),var(--c-back-l),var(--c-back-d),var(--s-bpm-1));
        }
      }

    }
    &.eBack-glassgrad{
      &.eBack-frosted{}
      &.eBack-jitter{}
    }
    &.eBack-stripe{
      &.eBack-stripe1{}
    }

    
    &.eBack-appear-slidein{
      &:not(.APPEAR){ @include appear-slidein-off(var(--s-bpm-half));}
           &.APPEAR { @include appear-slidein-on (var(--s-bpm-half));}
    }
  }
</style>