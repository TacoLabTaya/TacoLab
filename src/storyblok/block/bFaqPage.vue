<template>
  <div class="bFaqPage">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>
<script setup>
  const prop = defineProps({ 
    blok: Object
  });

  const searchQAs = (obj) =>{
    //console.log('start search')
    if(obj == null){
      return [];
    }
    else if(obj.component != null && obj.component ==='eFaqElem'){
      //console.log(`found qa`);
      return [obj];
    }
    else{
      var ret = []
      const keys = Object.keys(obj)
      for(let i=0; i<keys.length; ++i){
        const key = keys[i]
        const value = obj[key]
        if(typeof(value) === 'object'){
          //console.log(`search obj key ${key}`)
          ret = [...ret , ...searchQAs(value)];
        }else if(Array.isArray(value)){
          //console.log(`search arr key ${key}`)
          value.forEach( (elm) => {
            ret = [...ret , ...searchQAs(elm)];
          } )
        }
        else{
          //console.log(`search not key ${key}`)
        }
      }
      return ret;
    }
  }
  
  const getLdQAs = (bl) => {
    var ret = [];
    var qas = searchQAs(bl);
    qas.forEach( (qa) => {
      const answers = qa.answer.split('\n');
      var qaObj = {
        "@type": "Question",
        "name": qa.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": '',
        }
      }
      answers.forEach( (ans) =>{
        qaObj.acceptedAnswer.text += `<p>${ans}</p>`;
      });
      ret.push(qaObj);
    });
    return ret;
  }
  useJsonld(() => ({
    '@context': 'https://schema.org',
    '@type' : "FAQPage",
    "mainEntity": getLdQAs(prop.blok),
  }));
</script>
<style lang="scss" >
.bFaqPage{
}
</style>