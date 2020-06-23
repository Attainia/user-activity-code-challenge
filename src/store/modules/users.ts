import users, { User } from "../../api/users";
import { ActionTree, MutationTree } from "vuex";

class State {
  users: User[] = [];
}

const mutations: MutationTree<State> = {
  setUsers(state, payload) {
    state.users = payload;
  }
};

const actions: ActionTree<State, any> = {
  get({ commit }) {
    users.get().then(users => commit("setUsers", users));
  }
};

export const UsersModule = {
  namespaced: true,
  state: new State(),
  mutations,
  actions
};
