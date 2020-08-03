export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    console.log("loading");
    console.log(serializedState);
    if (serializedState == null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    console.log("saving");
    console.log(state);
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    // Ignore write errors
  }
};