const init = {
  token: JSON.parse(localStorage.getItem("token")) || "",
  dogs: [],
};
export const reducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case "token":
      return { ...state, token: payload };

    case "datafetch":
      return { ...state, dogs: payload };
    default:
      return state;
  }
};
