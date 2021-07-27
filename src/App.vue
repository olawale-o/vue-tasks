<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Todos />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Todos from './views/Todos.vue';

export default {
  name: 'App',
  components: {
    Todos
  }
}
</script>

<style>
</style>
