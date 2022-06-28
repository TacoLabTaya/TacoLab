const Fieldtype = {
  mixins: [window.Storyblok.plugin],
  template: `
<div>
  <div class="uk-grid">
    <label class="uk-form-label uk-width-1-4">Layout</label>
    <select name="fam" v-model="model.layout" size="1" class="uk-width-3-4">
      <option v-for="ly in cLayout" :value="ly">{{ly}}</option>
    </select>
  </div>
  <div v-if="model.layout!='static'" class="uk-grid">
    <label class="uk-form-label uk-width-1-4">justify Content</label>
    <select name="fam" v-model="model.content.justify" size="1" class="uk-width-3-4">
      <option v-for="ly in cContent" :value="ly">{{ly}}</option>
    </select>
  </div>
  <div v-if="model.layout!='static'" class="uk-grid">
    <label class="uk-form-label uk-width-1-4">justify Items</label>
    <select name="fam" v-model="model.items.justify" size="1" class="uk-width-3-4">
      <option v-for="ly in cItems" :value="ly">{{ly}}</option>
    </select>
  </div>
  <div v-if="model.layout!='static'" class="uk-grid">
    <label class="uk-form-label uk-width-1-4">align Content</label>
    <select name="fam" v-model="model.content.align" size="1" class="uk-width-3-4">
      <option v-for="ly in cContent" :value="ly">{{ly}}</option>
    </select>
  </div>
  <div v-if="model.layout!='static'" class="uk-grid">
    <label class="uk-form-label uk-width-1-4">align Items</label>
    <select name="fam" v-model="model.items.align" size="1" class="uk-width-3-4">
      <option v-for="ly in cItems" :value="ly">{{ly}}</option>
    </select>
  </div>
  <div v-if="model.layout!='static'" class="uk-grid">
    <div class="uk-grid"><span>x</span><input type="range" min="0" max="99" step="1" v-model="model.gap.x" /></div>
    <div class="uk-grid"><span>y</span><input type="range" min="0" max="99" step="1" v-model="model.gap.y" /></div>
    <label class="uk-form-label uk-width-1">gap X:{{model.gap.x}}px Y:{{model.gap.y}}px  </label>
  </div>
  <div v-if="model.layout!='static'" class="uk-grid">
    <div class="uk-grid"><span>sp</span><input type="range" min="1" max="9" step="1" v-model="model.number.sp" /></div>
    <div class="uk-grid"><span>tb</span><input type="range" min="1" max="9" step="1" v-model="model.number.tb" /></div>
    <div class="uk-grid"><span>pc</span><input type="range" min="1" max="9" step="1" v-model="model.number.pc" /></div>
    <div class="uk-grid"><span>xl</span><input type="range" min="1" max="9" step="1" v-model="model.number.xl" /></div>
    <label class="uk-form-label uk-width-1">number SP:{{model.number.sp}} TB:{{model.number.tb}} PC:{{model.number.pc}} XL:{{model.number.xl}}  </label>
  </div>
  
  
</div>`,
  methods: {
    initWith() {
      return {
        plugin : 'LayoutContainer',
        layout : 'static',
        items  : {justify: 'stretch', align: 'stretch'},
        content: {justify: 'stretch', align: 'stretch'},
        gap    : {x: 0, y: 0},
        number : {sp: 1 , tb:2, pc: 3, xl: 4}
      }
    }
  },
  data() {
    return {
      cLayout : ['static','fRow','fWrap','gMasonry','gMasonryRow','gTile'],
      cItems  : ['start','end','center','stretch'],
      cContent: ['start','end','center','stretch','space-around','space-between','space-eavenly'],
    }
  },
  watch: {
    'model': {
      handler: function (value) {
        this.$emit('changed-model', value);
      },
      deep: true
    }
  }
}