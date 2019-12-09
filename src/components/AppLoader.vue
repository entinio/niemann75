<template>
  <div>

    <div
      id="cli"
      class="loader"
      v-show="cliUnloaded"
    >
      {{ cliText }}
    </div>

    <div
      id="clouds"
      class="winloader"
      v-show="winUnloaded"
    >
      <img src='/public/logo.png' />
      <div
        id="bottombar"
        class="loadingbar"
      />
    </div>

  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        cliUnloaded: true,
        winUnloaded: false,
        cliText: ''
      }
    },
    methods: {
      showCLI: function() {
        setTimeout(() => { this.cliText = this.cliText + '(C)Copyright Microsoft Corp 1981-1991.\n\n' }, 500);
        setTimeout(() => { this.cliText = this.cliText + '256KB CACHE MEMORY\n' }, 1500);
        setTimeout(() => { this.cliText = this.cliText + '66MHz Pentium CPU\n' }, 2000);
        setTimeout(() => { this.cliText = this.cliText + 'Windows 95 getting started...\n' }, 3000);
        setTimeout(() => { this.cliText = '' }, 5000);
        setTimeout(() => { this.cliUnloaded = false }, 12500);
        setTimeout(() => { this.winUnloaded = true  },  5500);
        setTimeout(() => { this.winUnloaded = false }, 12000);
      },
    },
    mounted() {
      this.showCLI();
    }
  }
</script>

<style scoped>
  @font-face {
    font-family: 'DOS';
    font-style: normal;
    font-weight: normal;
    src: url('/public/fonts/Fixedsys500c.eot');
    src: local('☺'), url('/public/fonts/Fixedsys500c.woff') format('woff'), url('/public/fonts/Fixedsys500c.ttf') format('truetype'), url('/public/fonts/Fixedsys500c.svg') format('svg');
  }

  .loader {
    position: absolute;
    box-sizing: border-box;
    font-family: DOS, Monaco, Menlo, Consolas, "Courier New", monospace;
    font-size: 18px;
    line-height: 20px;
    white-space: pre-line;
    background-color: black;
    color: #cecece;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    padding: 20px;
    z-index: 500;
  }

  .winloader {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background-image: url(/public/95.webp);
    background-repeat: no-repeat;
    background-color: #EEE;
    background-size: cover;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
  }

  .winloader img {
    margin-top: auto;
    margin-bottom: auto;
  }

  .loadingbar {
    width: 100%;
    height: 26px;
    background: linear-gradient(90deg, rgba(78,128,188,1) 0%, rgba(176,186,196,1) 25%, rgba(78,128,188,1) 50%, rgba(176,186,196,1) 75%, rgba(78,128,188,1) 100%);
    background-size: 200% 200%;
    background-position: 100% 50%;
    -webkit-animation: loadGradient 2s linear infinite;
    -moz-animation: loadGradient 2s linear infinite;
    animation: loadGradient 2s linear infinite;
  }

  @-webkit-keyframes loadGradient {
    0%   { background-position: 0%   50% }
    100% { background-position: 100% 50% }
  }
  @-moz-keyframes loadGradient {
    0%   { background-position: 0%   50% }
    100% { background-position: 100% 50% }
  }
  @keyframes loadGradient {
    0%   { background-position: 0%   50% }
    100% { background-position: 100% 50% }
  }
</style>