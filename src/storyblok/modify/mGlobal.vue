<template>
  <mColors :blok="blok.color" class="mGlobal" :style="styleset">
    <mFontJp p :blok="blok.font">
      <StoryblokComponent v-for="blok in blok.header" :key="blok._uid" :blok="blok" />
      <slot></slot>
      <StoryblokComponent v-for="blok in blok.footer" :key="blok._uid" :blok="blok" />
    </mFontJp>
  </mColors>
</template>

<script setup>
  const prop = defineProps({ blok: Object });
  const bpmsec =  () => {
    if(prop.blok.bpm == null) return 0.5;
    return 60 / prop.blok.bpm;
  };
  const styleset = computed( () => {
    var style = {};
    style['--s-bpm-half'] =  `${bpmsec().toFixed(2)/2}s`;
    style['--s-bpm-1']    =  `${bpmsec().toFixed(2)*1}s`;
    style['--s-bpm-2']    =  `${bpmsec().toFixed(2)*2}s`;
    style['--s-bpm-4']    =  `${bpmsec().toFixed(2)*4}s`;
    style['--s-bpm-8']    =  `${bpmsec().toFixed(2)*8}s`;
    return style;
  });
</script>

<style lang="scss" >
  .mGlobal{
    background-color:hsl(var(--c-base));
    color:hsl(var(--c-main));
  }

</style>