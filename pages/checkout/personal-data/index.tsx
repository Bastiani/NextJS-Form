import Link from "next/link";
import { Button, Box, Link as ChakraLink } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { PersonalDataTable, Input } from "../../../components";
import useContextProvider from "../../../context/hooks/useContextProvider";

const PersonalData = () => {
  const [store, dispatch] = useContextProvider();
  const { personalData } = store;
  const validate = (values) => {
    const errors = {
      name: null
    };

    if (!values.name || values.name === "") {
      console.log("==== error", values.name);
      errors.name = "Obrigatório";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: personalData[0]?.name || "",
      birthdate: personalData[0]?.birthdate || "",
      cpf: personalData[0]?.cpf || "",
      gender: personalData[0]?.gender || "",
      monthlyIncome: personalData[0]?.monthlyIncome || ""
    },
    // validate,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Obrigatório!")
        .min(4, "Maior que 4 caracteres"),
      birthdate: Yup.string().required("Obrigatório!"),
      cpf: Yup.string().required("Obrigatório!"),
      gender: Yup.string().required("Obrigatório!"),
      monthlyIncome: Yup.string().required("Obrigatório!")
    }),
    onSubmit: async (values, { setSubmitting }) => {
      dispatch({
        type: "SET_PERSONALDATA",
        payload: {
          ...values
        }
      });
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setSubmitting(false);
    }
  });
  return (
    <Box p="1rem">
      <Link href="/">
        <ChakraLink color="teal.500" fontSize="xl">
          Home
        </ChakraLink>
      </Link>
      <form onSubmit={formik.handleSubmit}>
        <Input
          error={formik.errors.name}
          touched={formik.touched.name}
          {...formik.getFieldProps("name")}
          id="name"
          placeholder="Nome"
          label="Nome"
        />
        <Input
          id="birthdate"
          placeholder="Data de nascimento"
          label="Data de nascimento"
          error={formik.errors.birthdate}
          touched={formik.touched.birthdate}
          {...formik.getFieldProps("birthdate")}
        />
        <Input
          error={formik.errors.cpf}
          touched={formik.touched.cpf}
          {...formik.getFieldProps("cpf")}
          id="cpf"
          placeholder="CPF"
          label="CPF"
        />
        <Input
          error={formik.errors.gender}
          touched={formik.touched.gender}
          {...formik.getFieldProps("gender")}
          id="gender"
          placeholder="Sexo"
          label="Sexo"
        />
        <Input
          error={formik.errors.monthlyIncome}
          touched={formik.touched.monthlyIncome}
          {...formik.getFieldProps("monthlyIncome")}
          id="monthlyIncome"
          placeholder="Renda mensal"
          label="Renda mensal"
        />

        <Button
          mt={4}
          colorScheme="teal"
          isLoading={formik.isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
      <PersonalDataTable />
    </Box>
  );
};

export default PersonalData;
