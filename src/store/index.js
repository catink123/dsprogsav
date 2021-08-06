import Vue from 'vue'
import Vuex from 'vuex'
import localForage from 'localforage';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dsRemastered: {
      armory: [],
      pyromancy: [],
      religion: []
    },
    ds2sotfs: {
      corruption: [],
      gestures: [],
      pyromancy: [],
      wizardry: [],
      wonders: []
    },
    ds3: {
      expression: [],
      miracles: [],
      pyromancies: [],
      rings: [],
      sorceries: []
    },
    loading: true,
    currentGame: 'dsRemastered'
  },
  mutations: {
    addNewItem(state, payload) {
      state[payload.gameName][payload.sectionName].push(payload.data)
    },

    toggleDone(state, payload) {
      let index = state[payload.gameName][payload.sectionName].findIndex((val) => {
        if (val.name === payload.key) return true;
        return false;
      });
      state[payload.gameName][payload.sectionName][index].done = !state[payload.gameName][payload.sectionName][index].done;
    },

    deleteItem(state, payload) {
      let index = state[payload.gameName][payload.sectionName].findIndex((val) => {
        if (val.name === payload.key) return true;
        return false;
      });
      state[payload.gameName][payload.sectionName].splice(index, 1);
    },

    setGameData(state, payload) {
      state[payload.gameName] = payload.data;
      state.needsUpdate = true;
    },

    setLoading(state, loading) {
      state.loading = loading;
    },

    setGameName(state, name) {
      state.currentGame = name;
    }
  },
  actions: {
    save(context) {
      let entries = Object.entries(context.state);
      let keys = [];
      for (let i = 0; i < entries.length - 1; i++) {
        localForage.setItem(entries[i][0], entries[i][1]);
        keys.push(entries[i][0]);
      }
      localForage.setItem("keys", keys);
    },
    load(context) {
      context.commit('setLoading', true);
      localForage.getItem("keys").then(keys => {
        let getPromises = [];
        for (let i in keys) {
          getPromises.push(localForage.getItem(keys[i]));
        }
        Promise.all(getPromises).then(vals => {
          for (let i in vals) {
            context.commit('setGameData', {
              gameName: keys[i],
              data: vals[i]
            })
          }
          context.commit('setLoading', false);
        });
      });
    }
  },
  getters: {
    loading: (state) => state.loading,
    currentGame: (state) => state.currentGame
  },
})
