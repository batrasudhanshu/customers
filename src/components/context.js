import React, { createContext, useContext, useReducer } from "react";

export const StoreContext = createContext();
const initialState = { details: {} };

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return action.details;

    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
