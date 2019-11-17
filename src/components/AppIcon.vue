<template>
  <div draggable="true" class="icon" @dragstart="drag_start" @dragend="drag_end" @drop="drag_drop"
    v-bind:style="{ top: offsetTop + 'px', left: offsetLeft + 'px' }">
    <div><img v-bind:src="get_icon()" draggable="false" /></div>
    <div>{{ title }}</div>
  </div>
</template>

<script>
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
        offsetLeft: 2,
        offsetTop: 4,
        coord: {
          x: 0,
          y: 0
        },
        delta_coord: {
          x: 0,
          y: 0
        }
      }
    },
    methods: {
      get_icon: function() {
        return "/public/icons/" + this.icon_name;
      },

      drag_start: function(event) {
        this.delta_coord.x = event.x - this.offsetLeft;
        this.delta_coord.y = event.y - this.offsetTop;
        event.dataTransfer.setData('text/html', null); 
        event.target.style.opacity = .5;
      },

      drag_over: function(event) {
        this.coord.x = event.x;
        this.coord.y = event.y;
        if (event.preventDefault) event.preventDefault();
      },

      drag_end: function(event) {
        event.target.style.opacity = "";
        this.offsetTop  = this.coord.y - this.delta_coord.y;
        this.offsetLeft = this.coord.x - this.delta_coord.x;
      },

      drag_drop: function(event) {
        if (event.stopPropagation) e.stopPropagation();
      }
    },
    mounted() {
      this.$el.parentElement.addEventListener('dragover', this.drag_over, false);
    }
  }
</script>

<style scoped>
  .icon {
    position: absolute;
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