<template>
  <div id="add" class="app">
    <app-window></app-window>
    <app-footer></app-footer>
  </div>
</template>

<script>
  // Imports
  import AppWindow from './components/AppWindow.vue';
  import AppFooter from './components/AppFooter.vue';

  export default {
    components: {
        'app-window': AppWindow,
        'app-footer': AppFooter
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

  .app {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #53a5a5;
    cursor: default;
  }
</style>