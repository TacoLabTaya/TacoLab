<template>
    <component 
        :is="elem" 
        :style="styleset"
        :class="[
            'mTextContent',
            styledclass != `mTextContent-styled-${styledclass}` ? '' :'',
            `mTextContent-display-${display}`,
        ]"
        @click="onClick"
    >
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
      case 'code_block':
        return 'pre';
      case 'blockquote':
        return 'blockquote';
      case 'text':
        if( prop.content.marks != null && prop.content.marks.find( (mark) => mark.type != null && mark.type == 'code' ) ){
            return 'code';
        }
        return 'span';
      case 'list_item':
        return 'li';
      case 'horizontal_rule':
        return 'hr';
      default:
        return 'div';
    }
  });
  const display = computed( () => {
    if(prop.content.type == null) return 'block';
    switch (prop.content.type){
      case 'doc':
      case 'paragraph':
      case 'bullet_list':
      case 'ordered_list':
      case 'heading':
      case 'code_block':
      case 'blockquote':
        return 'block';
      case 'text':
      case 'list_item':
      case 'horizontal_rule':
        return 'inline';
      default:
        return 'block';
    }
  });
  const styleset = computed( () => {
    var style = {};
    if( prop.content.marks == null ) return style;

    if( prop.content.marks.find( mark => mark.type != null && mark.type == 'bold') != undefined ){
        style['font-weight'] = 'bold';
    }
    if( prop.content.marks.find( mark => mark.type != null && mark.type == 'italic') != undefined ){
        style['font-style'] = 'italic';
    }
    if( prop.content.marks.find( mark => mark.type != null && mark.type == 'strike') != undefined ){
        style['text-decoration'] = 'line-through';
    }
    if( prop.content.marks.find( mark => mark.type != null && mark.type == 'underline') != undefined ){
        style['text-decoration'] = 'underline';
    }
    return style
  });
  const styledclass = computed( () => {
    if( prop.content.marks == null ) return '';
    var mark = prop.content.marks.find( mark => mark.type != null && mark.type == 'styled');
    if(mark == undefined || mark.attrs == null || mark.attrs.class == null) return '';
    return mark.attrs.class
  });
  const isLink = computed( () => {
    if( prop.content.marks == null ) return false;
    if( prop.content.marks.find( mark => mark.type != null && mark.type == 'link') != undefined ){
        return true;
    }
    return false;
  })
  const toLink = computed( () => {
    if( prop.content.marks == null ) return null;
    var mark = prop.content.marks.find( mark => mark.type != null && mark.type == 'link')
    if( mark != undefined ){
        return null;
    }
    return {
        href: mark.attrs.href,
        target: mark.attrs.target,
        linktype: mark.attrs.linktype
    };
  })
  const onClick = (e) => {
    if(isLink){
        console.log(toLink);
    }
  }
</script>