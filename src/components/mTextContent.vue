<template>
    <component :is="elem">
        <mTextContent
            v-for="(con,index) in content.content" 
            :key="`content-${index}`"
            :content="con"
        />
        {{ content.text == null ? '': content.text }}
    </component>
</template>
<script setup>
  const prop = defineProps({ content: Object });
  const elem = computed( () => {
    //console.log(prop);
    //console.log(`elem ${prop.type} set`);
    if(prop.content.type == null) return 'span';
    switch (prop.content.type){
      case 'doc':
        return 'div';
      case 'paragraph':
        return 'p';
      case 'bullet_list':
        return 'ul';
      case 'ordered_list':
        return 'ol';
      case 'heading':
        return `h${prop.content.attrs.level}`;
      case 'text':
        return 'span';
      case 'list_item':
        return 'li';
      case 'link':
        return 'a';
      default:
        return 'div';
    }
  });
  const display = computed( () => {
    switch (prop.content.type){
      case 'doc':
      case 'paragraph':
      case 'bullet_list':
      case 'ordered_list':
      case 'heading':
        return 'block';
      case 'text':
      case 'list_item':
      case 'link':
        return 'inline';
      default:
        return 'block';
    }
  });
</script>