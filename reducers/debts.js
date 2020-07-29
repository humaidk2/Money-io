// reducer means it takes the previous state
// and an action and returns the next state
const debt = (state, action) => {
  switch (action.type) {
    case "ADD_DEBT_SUCCESS":
      return {
        id: action.response.id,
        person: action.response.person,
        amount: action.response.amount,
        type: action.response.type,
        description: action.response.description,
        date: action.response.date,
      };
    default:
      return state;
  }
};

const debts = (state = [], action) => {
  switch (action.type) {
    case "FETCH_DEBTS_SUCCESS":
      return action.response.debts;
    case "ADD_DEBT_SUCCESS":
      return [...state, debt(undefined, action)];
    case "DELETE_DEBT":
      return state.filter((t) => t.id != action.id);
    default:
      return state;
  }
};

export default debts;
