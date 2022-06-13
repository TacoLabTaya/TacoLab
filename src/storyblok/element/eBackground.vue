<template>
  <div v-if="blok.image.filename!=''" class="eBackground">
    background file[{{blok.image.filename}}]
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" >
.eBackground{
}
</style>