<template>
  <div class="ldLogo">
    <img :src="blok.logo.filename" class="ldLogo-image" :alt="blok.logo.alt" />
  </div>
</template>

<script setup>
const prop = defineProps({ 
  blok: Object
 });
  useJsonld(() => ({
    '@context': 'https://schema.org',
    '@type' : 'Organization',
    name : prop.blok.name!=null ? prop.blok.name : 'name',
    logo : prop.blok.logo!=null ? prop.blok.logo.filename : '',
    url : prop.blok.url!=null ? prop.blok.url.url : 'https://',
    slogan : prop.blok.slogan!=null ? prop.blok.slogan : 'slogan',
    founder : prop.blok.founder!=null ? prop.blok.founder : 'founder',
    location : prop.blok.slogan!=null ? prop.blok.location : 'location',
    description : prop.blok.description!=null ? prop.blok.description : 'description',
    foundingDate : prop.blok.foundingDate!=null ? prop.blok.foundingDate : 'foundingDate',
    description : prop.blok.description!=null ? prop.blok.description : 'description',
  }));
</script>

<style lang="scss" scoped>
.ldLogo{
  .ldLogo-image{
    width:100%;
  }
}
</style>