// reducer means it takes the previous state
// and an action and returns the next state
const debt = (state, action) => {
  switch (action.type) {
    case "ADD_DEBT":
      return {
        id: action.id,
        title: action.title,
        amount: action.amount,
      };
    default:
      return state;
  }
};

const debts = (state = [], action) => {
  switch (action.type) {
    case "ADD_DEBT":
      return [...state, debt(undefined, action)];
    case "DELETE_DEBT":
      return state.filter((t) => t.id != action.id);
    default:
      return state;
  }
};

export default debts;

// do a fetch request
// if it is successful dispatch add transaction
// if not
