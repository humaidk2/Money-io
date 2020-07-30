import { combineReducers } from "redux";
import transactions from "./transactions";
import debts from "./debts";
import isLoggedIn from "./isLoggedIn";

const rootReducers = combineReducers({
  transactions,
  debts,
  isLoggedIn,
});

export default rootReducers;
