<template>
  <div v-if="blok.ison" class="mFontJp">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link :href='`https://fonts.googleapis.com/css2?family=${blok.family}&display=swap`' rel="stylesheet">
    <slot />
  </div>
</template>

<script setup>
  const prop = defineProps({ blok: Object });
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
.mFontJp{
  font-family: v-bind(fontFamily);
  font-weight: v-bind(fontWeight);
  font-size  : v-bind(fontEmSize);
}
</style>