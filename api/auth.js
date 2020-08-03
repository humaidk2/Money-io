export const logout = () => {
  return fetch(process.env.MONEY_SERVER_URL + "/logout", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    credentials: "include",
  });
};

export const signup = (username, email, password) => {
  return fetch(process.env.MONEY_SERVER_URL + "/signup", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
    credentials: "include",
  });
};

export const signin = (username, password) => {
  return fetch(process.env.MONEY_SERVER_URL + "/signin", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ username, password }),
    credentials: "include",
  });
};

export const verifyEmail = (url) => {
  return fetch(process.env.MONEY_SERVER_URL + "/verifyEmail" + url, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    credentials: "include",
  });
};
