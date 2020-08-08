export const deleteTransaction = (id) => {
  return fetch(
    process.env.NEXT_PUBLIC_MONEY_SERVER_URL + "/deleteTransactions",
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
  return fetch(process.env.NEXT_PUBLIC_MONEY_SERVER_URL + "/transactions", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    credentials: "include",
  });
};

export const addTransaction = (category, title, amount) => {
  return fetch(process.env.NEXT_PUBLIC_MONEY_SERVER_URL + "/transactions", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ category, title, amount, date: new Date() }),
    credentials: "include",
  });
};
