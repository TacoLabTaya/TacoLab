<template>
  <picture class="eImage">
    <source v-if="blok.sourcePC.id" :srcset="blok.sourcePC.filename" media="(min-width: 769px)" />
    <img :src="blok.source.filename" />
  </picture>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" scoped>
.eImage{
}
</style>