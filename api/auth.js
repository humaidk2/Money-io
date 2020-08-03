export const logout = () => {
  return fetch("https://alluring-mammoth-cave-84100.herokuapp.com/logout", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    credentials: "include",
  });
};

export const signup = (username, email, password) => {
  return fetch("https://alluring-mammoth-cave-84100.herokuapp.com/signup", {
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
  return fetch("https://alluring-mammoth-cave-84100.herokuapp.com/signin", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ username, password }),
    credentials: "include",
  });
};

export const verifyEmail = (url) => {
  return fetch(
    "https://alluring-mammoth-cave-84100.herokuapp.com/verifyEmail" + url,
    {
      headers: { "Content-Type": "application/json" },
      method: "GET",
      credentials: "include",
    }
  );
};
