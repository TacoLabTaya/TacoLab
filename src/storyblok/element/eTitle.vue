<template>
  <component 
    :is="headelem" 
    :class="[
      'eTitle',
      `eTitle-${blok.aligin}`,
      {'eTitle-wrap': blok.wrap},
      `eTitle-typo-${blok.typo}`
    ]"
  >
    <span 
      v-for="word in words"
      :data-text="word"
      :key="word"
      :class="['eTitle-word']"
    >
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
  const emsize = computed( () => {
    if(prop.blok.emsize){
      return `${prop.blok.emsize.value}em`;
    }
    return "1em";
  } );
</script>

<style lang="scss" scoped>

@import "@/assets/styles/_typography.scss";

  .eTitle{
    .eTitle-word{
      display:inline-block;
      font-size:v-bind(emsize);
    }
    
    &.eTitle-left   {text-align:left  }
    &.eTitle-right  {text-align:right }
    &.eTitle-center {text-align:center}
    &.eTitle-wrap   {display:flex;flex-direction:column;}


    &.eTitle-typo-none{
      .eTitle-word{}
    }
    &.eTitle-typo-grad{
      .eTitle-word{}
    }
    &.eTitle-typo-neon{
      .eTitle-word{}
    }
    &.eTitle-typo-pop{
      .eTitle-word{}
    }
    &.eTitle-typo-stecker{
      .eTitle-word{
        @include typo-retro-02((var(--c-main)),(var(--c-base)),(var(--c-base)));
      }
    }
    &.eTitle-typo-layered{
      .eTitle-word{
         @include retrostecker((var(--c-base)));
      }
    }
  }
</style>