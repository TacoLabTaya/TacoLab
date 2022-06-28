const Fieldtype = {
  mixins: [window.Storyblok.plugin],
  template: `
<div>
  <input type="checkbox" v-model="model.ison">Layout Item Setting</input>
  <div v-if="model.ison">
    <label class="uk-form-label uk-width-1-4">justify-self</label>
    <select name="fam" v-model="model.self.justify" size="1" class="uk-width-3-4">
      <option v-for="ly in cSelf" :value="ly">{{ly}}</option>
    </select>
  </div>

  <div v-if="model.ison">
    <label class="uk-form-label uk-width-1-4">align-self</label>
    <select name="fam" v-model="model.self.align" size="1" class="uk-width-3-4">
      <option v-for="ly in cSelf" :value="ly">{{ly}}</option>
    </select>
  </div>
  

  <div v-if="model.ison" >
    <div class="uk-grid"><span>grow</span><input type="range" min="0" max="9" step="1" v-model="model.flex.grow" /></div>
    <div class="uk-grid"><span>shrink</span><input type="range" min="0" max="9" step="1" v-model="model.flex.shrink" /></div>
    <div class="uk-grid"><span>basis</span><input type="range" min="1" max="100" step="1" v-model="model.flex.basis" /></div>
    <label class="uk-form-label uk-width-1">flex grow:{{model.flex.grow}} shrink:{{model.flex.shrink}}  basis:{{model.flex.basis}}% </label>
  </div>
  <div v-if="model.ison">
    <div class="uk-grid"><span>start</span><input type="range" min="1" max="9" step="1" v-model="model.column.start" /></div>
    <div class="uk-grid"><span>span</span><input type="range" min="1" max="9" step="1" v-model="model.column.span" /></div>
    <label class="uk-form-label uk-width-1">column start:{{model.column.start}} span:{{model.column.span}} </label>
  </div>
  <div v-if="model.ison">
    <div class="uk-grid"><span>start</span><input type="range" min="1" max="9" step="1" v-model="model.row.start" /></div>
    <div class="uk-grid"><span>span</span><input type="range" min="1" max="9" step="1" v-model="model.row.span" /></div>
    <label class="uk-form-label uk-width-1">row start:{{model.row.start}} span:{{model.row.span}} </label>
  </div>
  
  
</div>`,
  methods: {
    initWith() {
      return {
        plugin : 'LayoutItem',
        ison   : false,
        self   : {justify: 'stretch', align: 'stretch'},
        flex   : {grow:0, shrink:1 , basis: 100 },
        column : {start: 1, span: 1},
        row    : {start: 1, span: 1},
      }
    }
  },
  data() {
    return {
      cLayout : ['static','fRow','fWrap','gMasonry','gMasonryRow','gTile'],
      cSelf   : ['start','end','center','stretch'],
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