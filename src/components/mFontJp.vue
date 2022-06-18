<template>
  <component 
    :is="headelem" 
    :class="[
      { 'mFontJp'        : blok.ison },
      { 'mFontJp--family': blok.family != ''  },
      { 'mFontJp--weight': blok.weight != 400 },
      { 'mFontJp--emsize': blok.emsize != 1   }
    ]">
    <link v-if="blok.family!=''" rel="preconnect" href="https://fonts.googleapis.com">
    <link v-if="blok.family!=''" rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link v-if="blok.family !=''" :href='`https://fonts.googleapis.com/css2?family=${blok.family}&display=swap`' rel="stylesheet">
    <slot />
  </component>
</template>

<script setup>
  const prop = defineProps({ blok: Object, headelem:{ type:String ,default:'div'} });
  const fontFamily = computed( () => {
    return `"${prop.blok.family.split('+').join(" ")}"`;
  });
  const fontWeight = computed( () => {
    return prop.blok.weight;
  });
  const fontEmSize = computed( () => {
    return `${prop.blok.emsize}em`;
  });
</script>

<style lang="scss" >
.mFontJp,.mFontJp *{
  &.mFontJp--family{
    font-family: v-bind(fontFamily);
  }
  &.mFontJp--weight{
    font-weight: v-bind(fontWeight);
  }
  &.mFontJp--emsize{
    font-size  : v-bind(fontEmSize);
  }
}
</style>