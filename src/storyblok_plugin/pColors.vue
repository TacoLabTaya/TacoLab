const Fieldtype = {
  mixins: [window.Storyblok.plugin],
  template: `
<div>
  <input type="checkbox" v-model="model.ison">
  <span>color</span>
  <div v-if="model.ison">
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Base</label>
      <input type="color" v-model="model.base" class="uk-width-3-4" />
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">main</label>
      <input type="color" v-model="model.main" class="uk-width-3-4" />
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">acce</label>
      <input type="color" v-model="model.acce"  class="uk-width-3-4" />
    </div>
  </div>
  
</div>`,
  methods: {
    initWith() {
      return {
        plugin: 'Colors',
        ison: false,
        base: '#FFFFFF',
        main: '#FFFFFF',
        acce: '#FFFFFF',
      }
    }
  },
  data() {
    return {
      options: ['', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
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