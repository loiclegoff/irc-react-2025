import { composeWithDevTools } from "@redux-devtools/extension";

import { createStore } from "redux";
import { robotReducer } from "../reducers/robot.reducer";

export const store = createStore(robotReducer, composeWithDevTools());