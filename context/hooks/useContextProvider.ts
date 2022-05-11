import { useContext } from "react";

import { Context } from "../ContextProvider";

const useContextProvider = () => useContext(Context);

export default useContextProvider;
