import { LOAD_ROBOTS, SELECT_ROBOT } from "../actions/robot"

const initialState = { robots: [], selectedPartIds: [] }

export function robotReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  switch (action.type) {
    case LOAD_ROBOTS: {
      return {
        ...state,
        robots: action.payload
      }
    }
    case SELECT_ROBOT: {
      return {
        ...state,
        selectedPartIds: action.payload
      }
    }
    // Otherwise return the existing state unchanged
    default:
      return state
  }
}