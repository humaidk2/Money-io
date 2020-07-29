import * as api from "../api/transactions";

export const fetchTransactions = () => (dispatch) => {
  //   dispatch({
  //     type: "FETCH_TRANSACTIONS_REQUEST",
  //   });
  console.log("fetching");
  api.fetchTransactions().then(
    (response) => {
      dispatch({
        type: "FETCH_TRANSACTIONS_SUCCESS",
        response,
      });
    },
    (error) => {
      console.log(error.status);
      console.log(error.status == 401);
      console.log(error);
      dispatch({
        type: "FETCH_TRANSACTIONS_FAILURE",
        message: error.message || "Something went wrong.",
      });
    }
  );
};

export const addTransaction = (category, title, amount) => (dispatch) => {
  api.addTransaction(category, title, amount).then(
    (response) => {
      console.log(response);
      dispatch({
        type: "ADD_TRANSACTION_SUCCESS",
        response,
      });
    },
    (error) => {
      dispatch({
        type: "ADD_TRANSACTION_FAILURE",
        message: error.message || "Something went wrong.",
      });
    }
  );
};

export const deleteTransaction = (id) => (dispatch) => {
  api.deleteTransaction(id).then(
    (response) => {
      console.log(response);
      dispatch({
        type: "DELETE_TRANSACTION_SUCCESS",
        response,
      });
    },
    (error) => {
      dispatch({
        type: "DELETE_TRANSACTION_FAILURE",
        message: error.message || "Something went wrong.",
      });
    }
  );
};
