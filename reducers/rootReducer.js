import { combineReducers } from "redux";
import transactions from "./transactions";
import debts from "./debts";
import isLoggedIn from "./isLoggedIn";
import isGoogleLoggedIn from "./isGoogleLoggedIn";

const rootReducers = combineReducers({
  transactions,
  debts,
  isLoggedIn,
  isGoogleLoggedIn,
});

export default rootReducers;
