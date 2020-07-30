const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return true;
    case "LOGIN_FAILURE":
    case "LOGOUT_SUCCESS":
      return false;
    default:
      return state;
  }
};
export default isLoggedIn;
