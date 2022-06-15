<template>
  <div class="mColors">
    <slot />
  </div>
</template>

<script setup>
  const prop = defineProps({ blok: Object });
  
  const hx2r = (hx) => {
      return parseInt(hx.substring(1, 3), 16).toString()
  };
  const hx2g = (hx) => {
      return parseInt(hx.substring(3, 5), 16).toString()
  };
  const hx2b = (hx) => {
      return parseInt(hx.substring(5, 7), 16).toString()
  ;}
  const cBase = computed( () => {
    //return `${prop.blok.base}`;
    return `${hx2r(prop.blok.base)}, ${hx2g(prop.blok.base)}, ${hx2b(prop.blok.base)}`
  });
  const cMain = computed( () => {
    //return `${prop.blok.main}`;
    return `${hx2r(prop.blok.main)}, ${hx2g(prop.blok.main)}, ${hx2b(prop.blok.main)}`
  });
  const cAcce = computed( () => {
    //return `${prop.blok.acce}`;
    return `${hx2r(prop.blok.acce)}, ${hx2g(prop.blok.acce)}, ${hx2b(prop.blok.acce)}`
  });
</script>

<style lang="scss" >
*{
  --c-base: v-bind(cBase);
  --c-main: v-bind(cMain);
  --c-acce: v-bind(cAcce);
}
</style>