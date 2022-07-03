<template>
  <picture class="eImage">
    <source v-if="blok.sourcePC.id" :srcset="blok.sourcePC.filename" media="(min-width: 769px)" class="eImage-src"/>
    <img :src="blok.source.filename" class="eImage-src"/>
  </picture>
</template>

<script setup>
const prop = defineProps({ blok: Object });

const widthPC = computed( () => { 
  if( prop.blok.widthPC == null ) return '100%';
  return `${prop.blok.widthPC.value}%`;
});
const widthSP = computed( () => { 
  if( prop.blok.widthPC == null ) return '100%';
  return `${prop.blok.widthPC.value}%`;
});
const radius = computed( () => { 
  if( prop.blok.radius == null ) return '0%';
  return `${prop.blok.radius.value}%`;
});
</script>

<style lang="scss" scoped>
.eImage{
  @include mq('SHORT'){width:v-bind(widthSP);}
  @include mq('LARGE'){width:v-bind(widthPC);}
  border-radius: v-bind(radius);
  overflow:hidden;

  .eImage-src{
    width:100%;
  }
}
</style>