import React from 'react';
import { ThemeProvider } from 'styled-components';
import ResetStyle from '../styles/resetStyle';
import GlobalStyle from '../styles/GlobalStyle';
import Cabecalho from "../components/Cabecalho"
import Sidebar from "../components/Sidebar"
import BingoContext from '../Context/BingoContext';
import { useState } from "react";
import { LoginProvider } from '../Context/LoginContext';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [games, setGames] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("Selecione seu time");
  const [playedGames, setPlayedGames] = useState(0);
  return (
    <LoginProvider>
      <BingoContext.Provider value={{ selectedNumbers, setSelectedNumbers, games, setGames, playedGames, setPlayedGames, selectedTeam, setSelectedTeam }}>
        <ResetStyle />
        <GlobalStyle />
        <Cabecalho />
        <Sidebar />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </BingoContext.Provider>
    </LoginProvider>
  );
}
