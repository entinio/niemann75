<template>
  <div
    draggable  = "true"
    class      = "icon"
    @dragstart = "dragStart"
    @dragend   = "dragEnd"
    @drop.stop
    :style     = "iconStyles"
  >
    <div>
      <img
        v-bind:src = "iconSrc"
        draggable  = "false"
      />
    </div>
    <div>{{ title }}</div>
  </div>
</template>

<script>
  export default {
    name: 'AppIcon',
    props: {
      title: {
        type: String,
        default: 'Unknown'
      },
      iconName: {
        type: String,
        default: 'default.png',
        validator: function (value) {
          return (
            value.endsWith('.png')  ||
            value.endsWith('.svg')  ||
            value.endsWith('.jpg')  ||
            value.endsWith('.jpeg') ||
            value.endsWith('.webp') ||
            value.endsWith('.gif')
          );
        }
      }
    },
    data: function() {
      return {
        opacity: 1,
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
      dragStart: function($event) {
        this.delta_coord.x = $event.x - this.offsetLeft;
        this.delta_coord.y = $event.y - this.offsetTop;
        this.opacity = .5;
        $event.dataTransfer.setData('text/html', null); 
      },

      dragOver: function($event) {
        this.coord.x = event.x;
        this.coord.y = event.y;
        if ($event.preventDefault) $event.preventDefault();
      },

      dragEnd: function() {
        this.opacity = 1;
        this.offsetTop  = this.coord.y - this.delta_coord.y;
        this.offsetLeft = this.coord.x - this.delta_coord.x;
      }
    },
    computed: {
      iconStyles: function () {
        return {
          top:  this.offsetTop  + 'px',
          left: this.offsetLeft + 'px',
          opacity: this.opacity
        };
      },
      iconSrc: function () {
        return '/public/icons/' + this.iconName;
      }
    },
    mounted() {
      this.$el.parentElement.addEventListener('dragover', this.dragOver, false);
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