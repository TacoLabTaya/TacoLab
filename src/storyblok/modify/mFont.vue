<template>
  <div class="mFont">
    <slot />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" >
.mFont{
}
</style>