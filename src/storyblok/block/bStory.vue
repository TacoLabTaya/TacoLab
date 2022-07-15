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
  //console.log(route.meta)
  useHead({
    title: prop.blok.title == null ? 'ページタイトル': prop.blok.title,
    titleTemplate: (title) => `TacoLab - ${title}`,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: prop.blok.description == null ? '説明' : prop.blok.description, },
      { name: 'keyword', content: prop.blok.keyword == null ? 'キーワード' : prop.blok.keyword,},
      { name: 'og:type', content: 'article'},
      { name: 'og:title', content: prop.blok.title == null ? 'キーワード' : prop.blok.title,},
      { name: 'og:description', content: prop.blok.description == null ? '説明' : prop.blok.description,},
      { name: 'og:url', content: `https://tacolab.tech/${route.path}`},
      { name: 'og:image', content: prop.blok.ogimage == null ? '' : prop.blok.ogimage.filename,},
    ],
    bodyAttrs: {
      class: 'body'
    }
  })
</script>

<style lang="scss" >
.bStory{
}
</style>