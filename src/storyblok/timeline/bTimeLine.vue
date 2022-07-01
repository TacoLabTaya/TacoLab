<template>
  <div class="bTimeLine">
    <bSheet :blok="baseSheet" class="bTimeLine-blocklist">
      <bTimeBlock 
        v-for="bl in prop.blok.blocks"
        :key="bl._uid"
        :blok="bl"
        :baseBlock="baseBlock"
        :baseTitle="baseTitle"
        :baseSub  ="baseSub"
        :baseCard ="baseCard"
        :class="'bTimeLine-block'"
      />
    </bSheet>
  </div>
</template>

<script setup>
  const prop = defineProps({ blok: Object });

  const baseSheet = prop.blok.baseSheet != null ? prop.blok.baseSheet[0] : {};
  const baseBlock = prop.blok.baseBlock != null ? prop.blok.baseBlock[0] : {};
  const baseTitle = prop.blok.baseTitle != null ? prop.blok.baseTitle[0] : {};
  const baseSub   = prop.blok.baseSub   != null ? prop.blok.baseSub[0]   : {};
  const baseCard  = prop.blok.baseCard  != null ? prop.blok.baseCard[0]  : {};

  const childmargin = computed( () => {
    if(baseSheet === {} || baseSheet.childmargin == null) return '1rem';
    return `${baseSheet.childmargin}rem`;
  } );

</script>

<style lang="scss" scoped>
.bTimeLine{
  .bTimeLine-blocklist{
    .bTimeLine-block + .bTimeLine-block {
      margin-top: v-bind(childmargin);
    }
  }
}
</style>