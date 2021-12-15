import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // enable strict mode in the dev environment
  strict: process.env.NODE_ENV !== `production`,
});
