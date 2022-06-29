<template>
  <div class="eTimeEvent">
    <eCard :blok="prop.baseCard">
      <template #title>
        <eTitle
          :blok="prop.baseSub"
          :text="prop.blok.title"
        />
      </template>
      <template #content>
        <p>
          <span>{{prop.blok.description}}</span>
        </p>
      </template>
    </eCard>
  </div>
</template>

<script setup>
const prop = defineProps({ 
  blok: Object,
  baseSub: Object,
  baseCard: Object
 });
</script>

<style lang="scss" scoped>
.eTimeEvent{
}
</style>