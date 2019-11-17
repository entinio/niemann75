<template>
  <div id="app">
    <app-window></app-window>
    <app-footer></app-footer>
  </div>
</template>

<script>
  // Imports
  import Window from './components/Window.vue';
  import Footer from './components/Footer.vue';

  export default {
    components: {
        'app-window': Window,
        'app-footer': Footer
    },
    data () {
        return {
        }
    }
  }
</script>

<style>
  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: 'Segoe UI', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #53a5a5;
    cursor: default;
  }
</style>