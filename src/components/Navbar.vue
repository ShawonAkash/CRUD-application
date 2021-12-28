<template>
  <nav>
    <h1>CRUD</h1>
    <!-- for all users -->
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div>
      <router-link to="/user">User</router-link>
    </div>
    <div>
      <p v-if="username">logged in as {{username}}</p>
    </div>
    <div>
      <p v-if="username">log out</p>
    </div>
    <div v-if="!username">
      <router-link to="/login">Login</router-link>
    </div>
  </nav>
</template>

<script>
import { ref } from '@vue/reactivity';
  import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
  const username = ref(store.state.loggedUser)
  return{username}
  }
};
</script>

<style>
</style>
