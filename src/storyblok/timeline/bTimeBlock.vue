<template>
  <bSheet :blok="prop.baseBlock" class="bTimeBlock">
    <div
      :class="['bTimeBlock-first','bTimeBlock-child']"
    >
      <eTitle
        :class="['bTimeBlock-years']"
        :blok="prop.baseTitle"
        :text="`${prop.blok.end} - ${prop.blok.start}`"
      />
      <eTitle
        :class="['bTimeBlock-title']"
        :blok="prop.baseTitle"
        :text="prop.blok.title"
      />
    </div>
    <p :class="['bTimeBlock-descr','bTimeBlock-child']">
      {{prop.blok.description}}
    </p>
    <eText 
      v-for="bl in blok.detail" 
      :key="bl._uid" 
      :blok="bl"
      :class="['bTimeBlock-detail','bTimeBlock-child']"
    />
    <eTimeEvent
      v-for="ev in prop.blok.events"
      :key="ev._uid"
      :blok="ev"
      :baseSub  ="prop.baseSub"
      :baseCard ="prop.baseCard"
       :class="['bTimeBlock-event','bTimeBlock-child']"
    />
    <div :class="['bTimeBlock-marks','bTimeBlock-child']" >
      <eButton        
        v-for="mark in markList"
        :blok="prop.baseMark"
        :data-text="mark"
        :key="mark">
        {{mark}}
      </eButton>
    </div>
  </bSheet>
</template>

<script setup>
  const prop = defineProps({ 
    blok: Object, 
    baseBlock:Object, 
    baseTitle:Object, 
    baseSub  :Object, 
    baseCard :Object, 
    baseMark :Object
  });
  const childmargin = computed( () => {
    if(prop.baseBlock === {} || prop.baseBlock.childmargin == null) return '1rem';
    return `${prop.baseBlock.childmargin}rem`;
  } );
  const markList = computed( () => {
    if( prop.blok.marks == null || prop.blok.marks == '') return []
    return prop.blok.marks.split('\n');
  });
</script>

<style lang="scss" scoped>
  .bTimeBlock{
    .bTimeBlock-first{
      .bTimeBlock-years{
        font-size:1.5em;
      }
      .bTimeBlock-title{}
    }
    .bTimeBlock-descr{}
    .bTimeBlock-detail{ font-size:1.2em; }
    .bTimeBlock-event{}
    .bTimeBlock-marks{
      font-size:0.9em;
      span+span{margin-left:0.2em;}
    }

    .bTimeBlock-child + .bTimeBlock-child{
      margin-top:v-bind(childmargin);
    }
  }
</style>