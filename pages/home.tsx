import Link from "next/link";
import { Box, Link as ChakraLink } from "@chakra-ui/react";

import useContextProvider from "../context/hooks/useContextProvider";
import { PersonalDataTable } from "../components";

export default function Users() {
  const [store] = useContextProvider();
  console.log("======= ", store);
  return (
    <Box p="1rem">
      <br />
      <Link href="/checkout/personal-data/">
        <ChakraLink color="teal.500" fontSize="xl">
          Dados pessoais
        </ChakraLink>
      </Link>
      <br />
      <PersonalDataTable />
      <br />
    </Box>
  );
}
