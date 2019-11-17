<template>
  <div class="window">
    <app-icon title="Poste de travail" icon_name="poste.png"></app-icon>
    <app-icon></app-icon>
  </div>
</template>

<script>
  // Imports
  import AppIcon from './AppIcon.vue';

  export default {
    components: {
      'app-icon': AppIcon
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