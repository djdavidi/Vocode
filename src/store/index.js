import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    projects: []
  },
  actions: {
    LOAD_PROJECT_LIST: function ({ commit }) {
    //   axios.get("/api/todos").then((response) => {
    //     commit("SET_PROJECT_LIST", { list: response.data })
    //   }, (err) => {
    //     console.log("LOAD_PROJECT_LIST-ERROR: ", err);
    //   })
    }
  },
  mutations: {
    SET_PROJECT_LIST: (state, { list }) => {
      state.projects = list
    }
  },
  getters: {
    openProjects: state => {
      return state.projects;
    }
  }
})
export default store;