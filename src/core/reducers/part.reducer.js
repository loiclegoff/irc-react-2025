import { LOAD_PARTS } from "../actions/part"

const initialState = {
  parts: []
}

export function partReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  switch (action.type) {
    case LOAD_PARTS: {
      return {
        ...state,
        parts: action.payload
      }
    }
    default:
      return state
  }
}