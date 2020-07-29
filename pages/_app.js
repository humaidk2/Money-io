import "../styles/roboto_font.css";
import "../styles/bootstrap_min.css";
import "../styles/global.css";
import "../styles/form-elements.css";
import "../styles/style.css";
import { wrapper } from "../configureStore";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default wrapper.withRedux(App);

// const reducerExample = (state = {}, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
//   return state;
// };

// expect(reducerExample({}, { type: "ADD_TRANSACTION" })).equal({});

// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// import { createStore } from "redux";
// const createStore = (reducer) => {
//   let state;
//   let listeners = [];
//   const getState = () => state;

//   const dispatch = (action) => {
//     state = reducer(state, action);
//     listeners.forEach((listener) => {
//       listener();
//     });
//   };
//   const subscribe = (listener) => {
//     listeners.push(listener);
//     return () => {
//       listeners.filter((l) => l !== listener);
//     };
//   };
//   dispatch({});
//   return { getState, dispatch, subscribe };
// };
// const store = createStore(counter);
// console.log(store.getState());
// store.dispatch({ type: "INCREMENT" });

// console.log(store.getState);

// const render = () => {
//   document.body.innerText = store.getState();
// };
// render();
// store.subscribe(render);

// document.addEventListener("click", () => {
//   store.dispatch({ type: "INCREMENT" });
// });
// expect(counter(0, { type: "INCREMENT" })).equal(1);
// expect(counter(1, { type: "INCREMENT" })).equal(2);
// expect(counter(2, { type: "DECREMENT" })).equal(1);
// expect(counter(1, { type: "DECREMENT" })).equal(0);
// expect(counter(0, { type: "SOMETHING_ELSE" })).equals(0);
// expect(counter(undefined, {})).equal(0);
// console.log("ALL tests passed!");

// const Counter = ({ value, onIncrement, onDecrement }) => (
//   <div>
//     <h1>{value}</h1>
//     <button onClick={onIncrement}>+</button>
//     <button onClick={onDecrement}>-</button>
//   </div>
// );

// const render = () => {
//   ReactDOM.render(
//     <Counter
//       value={store.getState()}
//       onIncrement={() =>
//         store.dispactch({
//           type: "INCREMENT",
//         })
//       }
//       onDecrement={() => store.dispatch({ type: "DECREMENT" })}
//     />,
//     document.getElementById("root")
//   );
// };

// const addCounter = (list) => {
//   return [...list, 0];
// };

// const removeCounter = (list, index) => {
//   return [...list.slice(0, index), ...list.slice(index + 1)];
// };

// const incrementCounter = (list, index) => {
//   return [...list.slice(0, index), list[index] + 1, ...list.slice(index + 1)];
// };

// const testAddCounter = () => {
//   const listBefore = [];
//   const listAfter = [0];
//   deepFreeze(listBefore);
//   expect(addCounter(listBefore)).toEqual(listAfter);
// };

// const testRemoveCounter = () => {
//   const listBefore = [0, 10, 20];
//   const listAfter = [0, 20];
//   deepFreeze(listBefore);
//   expect(removeCounter(listBefore)).toEqual(listAfter);
// };

// const testIncrementCounter = () => {
//   const listBefore = [0, 10, 20];
//   const listAfter = [1, 11, 21];
//   deepFreeze(listBefore);
//   expect(incrementCounter(listBefore)).toEqual(listAfter);
// };

// testAddCounter();
// testRemoveCounter();
// testIncrementCounter();

// const toggleTodo = (todo) => {
//   return Object.assign({}, todo, {
//     completed: !todo.completed,
//   });
//   return { ...todo, completed: !todo.completed };
// };

// const testToggleTodo = () => {
//   const todoBefore = {
//     id: 0,
//     text: "Learn Redux",
//     completed: false,
//   };
//   const todoAfter = {
//     id: 0,
//     text: "Learn Redux",
//     completed: true,
//   };
//   deepFreeze(todoBefore);
//   expect(toggleTodo(todoBefore)).toEqual(todoAfter);
// };

// testToggleTodo();

