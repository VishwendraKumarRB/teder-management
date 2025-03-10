import { combineReducers } from "redux";
import data from "./data";

const rootReducer = combineReducers({
  data,
});

export default function getRootReducer() {
  return rootReducer;
}
