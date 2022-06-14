<template>
  <div 
    v-if="blok.style!=''" 
    :class="['eBackground',`eBackground-${blok.style}`]"
  />
</template>

<script setup>
  const prop = defineProps({ blok: Object });
</script>

<style lang="scss" >
  .eBackground{
    &.eBackground-texture{
      background-color:lightgray;
    }
  }
</style>