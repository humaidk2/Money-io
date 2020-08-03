export const deleteDebt = (id) => {
  return fetch(
    "https://alluring-mammoth-cave-84100.herokuapp.com/deleteDebts",
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

export const fetchDebts = () => {
  return fetch("https://alluring-mammoth-cave-84100.herokuapp.com/debts", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    credentials: "include",
  });
};

export const addDebt = (type, person, amount, description) => {
  return fetch("https://alluring-mammoth-cave-84100.herokuapp.com/debts", {
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
