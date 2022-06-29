<template>
  <bSheet :blok="prop.baseBlock" >
    <eTitle
      :blok="prop.baseTitle"
      :text="titleText"
    />
    <p>{{prop.blok.description}}</p>
    <eTimeEvent
      v-for="ev in prop.blok.events"
      :key="ev._uid"
      :blok="ev"
      :baseSub  ="prop.baseSub"
      :baseCard ="prop.baseCard"
    />
  </bSheet>
</template>

<script setup>
  const prop = defineProps({ 
    blok: Object, 
    baseBlock:Object, 
    baseTitle:Object, 
    baseSub  :Object, 
    baseCard :Object
  });
  const titleText = computed( () => {
    return `${prop.blok.end}\n${prop.blok.title}`;
  } );
</script>

<style lang="scss" scoped>
  .eImage{
  }
</style>