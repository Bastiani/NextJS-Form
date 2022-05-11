import { useReducer } from "react";

export const initialState = {
  users: [],
  personalData: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case "SET_PERSONALDATA":
      return {
        ...state,
        personalData: [...state.personalData, action.payload]
      };
    default:
      break;
  }
};

export default function useContextReducer() {
  const [store, dispatch] = useReducer(reducer, initialState);

  return [store, dispatch];
}
