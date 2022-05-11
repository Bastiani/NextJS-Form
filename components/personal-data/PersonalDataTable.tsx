import {
  Table,
  TableContainer,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

import useContextProvider from "../../context/hooks/useContextProvider";

const PersonalDataTable = () => {
  const [store] = useContextProvider();
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Dados pessoais</TableCaption>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Data de nascimento</Th>
            <Th isNumeric>Renda mensal</Th>
          </Tr>
        </Thead>
        <Tbody>
          {store.personalData.map((personal) => (
            <Tr key={uuidv4()}>
              <Td>{personal.name}</Td>
              <Td>{personal.birthdate}</Td>
              <Td isNumeric>{personal.monthlyIncome}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PersonalDataTable;
