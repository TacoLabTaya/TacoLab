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
        <p v-if="prop.blok.description != null">
          <span>{{prop.blok.description}}</span>
        </p>
        <eText 
          v-for="bl in blok.detail" 
          :key="bl._uid" 
          :blok="bl"
        />
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