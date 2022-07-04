<template>
  <div class="bHeader">
    <div class="bHeader-main">
      <div class="bHeader-left">
          <StoryblokComponent v-for="blok in blok.logo" :key="blok._uid" :blok="blok" class="bHeader-logo"/>
      </div>
      <div  class="bHeader-right">
          <StoryblokComponent v-for="blok in blok.navi" :key="blok._uid" :blok="blok" />
      </div>
    </div>
    <div class="bHeader-base"></div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" scoped>
@import "@/assets/styles/background/_gradient.scss";
@import "@/assets/styles/background/_flame.scss";
@mixin setDecoTexture($b,$d){
    --c-back  :var(#{$b});
    --c-back-d:var(#{$b}-d);
    --c-back-l:var(#{$b}-l);
    --c-deco  :var(#{$d});
    --c-deco-d:var(#{$d}-d);
    --c-deco-l:var(#{$d}-l);
}
.bHeader{
  z-index:0;
  .bHeader-main{
    position:fixed;
    z-index:1;
    top:0;

    background:hsl(var(--c-main));
    color:hsl(var(--c-base));

    display:flex;
    justify-content: space-between;
    align-items: center;

    .bHeader-left{
      .bHeader-logo{
        width: 5rem;
        padding: 0.5rem;
        --angle: 0deg;
        background:linear-gradient(
                var(--angle),
                hsl(var(--c-deco-d)) 20%,
                hsl(var(--c-back-l)) 50%,
                hsl(var(--c-deco-d)) 80%
            );
      }
    }
  }
  .bHeader-base,.bHeader-main{
    width: 100%;
    height:6rem;
  }
}

.bHeader{
  .bHeader-main{
    @include setDecoTexture(--c-base,--c-main);
    @include flame-metal-02(var(--c-deco-l),var(--c-deco-d),var(--c-back-l),var(--c-back-d),0);
  }
}
</style>