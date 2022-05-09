import Link from "next/link";

import UsersProvider from "../context/user/UsersContext";
import useUsersContext from "../hooks/user/useUsersContext";

export default function IndexPage() {
  console.log("==========>>>>>>>>", typeof useUsersContext);
  const [store, dispatch] = useUsersContext();
  return (
    <UsersProvider>
      <div>
        Hello World.{" "}
        <Link href="/about">
          <a>About</a>
        </Link>
        <br />
        <input type="text" name="name" id="name" />
        <br />
        <input type="text" name="email" id="email" />
        <br />
        <button
          onClick={() => {
            dispatch({
              type: "SET_USERS",
              payload: {
                name: document.getElementById("name").value,
                email: document.getElementeById("email").value
              }
            });
          }}
        >
          salvar
        </button>
        <ul>
          {store.map(({ name, email }) => (
            <li>
              {name} - {email}
            </li>
          ))}
        </ul>
      </div>
    </UsersProvider>
  );
}
