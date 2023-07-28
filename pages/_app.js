import React from 'react';
import { ThemeProvider } from 'styled-components';
import ResetStyle from '../styles/resetStyle';
import GlobalStyle from '../styles/GlobalStyle';
import Cabecalho from "../components/Cabecalho"
import Sidebar from "../components/Sidebar"
import BingoContext from '../Context/BingoContext';
import { useState } from "react";

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  const [selectedNumbers,setSelectedNumbers] = useState([]);
  return (
    <BingoContext.Provider value={{selectedNumbers,setSelectedNumbers}}>
    <ResetStyle />
    <GlobalStyle />
    <Cabecalho />
    <Sidebar />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </BingoContext.Provider>
  );
}
