const Fieldtype = {
  mixins: [window.Storyblok.plugin],
  template: `
<div>
  <input type="checkbox" v-model="model.ison">
  <span>font</span>
  <div v-if="model.ison">
    
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Family</label>
      <select name="fam" v-model="model.family" size="1" class="uk-width-3-4">
        <option v-for="op in options" :value="op">{{op}}</option>
      </select>
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">weight</label>
      <select name="fam" v-model="model.weight" size="1" class="uk-width-3-4">
        <option v-for="n in 9" :value="n*100">{{n*100}}</option>
      </select>
    </div>
    <div class="uk-grid">
      <input type="range" min="0" max="10" step="0.1" v-model="model.emsize" />
      <label class="uk-form-label uk-width-1-4">{{model.emsize}}em</label>
    </div>
  </div>
  
</div>`,
  methods: {
    initWith() {
      return {
        plugin: 'FontJP',
        family: "",
        weight: 400,
        emsize:   1,
      }
    }
  },
  data() {
    return {
      options: [
        'Noto+Sans+JP',
        'Noto+Serif+JP',
        'M+PLUS+1p',
        'M+PLUS+Rounded+1c',
        'Zen+Maru+Gothic',
        'Zen+Kaku+Gothic+New',
        'Arvo',
        ]
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