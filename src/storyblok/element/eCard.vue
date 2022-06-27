<template>
  <div :class="[
      'eCard',
      {'eCard-expand':blok.expand},
      isOpen ? 'eCard-expand-open': 'eCard-expand-close',
    ]">
    <div class="eCard-top" @click="toggleSwitch" >
      <div class="eCard-title">
        <StoryblokComponent v-for="blok in blok.title" :key="blok._uid" :blok="blok" class="eCard-title-content"/>
        <StoryblokComponent v-for="blok in blok.backgroundTitle" :key="blok._uid" :blok="blok" class="eCard-title-background"/>
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
    <transition name="eCard-expand">
      <div v-show="true" class="eCard-text" ref="hide">
        <StoryblokComponent v-for="blok in blok.text" :key="blok._uid" :blok="blok" class="eCard-text-content"/>
        <StoryblokComponent v-for="blok in blok.backgroundText" :key="blok._uid" :blok="blok" class="eCard-text-background"/>
      </div>
    </transition>
    <StoryblokComponent v-for="blok in blok.background" :key="blok._uid" :blok="blok" class="eCard-background"/>
  </div>
</template>

<script setup>
  const prop = defineProps({ blok: Object });
  const get4Position = (pos) => {
    if( pos == null || pos.ison === false) return "0%";
    const u = pos.unit == null ? '%' : pos.unit;
    return`${pos.top}${u} ${pos.right}${u} ${pos.bottom}${u} ${pos.left}${u}`;
  };
  const marginSP = computed( () => {
    return get4Position(prop.blok.marginSP);
  } );
  const paddingSP = computed( () => {
    return get4Position(prop.blok.paddingSP);
  } );
  const marginPC = computed( () => {
    return get4Position(prop.blok.marginPC);
  } );
  const paddingPC = computed( () => {
    return get4Position(prop.blok.paddingPC);
  } );

  const middleMargin = computed( () => {
    if( prop.blok.middlemargin == null ) return '0rem';
    return `${prop.blok.middlemargin}rem`;
  } );
  const childMargin = computed( () => {
    if( prop.blok.childmargin == null ) return '0rem';
    return `${prop.blok.childmargin}rem`;
  } );


  const isExpand = computed( () => {
    if( prop.blok.expand == null ) return false;
    return prop.blok.expand;
  } );

  const isOpen = ref(!isExpand);
  const hide = ref(null)
  var hideHeight = 0;
  onMounted(() => {
    const element = hide.value;
    const { width } = getComputedStyle(element);
    /* eslint-disable no-param-reassign */
    element.style.width = width;
    element.style.position = `absolute`;
    element.style.visibility = `hidden`;
    element.style.height = `auto`;
    /* eslint-enable */
    const { height } = getComputedStyle(element);
    /* eslint-disable no-param-reassign */
    element.style.width = null;
    element.style.position = null;
    element.style.visibility = null;
    element.style.height = 0;
    /* eslint-enable */
    // Force repaint to make sure the
    // animation is triggered correctly.
    // eslint-disable-next-line no-unused-expressions
    getComputedStyle(element).height;
    hideHeight = height;
    //console.log(hideHeight);
    
    
    //console.log(`hide height ${hideHeight}`);
  })  ;
  

  const setSwitch = (flag) => {
    if(isExpand.value) { isOpen.value = flag }
    hide.value.style.height  = isOpen.value ? hideHeight : 0;
    hide.value.style.margin  = isOpen.value ? null : 0;
    hide.value.style.padding = isOpen.value ? null : 0;
  }
  const toggleSwitch = () => {
    setSwitch(!isOpen.value);
  };
  const openSwitch = () => {
    setSwitch(true);
  };
  const appearOpen = () => {
    setSwitch(true);
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
    .eCard-title {
      width:100%;
      position:relative;
      z-index: 0;
      .eCard-title-background{
        position:absolute;
        z-index:-1;
      }
      .eCard-title-content + .eCard-title-content{
        margin-top: v-bind(childMargin);
      }
    }
    .eCard-switch{
      position:absolute;
      right:0;
      width:1.6em;
    }
  }
  .eCard-text {
    position:relative;
    z-index: 1;
    .eCard-text-background{
      position:absolute;
      z-index:-1;
    }
    .eCard-text-content + .eCard-text-content{
      margin-top: v-bind(childMargin);
    }
  }
  .eCard-background{
    position:absolute;
    z-index:-1;
  }
  .eCard-top + .eCard-text{
    margin-top: v-bind(middleMargin)
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



  .eCard-text{
    transition: var(--s-bpm-1);
    overflow-y:hidden;
  }
  //&.eCard-expand-open { .eCard-text{  height:100%; }}
  //&.eCard-expand-close{ .eCard-text{  height:  0%; }}

}
</style>