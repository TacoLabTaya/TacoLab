<template>
    <component :is="elem">
        <mTextContent
            v-for="(con,index) in block.content" 
            :key="`content-${index}`"
            :content="con"
        />
        {{ block.content.text != null ? block.content.text : '' }}
    </component>
</template>
<script setup>
  const prop = defineProps({ content: Object });
  const elem = computed( () => {
    switch (prop.type){
      case 'doc':
        return 'div';
      case 'paragraph':
        return 'p';
      case 'bullet_list':
        return 'ul';
      case 'ordered_list':
        return 'ol';
      case 'heading':
        return `h${block.attrs.level}`;
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
    switch (prop.type){
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