import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import dataReducer from "./features/dataReducers";

const store = createStore(
  dataReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
