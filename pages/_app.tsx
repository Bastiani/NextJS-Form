import UsersProvider from "../context/user/UsersContext";

function MyApp({ Component, pageProps }) {
  return (
    <UsersProvider>
      <Component {...pageProps} />
    </UsersProvider>
  );
}

export default MyApp;
