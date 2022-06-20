<template>
  <div class="bPoint3">
    <StoryblokComponent v-for="blok in blok.points" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
  const prop = defineProps({ blok: Object });
  const stylePC = computed( () => {
    return `${prop.blok.stylePC}`;
  } );
  const styleSP = computed( () => {
    return `${prop.blok.stylePC}`;
  } );
  const height = computed( () => {
    switch(prop.blok.height.style){
      case 'percent':
        return `${prop.blok.height.value}%`;
      case 'vheight':
        return `${prop.blok.height.value}vh`;
      case 'auto':
      default:
        return 'auto';
    }
  } );
</script>

<style lang="scss" >
.bPoint3{
  height:v-bind(height);
  display:flex;
  justify-content:space-around;
  @include mq('LARGE'){
    flex-direction:v-bind(stylePC);
  }
  @include mq('SHORT'){
    flex-direction:v-bind(styleSP);
  }
  height:100%;
}
</style>