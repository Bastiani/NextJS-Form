import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput
} from "@chakra-ui/react";

type Props = {
  label: string;
  id: string;
  placeholder: string;
  error?: any; //string | string[] | FormikErrors<any> | FormikErrors<any>[];
  touched?: any; //boolean | FormikTouched<any> | FormikTouched<any>[];
};

const Input: React.FC<Props> = ({
  label,
  id,
  placeholder,
  error,
  touched,
  ...props
}) => {
  return (
    <FormControl isInvalid={error && touched}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <ChakraInput id={id} placeholder={placeholder} {...props} />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default Input;
