<template>
  <div :class="[
      'eCard',
      {'eCard-expand':blok.expand},
      isOpen ? 'eCard-expand-open': 'eCard-expand-close',
    ]">
    <div class="eCard-top" @click="toggleSwitch" >
      <div class="eCard-title">
        <StoryblokComponent v-for="blok in blok.title" :key="blok._uid" :blok="blok"/>
      </div>
      <font-awesome-icon 
        icon="circle-plus" 
        v-if="isExpand"
        :class="[
          'eCard-switch', 
          blok.switch != null && blok.switch != ''? `eCard-switch-${blok.switch}`: 'eCard-switch-plus',
        ]">
      </font-awesome-icon>
    </div>
    <div v-if="isOpen" class="eCard-text">
      <StoryblokComponent v-for="blok in blok.text" :key="blok._uid" :blok="blok"/>
    </div>
    <StoryblokComponent v-for="blok in blok.background" :key="blok._uid" :blok="blok" class="eCard-background"/>
  </div>
</template>

<script setup>
  const prop = defineProps({ blok: Object });
  const marginSP = computed( () => {
    if( prop.blok.marginSP == null || prop.blok.marginSP.ison === false) {return "0%"};
    return `${prop.blok.marginSP.top}% ${prop.blok.marginSP.right}% ${prop.blok.marginSP.bottom}% ${prop.blok.marginSP.left}%`;
  } );
  const paddingSP = computed( () => {
    if( prop.blok.paddingSP == null || prop.blok.paddingSP.ison === false) {return "0%"};
    return `${prop.blok.paddingSP.top}% ${prop.blok.paddingSP.right}% ${prop.blok.paddingSP.bottom}% ${prop.blok.paddingSP.left}%`;
  } );
  const marginPC = computed( () => {
    if( prop.blok.marginPC == null || prop.blok.marginPC.ison === false) {return "0%"};
    return `${prop.blok.marginPC.top}% ${prop.blok.marginPC.right}% ${prop.blok.marginPC.bottom}% ${prop.blok.marginPC.left}%`;
  } );
  const paddingPC = computed( () => {
    if( prop.blok.paddingPC == null || prop.blok.paddingPC.ison === false) {return "0%"};
    return `${prop.blok.paddingPC.top}% ${prop.blok.paddingPC.right}% ${prop.blok.paddingPC.bottom}% ${prop.blok.paddingPC.left}%`;
  } );

  const isExpand = computed( () => {
    if( prop.blok.expand == null ) return false;
    return prop.blok.expand;
  } );

  const isOpen = ref(!isExpand);
  const toggleSwitch = () => {
    if(isExpand.value) {isOpen.value = !isOpen.value};
  };
  const openSwitch = () => {
    if(isExpand.value) {isOpen.value = ture};
  };
</script>

<style lang="scss" >
@import "@/assets/styles/_accordion.scss";
.eCard{
  @include mq('SHORT'){ 
    margin :v-bind(marginSP);
    padding:v-bind(paddingSP);
  }
  @include mq('LARGE'){ 
    margin :v-bind(marginPC);
    padding:v-bind(paddingPC);
  }
  

  position:relative;
  z-index: 0;
  .eCard-top{
    z-index:1;
    display:flex;
    align-items:center;
    position:relative;
    .eCard-title { width:100%; }
    .eCard-switch{
      position:absolute;
      right:0;
      width:1.6em;
    }
  }
  .eCard-text {
    z-index: 1;
  }
  .eCard-background{
    position:absolute;
    z-index:-1;
  }

  .eCard-switch { 
    transition: var(--s-bpm-1) 
  }
  &.eCard-expand-open .eCard-switch-plus{
    transform: rotate(585deg);
  }
  &.eCard-expand-close .eCard-switch-plus{
    transform: rotate(0deg);
  }

}
</style>