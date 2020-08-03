export const deleteTransaction = (id) => {
  return fetch(
    "https://alluring-mammoth-cave-84100.herokuapp.com/deleteTransactions",
    {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        id,
      }),
      credentials: "include",
    }
  );
};

export const fetchTransactions = () => {
  return fetch(
    "https://alluring-mammoth-cave-84100.herokuapp.com/transactions",
    {
      headers: { "Content-Type": "application/json" },
      method: "GET",
      credentials: "include",
    }
  );
};

export const addTransaction = (category, title, amount) => {
  return fetch(
    "https://alluring-mammoth-cave-84100.herokuapp.com/transactions",
    {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ category, title, amount, date: new Date() }),
      credentials: "include",
    }
  );
};
