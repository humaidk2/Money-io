export const deleteDebt = (id) => {
  return fetch(process.env.MONEY_SERVER_URL + "/deleteDebts", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      id,
    }),
    credentials: "include",
  });
};

export const fetchDebts = () => {
  return fetch(process.env.MONEY_SERVER_URL + "/debts", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    credentials: "include",
  });
};

export const addDebt = (type, person, amount, description) => {
  return fetch(process.env.MONEY_SERVER_URL + "/debts", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      type,
      person,
      amount,
      description,
      date: new Date(),
    }),
    credentials: "include",
  });
};