// const todo = (state, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return {
//         id: action.id,
//         text: action.text,
//         completed: false,
//       };
//     case "TOGGLE_TODO":
//       if (state.id !== action.id) {
//         return state;
//       }
//       return {
//         ...state,
//         completed: !state.completed,
//       };
//     default:
//       return state;
//   }
// };
// const todos = (state = [], action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return [...state, todo(undefined, action)];
//     case "TOGGLE_TODO":
//       return state.map((todo) => {
//         todo(todo, action);
//       });
//     default:
//       return state;
//   }
// };

// const testAddTodo = () => {
//   const stateBefore = [];
//   const action = {
//     type: "ADD_TODO",
//     id: 0,
//     text: "Learn Redux",
//   };
//   const stateAfter = [
//     {
//       id: 0,
//       text: "Learn Redux",
//       completed: false,
//     },
//   ];
//   deepFreeze(stateBefore);
//   deepFreeze(action);
//   expect(todos(stateBefore, action)).toEqual(stateAfter);
// };
// testAddTodo();
// console.log("All Tests passed");

// const testToggleTodo = () => {
//   const stateBefore = [
//     {
//       id: 0,
//       text: "Learn Redux",
//       completed: false,
//     },
//     {
//       id: 1,
//       text: "Go shopping",
//       completed: false,
//     },
//   ];
//   const action = {
//     type: "TOGGLE_TODO",
//     id: 1,
//   };
//   const stateAfter = [
//     {
//       id: 0,
//       text: "Learn Redux",
//       completed: false,
//     },
//     {
//       id: 1,
//       text: "Go shopping",
//       completed: true,
//     },
//   ];
//   deepFreeze(stateBefore);
//   deepFreeze(action);
//   expect(toggleTodo(stateBefore, action)).toEqual(stateAfter);
// };

// testToggleTodo();

// const visibilityFilter = (state = "SHOW_ALL", action) => {
//   switch (action.type) {
//     case "SET_VISIBILITY_FILTER":
//       return action.filter;
//     default:
//       return state;
//   }
// };
// var hello = { hello: "ol", wow: 123, damn: "ads" };

// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//   };
// };

// const { combineReducers } = Redux;

// const combineReducers = (reducers) => {
//   return (state = {}, action) => {
//     return Object.keys(reducers).reduce((nextState, key) => {
//       nextState[key] = reducers[key](state[key], action);
//       return nextState;
//     }, {});
//   };
// };
// const todoApp = combineReducers({
//   todos,
//   visibilityFilter,
// });

// const { Component } = React;

// let nextTodoId = 0;
// const TodoApp = () => (
//   <div>
//     <AddTodo />
//     <VisibleTodoList />
//     <Footer />
//   </div>
// );

// const Todo = ({ onClick, completed, text }) => {
//   return (
//     <li
//       onClick={onClick}
//       style={{
//         textDecoration: completed ? "line-through" : "none",
//       }}
//     >
//       {text}
//     </li>
//   );
// };
// const TodoList = ({ todos, onTodoClick }) => {
//   return (
//     <ul>
//       {todos.map((todo) => (
//         <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
//       ))}
//     </ul>
//   );
// };

// class VisibleTodoList extends Component {
//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => this.forceUpdate());
//   }
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//   render() {
//     const props = this.props;
//     const state = store.getState();
//     return (
//       <TodoList
//         todos={getVisibleTodos(state.todos, state.visibilityFilter)}
//         onTodoClick={(id) => store.dispatch({ type: "TOGGLE_TODO", id })}
//       />
//     );
//   }
// }

// const Footer = () => (
//   <p>
//     Show: <FilterLink filter="SHOW_ALL">All</FilterLink>{" "}
//     <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>{" "}
//     <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
//   </p>
// );
// const AddTodo = (props, { state }) => {
//   let input;
//   return (
//     <div>
//       <input
//         ref={(node) => {
//           input = node;
//         }}
//       />
//       <button
//         onClick={(text) =>
//           store.dispatch({
//             type: "ADD_TODO",
//             id: nextTodoId++,
//             text: input.value,
//           })
//         }
//       >
//         Add Todo
//       </button>
//     </div>
//   );
// };
// AddTodo.contextTypes = {
//   store: React.PropTypes.object,
// };

// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case "SHOW_ALL":
//       return todos;
//     case "SHOW_COMPLETED":
//       return todos.filter((t) => t.completed);
//     case "SHOW_ACTIVE":
//       return todos.filter((t) => !t.completed);
//   }
// };

