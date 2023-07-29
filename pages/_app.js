import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import ResetStyle from '../styles/resetStyle';
import GlobalStyle from '../styles/GlobalStyle';
import Cabecalho from "../components/Cabecalho"
import Sidebar from "../components/Sidebar"
import BingoContext from '../Context/BingoContext';
import { useState } from "react";
import  LoginContext  from '../Context/LoginContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [user, setUser] = useState(undefined);
  const [token, setToken] = useState("");

  useEffect(()=>{

    if(localStorage.getItem("user"))
    {
      setUser({nome:localStorage.getItem("user")});
    }
  },[])
 

  const isLogged = () => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
    }
  };

  return (
    <LoginContext.Provider value={{user,setUser, isLogged, setToken, token}}>
      <BingoContext.Provider value={{ selectedNumbers, setSelectedNumbers, games, setGames, playedGames, setPlayedGames, selectedTeam, setSelectedTeam }}>
        <ToastContainer/>
        <ResetStyle />
        <GlobalStyle />
        <Cabecalho />
        <Sidebar />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </BingoContext.Provider>
    </LoginContext.Provider>
  );
}
