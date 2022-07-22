<template>
  <div class="eFaqElem">
    <p>{{blok.question}}</p>
    <p>{{blok.answer}}</p>
  </div>
</template>
<script setup>
  const prop = defineProps({ 
    blok: Object
  });
</script>
<style lang="scss" >
.eFaqElem{
}
</style>