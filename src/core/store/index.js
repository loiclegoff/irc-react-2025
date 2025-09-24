import { composeWithDevTools } from "@redux-devtools/extension";

import { createStore } from "redux";
import { globalReducer } from "../reducers";

export const store = createStore(globalReducer, composeWithDevTools());