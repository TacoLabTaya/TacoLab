const Fieldtype = {
  mixins: [window.Storyblok.plugin],
  template: `
<div>
  <details class="">
    <summary>Margin SP</summary>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Top</label>
      <input type="range" min="-50" max="50"  v-model="model.margintsp" />
      <label class="uk-form-label uk-width-1-4">{{model.margintsp}}%</label>
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Right</label>
      <input type="range" min="-50" max="50"  v-model="model.marginrsp" />
      <label class="uk-form-label uk-width-1-4">{{model.marginrsp}}%</label>
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Bottom</label>
      <input type="range" min="-50" max="50"  v-model="model.marginbsp" />
      <label class="uk-form-label uk-width-1-4">{{model.marginbsp}}%</label>
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Left</label>
      <input type="range" min="-50" max="50"  v-model="model.marginlsp" />
      <label class="uk-form-label uk-width-1-4">{{model.marginlsp}}%</label>
    </div>
  </details>
  
  <details class="">
    <summary>Padding SP</summary>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Top</label>
      <input type="range" min="-50" max="50"  v-model="model.paddingtsp" />
      <label class="uk-form-label uk-width-1-4">{{model.paddingtsp}}%</label>
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Right</label>
      <input type="range" min="-50" max="50"  v-model="model.paddingrsp" />
      <label class="uk-form-label uk-width-1-4">{{model.paddingrsp}}%</label>
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Bottom</label>
      <input type="range" min="-50" max="50"  v-model="model.paddingbsp" />
      <label class="uk-form-label uk-width-1-4">{{model.paddingbsp}}%</label>
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Left</label>
      <input type="range" min="-50" max="50"  v-model="model.paddinglsp" />
      <label class="uk-form-label uk-width-1-4">{{model.paddinglsp}}%</label>
    </div>
  </details>
  
  <details class="">
    <summary>Margin PC</summary>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Top</label>
      <input type="range" min="-50" max="50"  v-model="model.margintpc" />
      <label class="uk-form-label uk-width-1-4">{{model.margintpc}}%</label>
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Right</label>
      <input type="range" min="-50" max="50"  v-model="model.marginrpc" />
      <label class="uk-form-label uk-width-1-4">{{model.marginrpc}}%</label>
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Bottom</label>
      <input type="range" min="-50" max="50"  v-model="model.marginbpc" />
      <label class="uk-form-label uk-width-1-4">{{model.marginbpc}}%</label>
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Left</label>
      <input type="range" min="-50" max="50"  v-model="model.marginlpc" />
      <label class="uk-form-label uk-width-1-4">{{model.marginlpc}}%</label>
    </div>
  </details>
  
  <details class="">
    <summary>Padding PC</summary>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Top</label>
      <input type="range" min="-50" max="50"  v-model="model.paddingtpc" />
      <label class="uk-form-label uk-width-1-4">{{model.paddingtpc}}%</label>
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Right</label>
      <input type="range" min="-50" max="50"  v-model="model.paddingrpc" />
      <label class="uk-form-label uk-width-1-4">{{model.paddingrpc}}%</label>
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Bottom</label>
      <input type="range" min="-50" max="50"  v-model="model.paddingbpc" />
      <label class="uk-form-label uk-width-1-4">{{model.paddingbpc}}%</label>
    </div>
    <div class="uk-grid">
      <label class="uk-form-label uk-width-1-4">Left</label>
      <input type="range" min="-50" max="50"  v-model="model.paddinglpc" ></input>
      <label class="uk-form-label uk-width-1-4">{{model.paddinglpc}}%</label>
    </div>
  </details>
  
</div>`,
  methods: {
    initWith() {
      return {
        plugin: 'MarginPadding',
        margintsp: '0',
        marginbsp: '0',
        marginlsp: '0',
        marginrsp: '0',
        margintpc: '0',
        marginbpc: '0',
        marginlpc: '0',
        marginrpc: '0',
        paddingtsp: '0',
        paddingbsp: '0',
        paddinglsp: '0',
        paddingrsp: '0',
        paddingtpc: '0',
        paddingbpc: '0',
        paddinglpc: '0',
        paddingrpc: '0'
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