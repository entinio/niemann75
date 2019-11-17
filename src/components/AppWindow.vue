<template>
  <div class="window">
    <appIcon
      title="Poste de travail"
      iconName="poste.png"
    />
    <appIcon />
  </div>
</template>

<script>
  // Imports
  import AppIcon from './AppIcon.vue';

  export default {
    components: {
      'appIcon': AppIcon
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .window {
    flex-grow: 1;
    padding: 4px 2px;
  }
</style>