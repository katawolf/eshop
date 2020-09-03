import { createStore, applyMiddleware } from "redux";
import cartReducer from "./cart/reducer";
import {redirectMiddleware} from "./cart/middleware";

export default createStore(cartReducer, applyMiddleware(redirectMiddleware))