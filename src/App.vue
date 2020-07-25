<template>
  <div id="app">
    <Header />
    <router-view />
    <div id="install-button" hidden>
      <img src="/img/download.png" alt="download">
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #install-button {
    position: absolute;
    right: 3px;
    bottom: 5px;
  }
</style>
