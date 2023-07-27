import GlobalStyle from "../styles/resetStyle";

function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <GlobalStyle/>
      <Component {...pageProps} />
      </>
  );

}
