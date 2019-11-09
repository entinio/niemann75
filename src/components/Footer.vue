<template>
  <footer>
    {{ copyright }}
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        copyright: 'Copyright 2019'
      }
    }
  }
</script>

<style scoped>
  footer {
    background: #222;
    height: 36px;
    padding: 0;
    margin: 0;
  }
</style>