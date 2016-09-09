var redux = require('redux');
var actions = require('./actions');

export var tuningReducer = ( state = 'tuning1', action ) => {

  if ( action.type == actions.CHANGE_TUNING ) {
    return action.key
  } else {
    return state
  }
}

export var scaleReducer = ( state = 'scale0', action ) => {

  if ( action.type == actions.CHANGE_SCALE ) {
    return action.key
  } else {
    return state
  }
}

// all app reducers compined into one
export const appReducers = redux.combineReducers({
  selectedTuningKey:tuningReducer,
  selectedScaleKey:scaleReducer,
  selectedScaleNote: (state = {}) => state,
  selectedChordKey: (state = {}) => state,
  selectedChordNote: (state = {}) => state,
  numberOfNotesOnFretboard: (state = {}) => state,
  selectedNotesForScale: (state = {}) => state,
  selectedNotesForChord: (state = {}) => state,
  scales: (state = {}) => state,
  tunings: (state = {}) => state,
  chords: (state = {}) => state
})
