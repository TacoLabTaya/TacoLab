<template>
  <h2 class="eTitle">
    {{blok.text}}
  </h2>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" scoped>
.eTitle{
}
</style>