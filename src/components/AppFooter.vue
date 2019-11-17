<template>
  <footer>
    <div class="footer__demarrer">
      <button class="footer__demarrer__start" />
    </div>
    <div class="footer__taskbar" />
    <div class="footer__clock" />
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

  .footer__demarrer {
    display: flex;
  }

  .footer__demarrer__start {
    background: url(/public/demarrer.png) no-repeat;
    width: 78px;
    height: 22px;
    border: none;
  }

  .footer__demarrer__start:active {
    background: url(/public/demarrer_on.png) no-repeat;
  }

  .footer__taskbar {
    flex-grow: 1;
    background-color: white;
  }

  .footer__clock {
    width: 66px;
    height: 22px;
    padding: 0;
    background-color: yellow;
  }
</style>