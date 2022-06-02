<template>
  <div class="bFooter">
    <span>{{blok.copyright}}</span>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" >
.bFooter{
  display:flex;
}
</style>