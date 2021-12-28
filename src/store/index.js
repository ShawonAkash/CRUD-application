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
      console.log('commit touched')
      console.log(state.loggedUser)
    }
  },
  actions: {
    fetchUsers(context) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => { context.commit('setUsers', data) })
    },
    login(context, { email, password }) {
      console.log(context.state.users)
      context.state.users.forEach(item => {
        if (item.email === email && item.username === password){
          console.log('login inside touched')
          context.commit('loggedUser', password)
          
        }
      });
      
    },
  },
  modules: {
  }
})
