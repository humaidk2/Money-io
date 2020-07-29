import { combineReducers } from "redux";
import transactions from "./transactions";
import debts from "./debts";

const rootReducers = combineReducers({
  transactions,
  debts,
});

export default rootReducers;
