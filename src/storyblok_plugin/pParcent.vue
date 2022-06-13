const Fieldtype = {
  mixins: [window.Storyblok.plugin],
  template: `
<div>
    <div class="uk-grid">
      <input type="range" min="0" max="100" v-model="model.value" />
      <label class="uk-form-label uk-width-1-4">{{model.value}}%</label>
    </div>
  
</div>`,
  methods: {
    initWith() {
      return {
        plugin: 'parcent',
        value: '0',
      }
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