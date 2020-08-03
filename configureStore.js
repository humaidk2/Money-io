import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { loadState, saveState } from "./localstorage";
import throttle from "lodash/throttle";

const configureStore = () => {
  const middlewares = [thunk];
  const persistedState = loadState();
  console.log("persisted state " + JSON.stringify(persistedState));
  if (process.env.NODE_ENV) {
    middlewares.push(logger);
  }
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(...middlewares)
  );
  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }, 1000)
  );
  return store;
};

// create a makeStore function
const makeStore = (context) => configureStore();

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
// export default configureStore;
