import * as api from "../api/transactions";

export const fetchTransactions = () => (dispatch) => {
  api
    .fetchTransactions()
    .then((response) => {
      if (response.status !== 200) {
        return Promise.reject(response);
      } else return response.json();
    })
    .then(
      (response) => {
        dispatch({
          type: "FETCH_TRANSACTIONS_SUCCESS",
          response,
        });
      },
      (error) => {
        if (error.status === 401) {
          dispatch({
            type: "LOGIN_FAILURE",
          });
        } else {
          dispatch({
            type: "FETCH_TRANSACTIONS_FAILURE",
            message: error.message || "Something went wrong.",
          });
        }
      }
    );
};

export const addTransaction = (category, title, amount) => (dispatch) => {
  api
    .addTransaction(category, title, amount)
    .then((response) => {
      if (response.status === 401) {
        throw new Error("Oh no!");
      } else return response.json();
    })
    .then(
      (response) => {
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
  api
    .deleteTransaction(id)
    .then((response) => response.json())
    .then(
      (response) => {
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
