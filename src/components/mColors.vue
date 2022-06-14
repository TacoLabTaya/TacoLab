<template>
  <div class="mColors">
    <slot />
  </div>
</template>

<script setup>
  const prop = defineProps({ blok: Object });
  
  const cBase = computed( () => {
    return `${prop.blok.base}`;
  });
  const cMain = computed( () => {
    return `${prop.blok.main}`;
  });
  const cAcce = computed( () => {
    return `${prop.blok.acce}`;
  });
</script>

<style lang="scss" >
.mColors{
  --c-base: v-bind(cBase);
  --c-main: v-bind(cMain);
  --c-acce: v-bind(cAcce);
}
</style>