<template>
  <div class="bMenuCon">
    <eMenuItem v-for="bl in prop.blok.contents" :key="bl._uid" :blok="bl" :baseTitle="prop.blok.baseTitle[0]" />
  </div>
</template>

<script setup>
const prop = defineProps({ blok: Object });
</script>

<style lang="scss" >
.bMenuCon{
  display:flex;
  gap:0.5em;
}
</style>