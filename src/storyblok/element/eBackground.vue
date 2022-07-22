<template>
  <div 
    v-if="blok.modestyle!=''"
        v-appear="{ cl: 'APPEAR' }"
    :class="[
      'eBack' ,
      blok.modestyle != null && blok.modestyle   != '' ? `eBack-${blok.modestyle.mode}`    : '',
      blok.modestyle != null && blok.modestyle   != '' ? `eBack-${blok.modestyle.style}`   : '',
      blok.colorset  != null && blok.colorset    != '' ? `eBack-colorset-${blok.colorset}` : '',
      blok.appear    != null && blok.appear      != '' ? `eBack-appear-${blok.appear}`     : '',
      {'eBack-withImage'    : withImage},
      {'eBack-anime-living' : blok.living}
    ]"
  >
    <img 
      v-if="withImage"
      :src="imagePath"
      :alt="imgjson.alt"
      :class="['eBack-img']"
    />
  </div>
</template>
<script setup>
  const nuxtApp = useNuxtApp()
  const prop = defineProps({ 
    blok: Object,
    imgjson: { Type:Object, default:null }
   });
  const get4Position = (pos) => {
    if( pos == null || pos.ison === false) return "0%";
    const u = pos.unit == null ? '%' : pos.unit;
    return`${pos.top}${u} ${pos.right}${u} ${pos.bottom}${u} ${pos.left}${u}`;
  };
  const insetSP = computed( () => {
    return get4Position(prop.blok.positionsSP);
  } );
  const insetPC = computed( () => {
    return get4Position(prop.blok.positionsPC);
    //console.log();
  } );
  const point = computed( () => {
    if( prop.blok.modestyle == null || prop.blok.modestyle.size == null) return "1";
    return `${prop.blok.modestyle.size}`;
  });
  const withImage = computed( () => {
    return prop.imgjson == null || prop.imgjson.filename == '' ? false: true; 
  });
  const imagePath = computed( () => {
    return prop.imgjson == null || prop.imgjson.filename == '' 
      ? ''
      : nuxtApp.$imagePath(prop.imgjson.filename); 
  });
  const imageUrl = computed( () => {
    return prop.imgjson == null || prop.imgjson.filename == '' 
      ? ''
      : `url('${nuxtApp.$imagePath(prop.imgjson.filename)}')`; 
  });
  const imageUrlGray = computed( () => {
    return prop.imgjson == null || prop.imgjson.filename == '' 
      ? ''
      : `url('${nuxtApp.$imagePathGray(prop.imgjson.filename)}')`; 
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

    .eBack-img {
      width:100%;
      object-fit: cover;
      height: 100%;
    }
    
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
        &:not(.eBack-withImage){
          @include flame-metal-01(var(--c-deco-l),var(--c-deco-d),var(--c-back-l),var(--c-back-d),v-bind(point));
        }
        &.eBack-withImage{
          @include flame-metal-01(var(--c-deco-l),var(--c-deco-d),var(--c-back-l),var(--c-back-d),v-bind(point),v-bind(imageUrl));
        }
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