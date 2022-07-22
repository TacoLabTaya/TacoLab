<template>
    <bSheet 
      class="m1stView" 
      :blok="baseSheet"
    >
      <template v-slot:default>
        <eTitle 
            :blok="baseTitle" 
            :text="title" 
            class="m1stView-contents"
        />
      </template>
      <template v-slot:background>
        <EBackground 
            :blok="baseBack" 
            :imgjson="eyecatch"
            class="m1stView-background"
        />
      </template>
    </bSheet>
</template>

<script setup>
    const prop = defineProps({ 
        baseSheet: Object,
        baseTitle: Object,
        baseBack: Object,
        title: String,
        eyecatch: { Type:Object, default:{} }
    });
</script>

<style lang="scss" >
.m1stView{
  position:relative;
  z-index: 0;
  .m1stView-contents{
    z-index:1;
  }
  .m1stView-background{
    position:absolute;
    z-index:-1;
  }
}
</style>