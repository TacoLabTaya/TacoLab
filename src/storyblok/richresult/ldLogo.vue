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
    //'@type' : 'Organization',
    '@type' : prop.blok.type == null? 'Organization': prop.blok.type,
    name : prop.blok.name==null ? 'name': prop.blok.name,
    logo : prop.blok.logo==null ? '' : prop.blok.logo.filename,
    url : prop.blok.url==null ? 'https://' : prop.blok.url.url,
    slogan : prop.blok.slogan==null ? 'slogan': prop.blok.slogan,
    founder : prop.blok.founder==null ? 'founder' : {
      '@context': 'https://schema.org',
      '@type' : 'Person',
      name: prop.blok.founder
    },
    location : prop.blok.slogan==null ? 'location' : {
      '@context': 'https://schema.org',
      '@type' : 'Place',
      name: prop.blok.location
    },
    description : prop.blok.description==null ? 'description' : prop.blok.description,
    foundingDate : prop.blok.foundingDate==null ? 'foundingDate' : prop.blok.foundingDate,
    description : prop.blok.description==null ? 'description' : prop.blok.description,
  }));
</script>

<style lang="scss" scoped>
.ldLogo{
  .ldLogo-image{
    width:100%;
  }
}
</style>