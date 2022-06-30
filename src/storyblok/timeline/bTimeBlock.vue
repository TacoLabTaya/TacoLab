<template>
  <bSheet :blok="prop.baseBlock" class="bTimeBlock">
    <eTitle
      :class="['bTimeBlock-title','bTimeBlock-child']"
      :blok="prop.baseTitle"
      :text="titleText"
    />
    <p :class="['bTimeBlock-descr','bTimeBlock-child']">
      {{prop.blok.description}}
    </p>
    <eTimeEvent
      v-for="ev in prop.blok.events"
      :key="ev._uid"
      :blok="ev"
      :baseSub  ="prop.baseSub"
      :baseCard ="prop.baseCard"
       :class="['bTimeBlock-event','bTimeBlock-child']"
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
  const childmargin = computed( () => {
    if(prop.baseBlock === {} || prop.baseBlock.childmargin == null) return '1rem';
    return `${prop.baseBlock.childmargin}rem`;
  } );
</script>

<style lang="scss" scoped>
  .bTimeBlock{
    .bTimeBlock-child + .bTimeBlock-child{
      margin-top:v-bind(childmargin);
    }
  }
</style>