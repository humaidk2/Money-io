import * as api from "../api/debts";

export const fetchDebts = () => (dispatch) => {
  api.fetchDebts().then(
    (response) => {
      dispatch({
        type: "FETCH_DEBTS_SUCCESS",
        response,
      });
    },
    (error) => {
      dispatch({
        type: "FETCH_DETBS_FAILURE",
        message: error.message || "Something went wrong.",
      });
    }
  );
};

export const addDebt = (type, person, amount, description) => (dispatch) => {
  api.addDebt(type, person, amount, description).then(
    (response) => {
      console.log(response);
      dispatch({
        type: "ADD_DEBT_SUCCESS",
        response,
      });
    },
    (error) => {
      dispatch({
        type: "ADD_DEBT_FAILURE",
        message: error.message || "Something went wrong.",
      });
    }
  );
};

export const deleteDebt = (id) => (dispatch) => {
  api.deleteDebt(id).then(
    (response) => {
      console.log(response);
      dispatch({
        type: "DELETE_DEBT_SUCCESS",
        response,
      });
    },
    (error) => {
      dispatch({
        type: "DELETE_DEBT_FAILURE",
        message: error.message || "Something went wrong.",
      });
    }
  );
};
