<template>
  <div class="bStory">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>



<script>
</script>
<script setup>
  const route = useRoute()
  const prop = defineProps({ blok: Object });
  const config = useRuntimeConfig();;
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
      { name: 'og:url', content: `${hostname}/${route.path}`},
      { name: 'og:image', content: prop.blok.eyecatch == null ? '' : prop.blok.eyecatch.filename,},
    ],
    bodyAttrs: {
      class: 'body'
    }
  })

  const nuxtApp = useNuxtApp()
  const isArticle = prop.blok.isArticle == null ? false : prop.blok.isArticle;
  const auther_id = prop.blok.auther == null ? '' : prop.blok.auther
  if(isArticle){
    if(auther_id != ''){
      const auther = await useStoryblok(auther_id, { find_by:'uuid', version: 'published' });
      //const auther_ld = new ldPerson(auther);
      //console.log(auther_ld.getLd());
      console.log(nuxtApp.$hello('name'))
    }
  }
  /*
  useJsonld(() => {


    return {};
  })
  */
</script>

<style lang="scss" >
.bStory{
}
</style>