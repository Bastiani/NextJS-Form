import * as React from "react";

import useUsers from "../../hooks/user/useUsers";

export const UsersContext = React.createContext([]);

const UsersProvider = ({ children }) => {
  return (
    <UsersContext.Provider value={useUsers()}>{children}</UsersContext.Provider>
  );
};

export default UsersProvider;
