import * as api from "../api/auth";

export const signin = (username, password) => (dispatch) => {
  api
    .signin(username, password)
    .then((response) =>
      response.status == 200 ? response.json() : Promise.reject(response)
    )
    .then(
      (response) => {
        response.isLoggedIn && dispatch({ type: "LOGIN_SUCCESS" });
      },
      (error) => {
        dispatch({
          type: "LOGIN_FAILURE",
        });
      }
    );
};
export const signup = (username, email, password) => (dispatch) => {
  api
    .signup(username, email, password)
    .then((response) =>
      response.status == 200 ? response.json() : Promise.reject(response)
    )
    .then(
      (response) => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      },
      (error) => {
        dispatch({
          type: "SIGNUP_FAILURE",
        });
      }
    );
};

export const logout = () => (dispatch) => {
  api
    .logout()
    .then((response) =>
      response.status == 200 ? response.json() : Promise.reject(response)
    )
    .then(
      (response) => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      },
      (error) => {
        dispatch({
          type: "LOGOUT_FAILURE",
        });
      }
    );
};
