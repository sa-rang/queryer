<template>
  <div id="app">
    <Query msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Query from "./components/Query.vue";

export default {
  name: "App",
  components: {
    Query,
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
}
</style>
