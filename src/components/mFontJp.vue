<template>
  <component 
    :is="headelem" 
    :class="[
      { 'mFontJp'          : blok.ison },
      { 'mFontJp--family'  : blok.ison && blok.family != ''  },
      { 'mFontJp--weight'  : blok.ison && blok.weight != 400 },
      { 'mFontJp--emsizePC': blok.ison && blok.emsizePC != '1' },
      { 'mFontJp--emsizeSP': blok.ison && blok.emsizeSP != '1' },
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
  const fontEmSizePC = computed( () => {
    return `${prop.blok.emsizePC}em`;
  });
  const fontEmSizeSP = computed( () => {
    return `${prop.blok.emsizeSP}em`;
  });
</script>

<style lang="scss" >
.mFontJp--family,.mFontJp--family *{
    font-family: v-bind(fontFamily);
}
.mFontJp--weight,.mFontJp--weight *{
    font-weight: v-bind(fontWeight);
}
.mFontJp--emsizePC {
  >div,>h1,>h2,>h3,>p,>a,>span{
    @include mq('LARGE'){ font-size: v-bind(fontEmSizePC);}
  }
}
.mFontJp--emsizeSP {
  >div,>h1,>h2,>h3,>p,>a,>span{
    @include mq('SHORT'){ font-size: v-bind(fontEmSizeSP); }
  }
}
</style>