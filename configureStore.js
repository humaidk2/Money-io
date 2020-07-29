import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const configureStore = () => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV) {
    middlewares.push(logger);
  }
  return createStore(rootReducer, applyMiddleware(...middlewares));
};
// create a makeStore function
const makeStore = (context) => configureStore();

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
// export default configureStore;
