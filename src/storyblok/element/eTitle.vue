<template>
  <component :is="headelem" :class="['eTitle', `eTitle-${blok.aligin}`, {'eTitle-wrap': blok.wrap}]" >
    <span v-for="word in words" :key="word" class="eTitle-word">
      {{word}}
    </span>
  </component>
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
</script>

<style lang="scss" scoped>
  .eTitle{
    .eTitle-word{
      display:inline-block;
    }
    &.eTitle-left   {text-align:left  }
    &.eTitle-right  {text-align:right }
    &.eTitle-center {text-align:center}
    &.eTitle-wrap   {display:flex;flex-direction:column;}
  }
</style>