<template>
  <bSheet :blok="prop.baseBlock" >
    <span>{{prop.blok.start}} - {{prop.blok.end}} - {{prop.blok.title}} </span>
    <eTimeEvent
      v-for="ev in prop.blok.events"
      :key="ev._uid"
      :blok="ev"
    />
  </bSheet>
</template>

<script setup>
const prop = defineProps({ blok: Object, baseBlock:Object, baseTitle:Object });
</script>

<style lang="scss" scoped>
.eImage{
}
</style>