import { createStore } from 'vuex'

export default createStore({
  state: {
    users: []
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload
    }
  },
  actions: {
    fetchUsers(context) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => { context.commit('setUsers', data) })
    },
    login(context, { email, password }) {

      context.users.forEach(item => {
        if (item.email == email && item.username == password)
      });
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('Could not complete Login')
      }
    },
  },
  modules: {
  }
})
