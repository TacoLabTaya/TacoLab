<template>
  <div class="eCard">
    <h4 class="eCard-title">{{blok.title}}</h4>
    <p  class="eCard-text" >{{blok.text }}</p>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" >
.eCard{
  .eCard-title{}
  .eCard-text {}
}
</style>