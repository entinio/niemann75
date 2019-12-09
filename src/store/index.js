import Vue from 'vue'
import Vuex from 'vuex'
import grid from './modules/grid'

Vue.use(Vuex);

export const store = new Vuex.Store({
  
  state: {},
  getters: {},
  mutations: {},
  actions:{},
  
  modules: {
    grid
  }
})