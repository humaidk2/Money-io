const transaction = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION_SUCCESS":
      return {
        id: action.response.id,
        title: action.response.title,
        category: action.response.category,
        amount: action.response.amount,
        date: action.response.date,
      };
    default:
      return state;
  }
};

// reducer means it takes the previous state
// and an action and returns the next state
const transactions = (state = [], action) => {
  action.response && console.log(action.response.transaction);
  switch (action.type) {
    case "FETCH_TRANSACTIONS_SUCCESS":
      return action.response.transactions;
    case "ADD_TRANSACTION_SUCCESS":
      return [...state, transaction(undefined, action)];
    case "DELETE_TRANSACTION_SUCCESS":
      return state.filter((t) => t.id != action.response.id);
    default:
      return state;
  }
};
export default transactions;

// do a fetch request
// if it is successful dispatch add transaction
// if not
