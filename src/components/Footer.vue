<template>
  <footer>
    <div id="demarrer"><button class="start"></button></div>
    <div id="taskbar" />
    <div id="clock" />
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    }
  }
</script>

<style scoped>
  footer {
    display: flex;
    align-items: center;
    background: #c0c7c8;
    height: 26px;
    padding: 2px;
    margin: 0;
    z-index: 100;
  }

  #demarrer {
    display: flex;
  }

  .start {
    background: url(../assets/demarrer.png) no-repeat;
    width: 78px;
    height: 22px;
    border: none;
  }

  .start:active {
    background: url(../assets/demarrer_on.png) no-repeat;
  }

  #taskbar {
    flex-grow: 1;
    background-color: white;
  }

  #clock {
    width: 66px;
    height: 22px;
    padding: 0;
    background-color: yellow;
  }
</style>