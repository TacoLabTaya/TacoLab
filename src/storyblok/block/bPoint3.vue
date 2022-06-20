<template>
  <div :class="[
    'bPoint3',
    `bPoint3-pc-${prop.blok.stylePC}`,
    `bPoint3-sp-${prop.blok.styleSP}`
    ]">
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

  //height:100%;
  &.bPoint3-pc-row{
    @include mq('LARGE'){
      flex-direction:row;
      >*{width:33%;}
    }
  }
  &.bPoint3-pc-column{
    @include mq('LARGE'){
      flex-direction:column;
      >*{height:33%;}
    }
  }
  //height:100%;
  &.bPoint3-sp-row{
    @include mq('SHORT'){
      flex-direction:row;
      >*{width:33%;}
    }
  }
  &.bPoint3-sp-column{
    @include mq('SHORT'){
      flex-direction:column;
      >*{height:33%;}
    }
  }


}
</style>