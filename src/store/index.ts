import Vue from "vue";
import Vuex from "vuex";
import { UsersModule } from "./modules/users";

Vue.use(Vuex);

class State {}

export default new Vuex.Store({
  state: new State(),
  mutations: {},
  actions: {},
  modules: {
    users: UsersModule
  }
});
