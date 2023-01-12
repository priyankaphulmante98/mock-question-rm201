import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./Dogreducer/Dogreducer";

export const store = legacy_createStore(reducer);
