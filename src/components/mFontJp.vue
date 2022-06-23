<template>
  <component 
    :is="headelem" 
    :class="[
      { 'mFontJp'          : blok.ison },
      { 'mFontJp--family'  : blok.ison && blok.family != null && blok.family != ''  },
      { 'mFontJp--weight'  : blok.ison && blok.weight != null && blok.weight != 400 },
      { 'mFontJp--height'  : blok.ison && blok.height != null && blok.height != 1.2 },
      { 'mFontJp--letter'  : blok.ison && blok.letter != null && blok.letter != 0 },
      { 'mFontJp--emsizePC': blok.ison && blok.emsizePC != null && blok.emsizePC != '1' },
      { 'mFontJp--emsizeSP': blok.ison && blok.emsizeSP != null && blok.emsizeSP != '1' },
    ]">
    <link v-if="blok.family != null && blok.family!=''" rel="preconnect" href="https://fonts.googleapis.com">
    <link v-if="blok.family != null && blok.family!=''" rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link v-if="blok.family != null && blok.family!=''" :href='`https://fonts.googleapis.com/css2?family=${blok.family}&display=swap`' rel="stylesheet">
    <slot />
  </component>
</template>

<script setup>
  const prop = defineProps({ blok: Object, headelem:{ type:String ,default:'div'} });
  const fontFamily = computed( () => {
    if( prop.blok.family == null ) return "";
    return `"${prop.blok.family.split('+').join(" ")}"`;
  });
  const fontWeight = computed( () => {
    if( prop.blok.weight == null ) return "400";
    return prop.blok.weight;
  });
  const fontEmSizePC = computed( () => {
    if( prop.blok.emsizePC == null ) return "1em";
    return `${prop.blok.emsizePC}em`;
  });
  const fontEmSizeSP = computed( () => {
    if( prop.blok.emsizeSP == null ) return "1em";
    return `${prop.blok.emsizeSP}em`;
  });
  const height = computed( () => {
    if( prop.blok.height == null ) return "1.2";
    return `${prop.blok.height}`;
  });
  const letter = computed( () => {
    if( prop.blok.letter == null ) return "em";
    return `${prop.blok.letter}em`;0
  });
</script>

<style lang="scss" >
.mFontJp--family,.mFontJp--family *{
    font-family: v-bind(fontFamily);
}
.mFontJp--weight,.mFontJp--weight *{
    font-weight: v-bind(fontWeight);
}
.mFontJp--letter,.mFontJp--letter *{
    letter-spacing: v-bind(letter);
}
.mFontJp--height,.mFontJp--height *{
    line-height: v-bind(height);
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