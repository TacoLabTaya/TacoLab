<template>
  <eTitle
    :class="['eMenuItem']"
    :blok="prop.baseTitle"
    :text="prop.blok.display"
    @click="onClick"
  />
</template>

<script setup>
  const router = useRouter();
  const prop = defineProps({ 
    blok: Object,
    baseTitle:Object, 
  });
  const onClick = (e) => {
    console.log(prop.blok.link.cached_url);
    router.push(prop.blok.link.cached_url);
  }

</script>

<style lang="scss" >
.eMenuItem{
  display:flex;
}
</style>