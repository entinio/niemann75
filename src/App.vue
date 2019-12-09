<template>
  <div
    id="add"
    class="app"
  >
    <!--<appLoader />-->
    <appWindow />
    <appFooter />
  </div>
</template>

<script>
  // Imports
  import AppLoader from './components/AppLoader.vue';
  import AppWindow from './components/AppWindow.vue';
  import AppFooter from './components/AppFooter.vue';

  export default {
    components: {
        'appLoader': AppLoader,
        'appWindow': AppWindow,
        'appFooter': AppFooter
    },
    data: function() {
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
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .app {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #53a5a5;
    cursor: default;
  }
</style>