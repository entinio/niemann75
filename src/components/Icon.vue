<template>
  <div draggable="true" class="icon">
    <div><img v-bind:src="get_icon()" draggable="false" /></div>
    <div>{{ title }}</div>
  </div>
</template>

<script>
  let x, y, dx, dy;

  function drag_start(e) {
    dx = e.x - e.srcElement.offsetLeft;
    dy = e.y - e.srcElement.offsetTop;
    e.dataTransfer.setData('text/html', null); 
    e.target.style.opacity = .5;
  }

  function drag_over(e) {
    x = e.x;
    y = e.y;
    if (e.preventDefault) e.preventDefault();
  }

  function drag_end(e) {
    e.target.style.opacity = "";
    e.srcElement.style.top  = eval(y - dy) + "px";
    e.srcElement.style.left = eval(x - dx) + "px";
  }

  function drag_drop(e) {
    if (e.stopPropagation) e.stopPropagation();

    return false;
  }

  export default {
    props: {
      title: {
        type: String,
        default: "Unknown"
      },
      icon_name: {
        type: String,
        default: "default.png"
      }
    },
    data() {
      return {

      }
    },
    methods: {
      get_icon: function() {
        return require("../assets/" + this.icon_name);
      }
    },
    mounted() {
      this.$el.addEventListener('dragstart', drag_start, false);
      this.$el.parentElement.addEventListener('dragover', drag_over, false);
      this.$el.addEventListener('drop', drag_drop, false);
      this.$el.addEventListener('dragend', drag_end, false);
    }
  }
</script>

<style scoped>
  .icon {
    position: absolute;
    top: 4px;
    left: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 94px;
    height: 74px;
    font-size: 12px;
    color: white;
    touch-action: none;
    user-select: none;
  }
</style>