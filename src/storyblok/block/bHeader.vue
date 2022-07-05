<template>
  <div class="bHeader">
    <div class="bHeader-main">
      <div class="bHeader-left">
          <StoryblokComponent 
            v-for="blok in blok.logo"
            :key="blok._uid"
            :blok="blok"
            class="bHeader-logo"
            @click="onClick"
          />
      </div>
      <div  class="bHeader-right">
          <StoryblokComponent v-for="blok in blok.navi" :key="blok._uid" :blok="blok" />
      </div>
    </div>
    <div class="bHeader-base"></div>
  </div>
</template>

<script setup>
  const router = useRouter();
  const prop = defineProps({ blok: Object });
  const onClick = (e) => {
    router.push('/');
  }
</script>

<style lang="scss" scoped>
@import "@/assets/styles/background/_gradient.scss";
@import "@/assets/styles/background/_flame.scss";

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
    padding: 0 0.5rem;

    .bHeader-left{
      .bHeader-logo{
        width: 4rem;
        padding: 0.5rem;
        filter: 
          drop-shadow(1px 1px 0px   hsla(var(--c-base) ,0.8))
          drop-shadow(-1px -1px 0px hsla(var(--c-base) ,0.8))
          drop-shadow(1px -1px 0px  hsla(var(--c-base) ,0.8))
          drop-shadow(-1px 1px 0px  hsla(var(--c-base) ,0.8));
      }
    }
  }
  .bHeader-base,.bHeader-main{
    width: 100%;
    height:5rem;
  }
}

@mixin setDecoTexture($b,$d){
    --c-back  :var(#{$b});
    --c-back-d:var(#{$b}-d);
    --c-back-l:var(#{$b}-l);
    --c-deco  :var(#{$d});
    --c-deco-d:var(#{$d}-d);
    --c-deco-l:var(#{$d}-l);
}
.bHeader{
  .bHeader-main{
    @include setDecoTexture(--c-base,--c-main);
    @include flame-metal-02(var(--c-deco-l),var(--c-deco-d),var(--c-back-l),var(--c-back-d),0);
  }
}
</style>