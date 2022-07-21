<template>
  <div class="bStory">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>



<script>
</script>
<script setup>
  const route = useRoute()
  const nuxtApp = useNuxtApp()
  const config = useRuntimeConfig();;
  const prop = defineProps({ 
    blok: Object,
    datePub: String,
    dateMod: String
  });
  
  const sitename = config.public.name == null ? 'sitename' : config.public.name;
  const hostname = config.public.host == null ? 'hostname' : config.public.host;
  
  useHead({
    title: prop.blok.title == null ? 'ページタイトル': prop.blok.title,
    titleTemplate: (title) => `${sitename} - ${title}`,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: prop.blok.description == null ? '説明' : prop.blok.description, },
      { name: 'keyword', content: prop.blok.keyword == null ? 'キーワード' : prop.blok.keyword,},
      { name: 'og:type', content: 'article'},
      { name: 'og:title', content: prop.blok.title == null ? 'キーワード' : prop.blok.title,},
      { name: 'og:description', content: prop.blok.description == null ? '説明' : prop.blok.description,},
      { name: 'og:url', content: `${hostname}${route.path}`},
      { name: 'og:image', content: prop.blok.eyecatch == null ? '' : prop.blok.eyecatch.filename,},
    ],
    bodyAttrs: {
      class: 'body'
    }
  });



  var ldAuthor = {};
  var ldPublisher = {};
  var ldArticle = {};
  if(prop.blok.isArticle != null && prop.blok.isArticle){
    if(prop.blok.author != null && prop.blok.author != ''){
      const author = await useStoryblok(prop.blok.author, { find_by:'uuid', version: 'published' });
      ldAuthor = nuxtApp.$ldPerson(author.value.content);
    }
    if(prop.blok.publisher != null && prop.blok.publisher != ''){
      const publisher = await useStoryblok(prop.blok.publisher, { find_by:'uuid', version: 'published' });
      ldPublisher = nuxtApp.$ldOrganization(publisher.value.content);
    }
    ldArticle =  nuxtApp.$ldArticle(
      prop.blok,
      ldAuthor, 
      ldPublisher,
      prop.datePub,
      prop.dateMod,
      `${hostname}${route.path}`
    );  
    //console.log(ldArticle);
  }
  useJsonld(() => {
    return ldArticle;
  })
  
  /*

  */
</script>

<style lang="scss" >
.bStory{
}
</style>