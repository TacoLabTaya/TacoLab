const Fieldtype = {
  mixins: [window.Storyblok.plugin],
  template: `
  <div>  
  <input type="checkbox" v-model="model.ison">
  <span>4 positions</span>
  <div v-if="model.ison">
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Top</label>
      <input type="range" min="-50" max="100"  v-model="model.top" />
      <label class="uk-form-label uk-width-1-4">{{model.top}}%</label>
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Right</label>
      <input type="range" min="-50" max="100"  v-model="model.right" />
      <label class="uk-form-label uk-width-1-4">{{model.right}}%</label>
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Bottom</label>
      <input type="range" min="-50" max="100"  v-model="model.bottom" />
      <label class="uk-form-label uk-width-1-4">{{model.bottom}}%</label>
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Left</label>
      <input type="range" min="-50" max="100"  v-model="model.left" />
      <label class="uk-form-label uk-width-1-4">{{model.left}}%</label>
    </div>
  </div>
  
</div>`,
  methods: {
    initWith() {
      return {
        plugin: 'p4positions',
        ison: false,
        top: 0,
        left: 0,
        bottom: 0,
        right:0,
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