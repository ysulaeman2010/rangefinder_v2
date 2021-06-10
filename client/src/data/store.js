import { createStore } from "redux";
import dataReducer from "./features/dataReducers";

const store = createStore(dataReducer);

export default store;