// const Link = ({ active, children, onClick }) => {
//   if (active) {
//     return <span>{children}</span>;
//   }
//   return (
//     <a
//       href="#"
//       onClick={(e) => {
//         e.preventDefault();
//         onClick();
//       }}
//     >
//       {children}
//     </a>
//   );
// };
// class FilterLink extends Component {
//   componentDidMount() {
//     const { state } = this.context;
//     this.unsubscribe = store.subscribe(() => this.forceUpdate());
//   }
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//   render() {
//     const props = this.props;
//     const state = store.getState();

//     return (
//       <Link
//         active={props.filter === this.state.visibilityFilter}
//         onClick={() =>
//           store.dispatch({
//             type: "SET_VISIBILITY_FILTER",
//             filter: props.filter,
//           })
//         }
//       >
//         {props.children}
//       </Link>
//     );
//   }
// }
// FilterLink.contextTypes = {
//   store: React.PropTypes.object,
// };

// // store.subscribe(render);
// // render();

// class Provider extends Component {
//   getChildContext() {
//     return {
//       store: this.props.store,
//     };
//   }
//   render() {
//     return this.props.children;
//   }
// }

// Provider.childContextTypes = {
//   store: React.PropTypes.object,
// };

// const render = () => {
//   ReactDOM.render(
//     <Provider store={createStore(todoApp)}>
//       <TodoApp />
//     </Provider>,
//     document.getElementById("root")
//   );
// };

// const { Provider } = ReactRedux;
// import { Provider } from "react-redux";

// const render = () => {
//   ReactDOM.render(
//     <Provider store={createStore(todoApp)}>
//       <TodoApp />
//     </Provider>,
//     document.getElementById("root")
//   );
// };

// /////////////////////////////////////
// //////////////////////////////////////
// /////////////////////////////
// ///CONNECT CODE////////////////
// ///////////////////////////////
// //////////////////////////////
// const mapStateToProps = (state) => {
//   return {
//     todos: getVisibleTodos(state.todos, state.visibilityFilter),
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) =>
//       dispatch({
//         type: "TOGGLE_TODO",
//         id,
//       }),
//   };
// };

// import {connect} from ReactRedux;
// const VisibileTodoList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList);

// let AddTodo = ( { dispatch }) => {
//   let input;
//   return (
//     <div>
//       <input
//         ref={(node) => {
//           input = node;
//         }}
//       />
//       <button
//         onClick={(text) =>
//           dispatch({
//             type: "ADD_TODO",
//             id: nextTodoId++,
//             text: input.value,
//           })
//         }
//       >
//         Add Todo
//       </button>
//     </div>
//   );
// };

// // not subscribe to store
// // and pass dispatch variable
// // if we dont set mapstatetoprops or mapstate
// AddTodo = connect()(AddTodo);

// const mapStateToProps = (state, ownProps) => {
//   return {
//     active: ownProps.filter == state.visibilityFilter
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps)=> {
//   return {
//     onClick: () => {
//       dispatch({
//         type: "SET_VISIBILITY_FILTER",
//         filter: ownProps.filter,
//       });
//     }
//   }
// }
// // creates container component that pass props and dispatch methods
// const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

// // Action creators
// dispatch(addTodo(input.value))

// const addTodo = (text) => {
//   return {
//     type: 'ADD_TODO',
//     id: nextTodoId++,
//     text
//   }
// }

// const persistedState = {
//   todos: [{
//     id: '0',
//     text: 'Welcome back!',
//     completed: false,
//   }]
// }

// // it loads whatever it needs from persistedstate
// // and creates the rest from default reducers
// const store = createStore(todoApp, persistedState);

// export const loadState = () => {
//   try{
//     const serializedState = localStorage.getItem('state');
//     if(serialized === null) {
//       return undefined
//     }
//     return JSON.parse(serializedState);
//   } catch(err) {
//     return undefined;
//   }
// }

// export const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('state',  serializedState)
//   } catch(err) {

//   }
// }
// import {loadState, saveState} from './localStorage.js'
// import throttle from 'lodash/throttle'

// const persistedState = loadState();

// store.subscribe(throttle(()=>{
//   saveState({todos: store.getState()})
// }), 1000)

// import {v4} from 'node-uuid';
