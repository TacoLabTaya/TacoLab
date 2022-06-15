<template>
  <div 
    v-if="blok.modestyle!=''" 
    :class="['eBack',`eBack-${blok.modestyle.mode}`,`eBack-${blok.modestyle.style}`]"
  />
</template>

<script setup>
  const prop = defineProps({ blok: Object });
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
    &.eBack-heroimage{
      &.eBack-gradbase{}
      &.eBack-gradmain{}
      &.eBack-somedots{}
    }
    &.eBack-texture{
      background-color:lightgray;
      &.eBack-zarazara{
        @include texture-3dbox-01((var(--c-base-d)),(var(--c-base)),(var(--c-base-l)),1);
      }
      &.eBack-tsurutsuru{}
      &.eBack-dekoboko{}
    }
    &.eBack-flame{
      &.eBack-glow{}
      &.eBack-metal{}
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