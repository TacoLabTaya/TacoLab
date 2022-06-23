const Fieldtype = {
  mixins: [window.Storyblok.plugin],
  template: `
<div>
  <p>ModeStyle</p>
  <select name="mode" v-model="model.mode" size="1" class="uk-width-3-4">
    <option v-for="md in mode" :value="md">{{md}}</option>
  </select>
  <select name="style" v-model="model.style" size="1" class="uk-width-3-4">
    <option v-for="st in style[model.mode]" :value="st">{{st}}</option>
  </select>
  <div class="uk-grid">
    <input type="range" min="0" max="5" step="0.2" v-model="model.size" />
    <label class="uk-form-label uk-width-1-4">{{model.size}}point</label>
  </div>
  <select name="blend" v-model="model.blend" size="1" class="uk-width-3-4">
    <option v-for="md in blend" :value="md">{{md}}</option>
  </select>
</div>`,
  methods: {
    initWith() {
      return {
        plugin: 'ModeStyle',
        mode : "",
        style: "",
        size : 5,
        blend: 'normal',
      }
    }
  },
  data() {
    return {
      mode:['heroimage','texture','gradient','flame','glassgrad','stripe'],
      style:{
        heroimage:['grad-base','grad-main','some-dots'],
        texture  :['zarazara','tsurutsuru','dekoboko'],
        gradient :['circle'],
        flame    :['glow', 'metal'],
        glassgrad:['frosted', 'jitter'],
        stripe   :['stripe'],
      },
      blend:['normal','burn'],
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