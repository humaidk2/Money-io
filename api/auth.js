export const logout = () => {
  return fetch("http://localhost:8000/logout", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    credentials: "include",
  });
};

export const signup = (username, email, password) => {
  return fetch("http://localhost:8000/signup", {
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
  return fetch("http://localhost:8000/signin", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ username, password }),
    credentials: "include",
  });
};
