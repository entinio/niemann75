<template>
  <div class="window">
    <icon title="Poste de travail" icon_name="poste.png"></icon>
    <icon></icon>
  </div>
</template>

<script>
  // Imports
  import Icon from './Icon.vue';

  export default {
    components: {
      'icon': Icon
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