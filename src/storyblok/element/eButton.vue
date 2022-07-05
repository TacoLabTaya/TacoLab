<template>
  <span 
    :class="[ 
      'eButton',
      blok.shadow != null && blok.shadow != '' ? `mShadow-d${blok.shadow}` : '',
      blok.colorset != null && blok.colorset != '' ? `eButton-colorset-${blok.colorset}` : '',
      blok.modestyle != null && blok.modestyle != '' ? `eButton-modestyle-${blok.modestyle}` : ''
    ]"
    @click="onClick"
  >
    <slot>
      {{prop.blok.text}}
    </slot>
  </span>
</template>

<script setup>
  const router = useRouter();
  const prop = defineProps({ blok: Object });
  const width = computed( () => {
    if( prop.blok.width == null ) return 'auto';
    if( prop.blok.width.value == '0' ) return 'auto';
    return `${prop.blok.width.value}%`;
  } );
  const isLink = computed( () => {
    if( prop.blok.action == null  ) return false;
    if( prop.blok.action != 'link') return false;
    if( prop.blok.link   == null  ) return false;
    return true;
  } );
  const onClick = (e) => {
    //console.log('onClick')
    if(isLink.value){
      router.push(prop.blok.link.cached_url);
    }
  }
</script>

<style lang="scss" >
@import "@/assets/styles/_shadow.scss";
@import "@/assets/styles/_button.scss";
.eButton{
  width:v-bind(width);
  text-align:center;

  @mixin setDecoText($d,$t){
      --c-deco  :var(#{$d});
      --c-deco-d:var(#{$d}-d);
      --c-deco-l:var(#{$d}-l);
      --c-text  :var(#{$t});
      --c-text-d:var(#{$t}-d);
      --c-text-l:var(#{$t}-l);
  }

  &.eButton-colorset-base-main{ @include setDecoText(--c-base,--c-main); }
  &.eButton-colorset-base-acce{ @include setDecoText(--c-base,--c-acce); }
  &.eButton-colorset-main-base{ @include setDecoText(--c-main,--c-base); }
  &.eButton-colorset-main-acce{ @include setDecoText(--c-main,--c-acce); }
  &.eButton-colorset-acce-base{ @include setDecoText(--c-acce,--c-base); }
  &.eButton-colorset-acce-main{ @include setDecoText(--c-acce,--c-main); }


  &.eButton-modestyle-none  { @include button-base  (var(--c-deco),var(--c-text)); }
  &.eButton-modestyle-metal { @include button-metal (var(--c-deco-l),var(--c-deco-d),var(--c-text)); }
  &.eButton-modestyle-border{ @include button-border(var(--c-deco-d),var(--c-text-d),var(--c-text)); }

}
</style>