import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    loggedUser: null
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload
    },
    loggedUser(state, username){
      state.loggedUser = username
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
        if (item.email == email && item.username == password){
          context.commit('loggedUser', {username: password})
        }
      });
      
    },
  },
  modules: {
  }
})
