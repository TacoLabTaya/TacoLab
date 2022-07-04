<template>
  <div  class="eImage">
    <picture class="eImage-pic">
      <source v-if="blok.sourcePC.id" :srcset="blok.sourcePC.filename" media="(min-width: 769px)" class="eImage-src"/>
      <img :src="blok.source.filename" class="eImage-src"/>
    </picture>
    <p v-if="title != ''" class="eImage-title">{{title}}</p>
  </div>
</template>

<script setup>
const prop = defineProps({ blok: Object });

const widthPC = computed( () => { 
  if( prop.blok.widthPC == null ) return '100%';
  if( prop.blok.widthPC == 0    ) return 'auto';
  return `${prop.blok.widthPC.value}%`;
});
const widthSP = computed( () => { 
  if( prop.blok.widthSP == null ) return '100%';
  if( prop.blok.widthSP == 0    ) return 'auto';
  return `${prop.blok.widthSP.value}%`;
});   
const radius = computed( () => { 
  if( prop.blok.radius == null ) return '0%';
  return `${prop.blok.radius.value}%`;
});
const title = computed( () => { 
  if( prop.blok.title == null ) return '';
  return prop.blok.title;
});
</script>

<style lang="scss" scoped>
.eImage{
  @include mq('SHORT'){width:v-bind(widthSP);}
  @include mq('LARGE'){width:v-bind(widthPC);}
  .eImage-pic{
    .eImage-src{
    border-radius: v-bind(radius);
      width:100%;
    }
  }
  .eImage-title{
    font-size:0.8em;
    margin-top:0.2em;
    text-align:center;
  }
}
</style>