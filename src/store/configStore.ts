import { createStore } from "redux";
import cardReducer from "./card/reducer";

export default createStore(cardReducer)