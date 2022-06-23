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
      <select name="wei" v-model="model.weight" size="1" class="uk-width-3-4">
        <option v-for="n in 9" :value="n*100">{{n*100}}</option>
      </select>
    </div>
    <div class="uk-grid">
      <input type="range" min="0" max="10" step="0.1" v-model="model.emsizePC" />
      <label class="uk-form-label uk-width-1-2">PC {{model.emsizePC}}em</label>
    </div>
    <div class="uk-grid">
      <input type="range" min="0" max="10" step="0.1" v-model="model.emsizeSP" />
      <label class="uk-form-label uk-width-1-2">SP {{model.emsizeSP}}em</label>
    </div>
    <div class="uk-grid">
      <input type="range" min="0" max="2" step="0.1" v-model="model.height" />
      <label class="uk-form-label uk-width-1-2">line {{model.height}}</label>
    </div>
    <div class="uk-grid">
      <input type="range" min="0" max="1" step="0.02" v-model="model.letter" />
      <label class="uk-form-label uk-width-1-2">space {{model.letter}}em</label>
    </div>
  </div>
  
</div>`,
  methods: {
    initWith() {
      return {
        plugin: 'FontJP',
        family: "",
        weight: 400,
        emsizePC:   1,
        emsizeSP:   1,
        height: 1.2,
        letter: 0,
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