const Fieldtype = {
  mixins: [window.Storyblok.plugin],
  template: `
  <div>  
    <input type="checkbox" v-model="model.ison">
    <span>4 positions</span>
  <div v-if="model.ison">
    <div class="uk-grid">
      <select name="mode" v-model="model.unit" size="1" class="uk-width-1">
        <option v-for="un in units" :value="un">{{un}}</option>
        <option value="%">parcent</option>
        <option value="rem">rem</option>
        <option value="em">em</option>
      </select>
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Top</label>
      <input type="checkbox" v-model="model.sett" class="uk-width-1-4">
    </div>
    <div class="uk-grid">
      <span  v-if="!model.sett">auto</span>
      <input v-if="model.sett" type="range" min="-50" max="100"  v-model="model.top" />
      <label v-if=" model.sett" class="uk-form-label uk-width-1-4">{{model.top}}{{model.unit}}</label>
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Right</label>
      <input type="checkbox" v-model="model.setr" class="uk-width-1-4">
    </div>
    <div class="uk-grid">
      <span  v-if="!model.setr">auto</span>
      <input v-if="model.setr" type="range" min="-50" max="100"  v-model="model.right" />
      <label v-if="model.setr" class="uk-form-label uk-width-1-4">{{model.right}}{{model.unit}}</label>
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Bottom</label>
      <input type="checkbox" v-model="model.setb" class="uk-width-1-4">
    </div>
    <div class="uk-grid">
      <span  v-if="!model.setb">auto</span>
      <input v-if="model.setb" type="range" min="-50" max="100"  v-model="model.bottom" />
      <label v-if="model.setb" class="uk-form-label uk-width-1-4">{{model.bottom}}{{model.unit}}</label>
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Left</label>
      <input type="checkbox" v-model="model.setl" class="uk-width-1-4">
    </div>
    <div class="uk-grid">
      <span  v-if="!model.setl">auto</span>
      <input v-if="model.setl" type="range" min="-50" max="100"  v-model="model.left" />
      <label v-if="model.setl" class="uk-form-label uk-width-1-4">{{model.left}}{{model.unit}}</label>
    </div>
  </div>
  
</div>`,
  methods: {
    initWith() {
      return {
        plugin: 'p4positions',
        unit: '%',
        ison: false,
        top: 0,
        left: 0,
        bottom: 0,
        right:0,
        sett:false,
        setr:false,
        setl:false,
        setb:false,
      }
    }
  },
  data() {
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