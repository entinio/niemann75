<template>
  <div
    id="add"
    class="app"
  >
    <appWindow />
    <appFooter />
  </div>
</template>

<script>
  // Imports
  import AppWindow from './components/AppWindow.vue';
  import AppFooter from './components/AppFooter.vue';

  export default {
    components: {
        'appWindow': AppWindow,
        'appFooter': AppFooter
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