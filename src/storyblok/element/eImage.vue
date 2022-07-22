<template>
  <div  :class="['eImage',
      blok.modestyle != null && blok.modestyle   != '' ? `eImage-${blok.modestyle.mode}`    : '',
      blok.modestyle != null && blok.modestyle   != '' ? `eImage-${blok.modestyle.style}`   : '',
    ]">
    <picture class="eImage-pic">
      <source :srcset="pathPC" media="(min-width: 769px)" class="eImage-src"/>
      <img :src="pathSP" class="eImage-src" :alt="altStr" />
    </picture>
    <p v-if="title != ''" class="eImage-title">{{title}}</p>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const prop = defineProps({ blok: Object });

const widthPC = computed( () => { 
  if( prop.blok.widthPC == null ) return '100%';
  if( prop.blok.widthPC.value == '0' ) return 'auto';
  return `${prop.blok.widthPC.value}%`;
});
const widthSP = computed( () => { 
  if( prop.blok.widthSP == null ) return '100%';
  if( prop.blok.widthSP.value == '0') return 'auto';
  return `${prop.blok.widthSP.value}%`;
});   
const radius = computed( () => { 
  if( prop.blok.radius == null ) return '0%';
  return `${prop.blok.radius.value}%`;
});
const title = computed( () => { 
  if( prop.blok.title == null ) return '';
  return prop.blok.title;
});
const point = computed( () => {
  if( prop.blok.modestyle == null || prop.blok.modestyle.size == null) return "1";
  return `${prop.blok.modestyle.size}`;
});
const pathSP = computed( () => { 
  if( prop.blok.source == null ) return '';
  return nuxtApp.$imagePathResize(prop.blok.source.filename, 500, 0)
})
const pathPC = computed( () => { 
  if( prop.blok.source == null ) return '';
  return nuxtApp.$imagePathResize(prop.blok.source.filename, 1500, 0)
})
const altStr = computed( () => { 
  if( prop.blok.source == null || prop.blok.source.alt == null ) return 'alt';
  return prop.blok.source.alt;
})
const imageUrlSP = computed( () => { 
  if( prop.blok.source == null ) return '';
  return `url("${pathSP.value}")`;
})
const imageUrlPC = computed( () => { 
  if( prop.blok.source == null ) return '';
  return `url("${pathPC.value}")`;
})
</script>

<style lang="scss" scoped>
@import "@/assets/styles/background/_flame.scss";
.eImage{
  @include mq('SHORT'){width:v-bind(widthSP);}
  @include mq('LARGE'){width:v-bind(widthPC);}
  .eImage-pic{
    .eImage-src{
    border-radius: v-bind(radius);
      width:100%;
    }
  }
  .eImage-title{
    font-size:0.8em;
    margin-top:0.2em;
    text-align:center;
  }


  
  &.eImage-flame{
    &.eImage-metal{
      position:relative;
      @include mq('SHORT'){
        @include flame-metal-img(var(--c-main-l),var(--c-main-d),var(--c-base-l),var(--c-base-d),v-bind(point),v-bind(imageUrlSP));
      }
      @include mq('LARGE'){
        @include flame-metal-img(var(--c-main-l),var(--c-main-d),var(--c-base-l),var(--c-base-d),v-bind(point),v-bind(imageUrlPC));
      }
    }
  }
}
</style>