import React from 'react';
import { ThemeProvider } from 'styled-components';
import ResetStyle from '../styles/resetStyle';
import GlobalStyle from '../styles/GlobalStyle';
import Cabecalho from "../components/Cabecalho"
import Sidebar from "../components/Sidebar"

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
    <ResetStyle />
    <GlobalStyle />
    <Cabecalho />
    <Sidebar />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
