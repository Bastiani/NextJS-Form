import * as React from "react";

import useContextReducer from "./hooks/useContextReducer";

export const Context = React.createContext([]);

const ContextProvider = ({ children }) => {
  return (
    <Context.Provider value={useContextReducer()}>{children}</Context.Provider>
  );
};

export default ContextProvider;
