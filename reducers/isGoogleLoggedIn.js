const isGoogleLoggedIn = (state = false, action) => {
  switch (action.type) {
    case "LOGIN_GOOGLE_SUCCESS":
      return true;
    case "LOGIN_GOOGLE_FAILURE":
    case "LOGOUT_GOOGLE_SUCCESS":
      return false;
    default:
      return state;
  }
};
export default isGoogleLoggedIn;
