import currencySelector from "./currencySelector.reducer";
import filter from "./filter.reducer";
import list from "./list.reducer";
import app from "./app.reducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  currencySelector,
  filter,
  list,
  app
});

export default reducer;