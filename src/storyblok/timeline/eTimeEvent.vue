<template>
  <div class="eTimeEvent">
    event
    {{prop.blok.at}}
  </div>
</template>

<script setup>
const prop = defineProps({ blok: Object });
</script>

<style lang="scss" scoped>
.eTimeEvent{
}
</style>