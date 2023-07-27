import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/resetStyle";
import { Hydrate } from "next/app";

export const theme2 = {}

export default function MyApp({ Component, pageProps }) {
 
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme2}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </ThemeProvider>
    </>
  );

}
