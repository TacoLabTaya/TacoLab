const Fieldtype = {
  mixins: [window.Storyblok.plugin],
  template: `
  <div>
    <select name="fam" v-model="model.style" size="1" >
      <option value="auto">auto</option>
      <option value="percent">percent</option>
      <option value="vheight">vheight</option>
    </select>
    <div v-if="model.style!='auto'" class="uk-grid">
      <input type="range" min="0" max="100" v-model="model.value" />
      <label class="uk-form-label uk-width-1-4">{{model.value}}%</label>
    </div>
  
</div>`,
  methods: {
    initWith() {
      return {
        plugin: 'height',
        style: 'auto',
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