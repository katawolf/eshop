import { createStore } from "redux";
import cartReducer from "./cart/reducer";

export default createStore(cartReducer)