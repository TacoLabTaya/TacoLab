<template>
  <div 
    v-if="blok.modestyle!=''" 
    :class="['eBack',`eBack-${blok.modestyle.mode}`,`eBack-${blok.modestyle.style}`]"
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
</script>

<style lang="scss">
/*
  --c-base: v-bind(cBase);
  --c-main: v-bind(cMain);
  --c-acce: v-bind(cAcce);
 */
@import "@/assets/styles/background/_texture.scss";
@import "@/assets/styles/background/_flame.scss";

  .eBack{
    @include mq('SHORT'){ 
      inset :v-bind(insetSP);
    }
    @include mq('LARGE'){ 
      inset :v-bind(insetPC);
    }

    &.eBack-heroimage{
      &.eBack-gradbase{}
      &.eBack-gradmain{}
      &.eBack-somedots{}
    }
    &.eBack-texture{
      background-color:lightgray;
      &.eBack-zarazara{
        @include texture-3dbox-01((var(--c-base-l)),(var(--c-base)),(var(--c-main-l)),1);
      }
      &.eBack-tsurutsuru{}
      &.eBack-dekoboko{}
    }
    &.eBack-flame{
      &.eBack-glow{}
      &.eBack-metal{
        @include flame-metal-01((var(--c-main-l)),(var(--c-main-d)),(var(--c-base-l)),(var(--c-base-d)));
      }
    }
    &.eBack-glassgrad{
      &.eBack-frosted{}
      &.eBack-jitter{}
    }
    &.eBack-stripe{
      &.eBack-stripe1{}
    }
  }
</style>