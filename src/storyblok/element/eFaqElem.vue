<template>
  <div class="eFaqElem">
    <div class="eFaqElem-flex">
      <p class="eFaqElem-title"><span>Q:</span></p>
      <p class="eFaqElem-content"><span>{{blok.question}}</span></p>
    </div>
    <div class="eFaqElem-flex">
      <p class="eFaqElem-title"><span>A:</span></p>
      <div class="eFaqElem-content">
        <p v-for="ans in answers" :key="ans">
          <span>{{ans}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
  const prop = defineProps({ 
    blok: Object
  });
  const answers = computed( () => {
    return prop.blok.answer.split('\n');
  } );
</script>
<style lang="scss" >
.eFaqElem{
  font-size:0.8em;
  .eFaqElem-flex{
    display:flex;
    align-items: flex-start;
    justify-content:space-between;
    line-height:1.2rem;
    gap:1rem;
    .eFaqElem-title{
      flex:0;
      font-weight:bold;
    }
    .eFaqElem-content{
      flex:1;
      p+p{ margin-top:1rem;}
    }
  }
  .eFaqElem-flex+.eFaqElem-flex{
    margin-top:1rem;
  }
}
</style>