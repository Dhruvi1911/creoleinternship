import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./reducer";

export const store = createStore(reducers, {}, applyMiddleware(thunk));
