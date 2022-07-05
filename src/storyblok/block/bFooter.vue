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
  background:hsl(var(--c-main));
  color:hsl(var(--c-base));
  height:6rem;
  margin-top:2rem;
  font-weight:bold;
  display:flex;
  justify-content:center;
  align-items: center;
}
</style>