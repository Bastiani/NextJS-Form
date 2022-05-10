import { useReducer } from "react";

export const initialState = {
  usersChooser: [
    {
      id: "1",
      name: "Rafael",
      email: "rafacdb@gmail.com",
    },
    {
      id: "2",
      name: "João",
      email: "rafacdb+test1@gmail.com",
    },
  ],
  users: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      break;
  }
};

export default function useUsers() {
  const [store, dispatch] = useReducer(reducer, initialState);

  return [store, dispatch];
}
