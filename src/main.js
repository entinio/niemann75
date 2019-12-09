import Vue from 'vue'
import App from './App.vue'

import { store } from './store'

new Vue({
  el: '#app',
  store,
  render: h => h(App),

  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', function() { store.dispatch('gridResize') });
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', function() { store.dispatch('gridResize') });
  }
})