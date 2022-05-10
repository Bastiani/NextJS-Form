import Link from "next/link";
import { useRouter } from "next/router";

import useUsersContext from "../hooks/user/useUsersContext";

export default function Users() {
  const router = useRouter();
  console.log("==========>>>>>>>>", typeof useUsersContext);
  const [store, dispatch] = useUsersContext();
  console.log("======= ", store);
  return (
    <div>
      Hello World.{" "}
      <button
        onClick={() => router.push("/about", undefined, { shallow: true })}
      >
        About
      </button>
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
          console.log(
            "====== dispatch ",
            document.getElementById("name").value
          );
          dispatch({
            type: "SET_USERS",
            payload: {
              name: document.getElementById("name").value,
              email: document.getElementById("email").value,
            },
          });
        }}
      >
        salvar
      </button>
      <ul>
        {store?.users?.map(({ name, email }) => (
          <li>
            {name} - {email}
          </li>
        ))}
      </ul>
    </div>
  );
}
