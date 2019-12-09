const iconSpace = {
  x: 100,
  y: 75
}

const state = {
  iconsNumber: 0,
  iconsGrid: [],
  coordStart: {
    x: 4,
    y: 6
  }
}

function hasTwin(id) {
  for (var i in state.iconsGrid) {
    if (i != id) {
      if (state.iconsGrid[i].x == state.iconsGrid[id].x && state.iconsGrid[i].y == state.iconsGrid[id].y) return true;
    }
  }
  return false;
}

function moveTwin(id) {
  while (hasTwin(id)) {
    if (state.iconsGrid[id].y > window.innerHeight - iconSpace.y - 41) {
      if (state.iconsGrid[id].x > window.innerWidth - 2*iconSpace.x) {
        state.iconsGrid[id].x = state.coordStart.x;
      } else state.iconsGrid[id].x += iconSpace.x;
      state.iconsGrid[id].y = state.coordStart.y;
    } else
      state.iconsGrid[id].y += iconSpace.y;
  }
}

const getters = {
  iconNumber: state => {
    return state.iconsNumber;
  },
  iconCoord: state => {
    return state.iconsGrid;
  },
  iconStart: state => {
    return state.coordStart;
  }
}

const mutations = {
  iconInc: state => {
    state.iconsNumber++;
  },
  gridPush: (state, payload) => {
    payload.coord.x = Math.max(Math.round((payload.coord.x - state.coordStart.x)/iconSpace.x - 0.2)*iconSpace.x + state.coordStart.x, state.coordStart.x);
    payload.coord.y = Math.max(Math.round((Math.min(payload.coord.y, window.innerHeight - iconSpace.y - 41) - state.coordStart.y)/iconSpace.y - 0.2)*iconSpace.y + state.coordStart.y, state.coordStart.y);
    state.iconsGrid[payload.id] = payload.coord;
  },
  gridArrange: (state, payload) => {
    moveTwin(payload);
  },
  gridReArrange: state => {
    console.log('resize');
    for (var i in state.iconsGrid) {
      if (state.iconsGrid[i].y > window.innerHeight - iconSpace.y - 41) {
        if (state.iconsGrid[i].x > window.innerWidth - 2*iconSpace.x) {
          state.iconsGrid[i].x = state.coordStart.x;
        } else {
          state.iconsGrid[i].x += iconSpace.x;
        }
        state.iconsGrid[i].y = state.coordStart.y;
        moveTwin(i);
      }
    }
  }
}

const actions = {
  iconIncId: context => {
    context.commit('iconInc');
  },
  gridPushCoord: (context, payload) => {
    context.commit('gridPush', payload);
    context.commit('gridArrange', payload.id);
  },
  gridResize: context => {
    context.commit('gridReArrange');
  }
}

export default {
  state, getters, mutations, actions
} 