const Fieldtype = {
  mixins: [window.Storyblok.plugin],
  template: `
<div>
    <div class="uk-grid">
      <input type="range" min="0" max="10" step="0.1" v-model="model.value" />
      <label class="uk-form-label uk-width-1-4">{{model.value}}em</label>
    </div>
  
</div>`,
  methods: {
    initWith() {
      return {
        plugin: 'emsize',
        value: '1',
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