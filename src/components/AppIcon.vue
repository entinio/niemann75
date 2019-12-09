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
        iconId: 0,
        opacity: 1,
        coordLast: {
          x: 0,
          y: 0
        },
        coordDelta: {
          x: 0,
          y: 0
        }
      }
    },
    methods: {
      dragStart: function($event) {
        this.coordDelta.x = $event.x - this.$store.getters.iconCoord[this.iconId].x;
        this.coordDelta.y = $event.y - this.$store.getters.iconCoord[this.iconId].y;
        this.opacity = .5;
        $event.dataTransfer.setData('text/html', null); 
      },

      dragOver: function($event) {
        this.coordLast.x = event.x;
        this.coordLast.y = event.y;
        if ($event.preventDefault) $event.preventDefault();
      },

      dragEnd: function() {
        this.opacity = 1;
        this.$store.dispatch('gridPushCoord', {id: this.iconId, coord: {x: this.coordLast.x - this.coordDelta.x, y: this.coordLast.y - this.coordDelta.y}});
      }
    },
    computed: {
      iconStyles() {
        if (this.$store.getters.iconCoord[this.iconId]) {
          return {
            top:  this.$store.getters.iconCoord[this.iconId].y + 'px',
            left: this.$store.getters.iconCoord[this.iconId].x + 'px',
            opacity: this.opacity
          }
        } else {
          return {
            top:  '4px',
            left: '4px',
            opacity: this.opacity
          }
        }
      },
      iconSrc: function () {
        return '/public/icons/' + this.iconName;
      }
    },
    mounted() {
      this.$el.parentElement.addEventListener('dragover', this.dragOver, false);
      this.iconId = this.$store.getters.iconNumber;
      this.$store.dispatch('iconIncId');
      this.$store.dispatch('gridPushCoord', {id: this.iconId, coord: {x: this.$store.getters.iconStart.x, y: this.$store.getters.iconStart.y}});
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