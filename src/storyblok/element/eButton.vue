<template>
  <span :class="[ 'eButton',
    blok.shadow != null && blok.shadow != '' ? `mShadow-d${blok.shadow}` : '',
    blok.colorset != null && blok.colorset != '' ? `eButton-colorset-${blok.colorset}` : '',
    blok.modestyle != null && blok.modestyle != '' ? `eButton-modestyle-${blok.modestyle}` : '']"
  >
    <slot>
      {{prop.blok.text}}
    </slot>
  </span>
</template>

<script setup>
  const prop = defineProps({ blok: Object });
</script>

<style lang="scss" >
@import "@/assets/styles/_shadow.scss";
@import "@/assets/styles/_button.scss";
.eButton{
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


  &.eButton-modestyle-none { @include button-base(var(--c-deco),var(--c-text)); }
  &.eButton-modestyle-metal{ @include button-metal(var(--c-deco-l),var(--c-deco-d),var(--c-text)); }

}
</style>