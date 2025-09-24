import { combineReducers } from "redux";
import { partReducer } from "./part.reducer";
import { robotReducer } from "./robot.reducer";

export const globalReducer = combineReducers({
  part: partReducer,
  robot: robotReducer
})