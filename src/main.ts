import Vue from 'vue'
import HelloComponent from './kdmt/component/Hello.vue'
import * as DPAttr from '@dpub/DPAttr'

(window as any).app_o = {

}

if (cfg_debug) {
  // let attr = new DPAttr()
  console.log('cfg_debug DPAttr.A', DPAttr.A)

} else {
  console.log('cfg_dist DPAttr.A', DPAttr.A)
}

console.log('cfg_lang', cfg_lang, DPAttr.run())

window.console.log((window as any).app_o)
new Vue({
  template: `
    <div>a
      <img src="@/assets/logo.png">
      <div>Hello {{name}}!</div>
      Name: <input type="text" v-model="name">
      <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
  `,
  data: {
    name: 'World'
  },
  components: {
    HelloComponent
  }
}).$mount('#app')
