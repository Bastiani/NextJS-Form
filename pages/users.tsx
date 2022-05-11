import Link from "next/link";
import {
  Input,
  Button,
  Divider,
  Box,
  Link as ChakraLink
} from "@chakra-ui/react";

import useContextProvider from "../context/hooks/useContextProvider";

export default function Users() {
  const [store, dispatch] = useContextProvider();
  console.log("======= ", store);
  return (
    <Box p="1rem">
      <Link href="/checkout/personal-data/">
        <ChakraLink color="teal.500">Dados pessoais</ChakraLink>
      </Link>
      <Divider />
      <br />
      <Input type="text" name="name" id="name" />
      <br />
      <Input type="text" name="email" id="email" />
      <br />
      <Button
        onClick={() => {
          console.log(
            "====== dispatch ",
            document.getElementById("name").value
          );
          dispatch({
            type: "SET_USERS",
            payload: {
              name: document.getElementById("name").value,
              email: document.getElementById("email").value
            }
          });
        }}
      >
        salvar
      </Button>
      <ul>
        {store?.users?.map(({ name, email }) => (
          <li>
            {name} - {email}
          </li>
        ))}
      </ul>
    </Box>
  );
}
