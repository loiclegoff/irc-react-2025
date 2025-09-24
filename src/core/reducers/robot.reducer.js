import { LOAD_ROBOTS } from "../actions"

const initialState = { robots: [] }

export function robotReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  switch (action.type) {
    case LOAD_ROBOTS: {
      return {
        ...state,
        robots: action.payload
      }
    }
    // Otherwise return the existing state unchanged
    default:
      return state
  }
}