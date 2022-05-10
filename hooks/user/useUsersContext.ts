import { useContext } from "react";

import { UsersContext } from "../../context/user/UsersContext";

const useUsersContext = () => useContext(UsersContext);

export default useUsersContext;
