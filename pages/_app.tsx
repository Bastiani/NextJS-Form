import { ChakraProvider } from "@chakra-ui/react";

import ContextProvider from "../context/ContextProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
