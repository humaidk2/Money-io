export const deleteTransaction = (id) => {
  return fetch("http://localhost:8000/deleteTransactions", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      id,
    }),
    credentials: "include",
  }).then((response) => response.json());
};

export const fetchTransactions = () => {
  return fetch("http://localhost:8000/transactions", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    credentials: "include",
  }).then((response) => response.json());
};

export const addTransaction = (category, title, amount) => {
  return fetch("http://localhost:8000/transactions", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ category, title, amount, date: new Date() }),
    credentials: "include",
  }).then((response) => response.json());
};
