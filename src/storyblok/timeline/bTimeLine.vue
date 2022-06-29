<template>
  <div class="bTimeLine">
    <bSheet :blok="baseSheet" >
      <bTimeBlock 
        v-for="bl in prop.blok.blocks"
        :key="bl._uid"
        :blok="bl"
        :baseBlock="baseBlock"
        :baseTitle="baseTitle"
      />
    </bSheet>
  </div>
</template>

<script setup>
  const prop = defineProps({ blok: Object });

  const baseSheet = prop.blok.baseSheet != null ? prop.blok.baseSheet[0] : {};
  const baseBlock = prop.blok.baseBlock != null ? prop.blok.baseBlock[0] : {};
  const baseTitle = prop.blok.baseTitle != null ? prop.blok.baseTitle[0] : {};


</script>

<style lang="scss" scoped>
.bTimeLine{
}
</style>