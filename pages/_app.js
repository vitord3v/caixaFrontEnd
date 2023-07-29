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
import ColorsContext from '../Context/ColorsContext';

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
  const [backgroundColor, setBackgroundColor] = useState("#131129");
  const [textColor, setTextColor] = useState("white");
  const [bingoColor, setBingoColor] = useState("#F09000");
  const [finishColorDisabled, setFinishColorDisabled] = useState("#975b02");
  const [bingoColorDisabled, setBingoColorDisabled] = useState("#858585");
  const [contrastColor, setContrastColor] = useState("#ffffff");
  const [darkColor, setDarkColor] = useState("#00000");
  const [sidebarColor, setSidebarColor] = useState("#1D1932");
  const [contrastColor2, setContrastColor2] = useState("#d4d4d4");

  const handleBackgroundColorChange = (newColor) => setBackgroundColor(newColor);
  const handleTextColorChange = (newColor) => setTextColor(newColor);
  const handleBingoColorChange = (newColor) => setBingoColor(newColor);
  const handleFinishColorDisabledChange = (newColor) => setFinishColorDisabled(newColor);
  const handleBingoColorDisabledChange = (newColor) => setBingoColorDisabled(newColor);
  const handleContrastColorChange = (newColor) => setContrastColor(newColor);
  const handleDarkColorChange = (newColor) => setDarkColor(newColor);
  const handleSidebarColorChange = (newColor) => setSidebarColor(newColor);
  const handleContrastColor2Change = (newColor) => setContrastColor2(newColor);

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
    <ColorsContext.Provider value={{
      backgroundColor,
      textColor,
      bingoColor,
      finishColorDisabled,
      bingoColorDisabled,
      contrastColor,
      darkColor,
      sidebarColor,
      contrastColor2,
      handleBackgroundColorChange,
      handleTextColorChange,
      handleBingoColorChange,
      handleFinishColorDisabledChange,
      handleBingoColorDisabledChange,
      handleContrastColorChange,
      handleDarkColorChange,
      handleSidebarColorChange,
      handleContrastColor2Change,
    }}>
    <LoginContext.Provider value={{user,setUser, isLogged, setToken, token}}>
      <BingoContext.Provider value={{ selectedNumbers, setSelectedNumbers, games, setGames, playedGames, setPlayedGames, selectedTeam, setSelectedTeam }}>
        <ToastContainer/>
        <ResetStyle back={backgroundColor} />
        <GlobalStyle />
        <Cabecalho />
        <Sidebar />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </BingoContext.Provider>
    </LoginContext.Provider>
    </ColorsContext.Provider>
  );
}
