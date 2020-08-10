import * as api from "../api/auth";

export const signin = (username, password) => (dispatch) => {
  api
    .signin(username, password)
    .then((response) =>
      response.status == 200 ? response.json() : Promise.reject(response)
    )
    .then(
      (response) => {
        response.isLoggedIn &&
          dispatch({ type: "LOGIN_SUCCESS", username: response.username });
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

export const signinGoogle = (token) => (dispatch) => {
  dispatch({ type: "LOGIN_GOOGLE_SUCCESS" });
  api
    .verifyGoogle(token)
    .then((response) =>
      response.status == 200 ? response.json() : Promise.reject(response)
    )
    .then(
      (response) => {
        dispatch({ type: "LOGIN_SUCCESS", username: response.username });
      },
      (error) => {
        dispatch({
          type: "LOGIN_FAILURE",
        });
      }
    );
};

export const logoutGoogle = (logout) => (dispatch) => {
  dispatch({ type: "LOGOUT_GOOGLE_SUCESS" });
  logout();
};
