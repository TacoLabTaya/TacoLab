<template>
  <div class="mColor">
    <slot />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" >
.mColor{
}
</style>