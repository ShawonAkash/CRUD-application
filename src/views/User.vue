<template>
  <table>
    <tr>
      <th>userId</th>
      <th>name</th>
      <th>email</th>
      <th>userName</th>
    </tr>
    <tr v-for="user in users" :key="user.id">
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.username }}</td>
    </tr>
  </table>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  name: "Users",
  setup() {
    const store = useStore();
    store.dispatch("fetchUsers");
    const users = computed(() => store.state.users);
    console.log(users);
    return { users };
  },
};
</script>

<style>
</style>