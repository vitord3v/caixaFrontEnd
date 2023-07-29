import Image from "next/image";
import styled from "styled-components";
import SoccerCard from "../components/SoccerCard";
import { useContext, useEffect, useRef, useState } from "react";
import BingoContext from "../Context/BingoContext";
import { finishColorDisabled } from "../colors/colors";
// import ConfettiExplosion from 'react-confetti-explosion';


export default function openChest () {

    const selectRef = useRef();
    const [selectedCards,setSelectedCards] = useState([0,0]);
    const [openChest,setOpenChest] = useState(false);
    const [slTeam,setSlTeam] = useState("Selecione seu time");
    const [openingChest,setOpeningChest] = useState(false);
    const {selectedNumbers,setSelectedNumbers,games,setGames,playedGames,setPlayedGames,setSelectedTeam,selectedTeam} = useContext(BingoContext);
    const cards = [
        {
            name:'Silêncio no maraca',
            source:'/soccer-player.svg',
            alt:''
        },
        {
            name:'Dinamitando',
            source:'/dinamite.png',
            alt:''
        },
        {
            name:'Silêncio no maraca',
            source:'/soccer-player.svg',
            alt:''
        },
        {
            name:'Silêncio no maraca',
            source:'/soccer-player.svg',
            alt:''
        },
    ];


    function open()
    {
        if(openChest) return;
        generateRewards();
        setOpenChest(true);
    }

    function generateRewards()
    { 
        setPlayedGames(playedGames - 10);
        const indice1 = Math.floor(Math.random() * cards.length);
        const indice2 = Math.floor(Math.random() * cards.length);
        setSelectedCards([indice1,indice2]);
    }

    return (
        <>
            <Container>
                <div className="main">
                    <ChooseTeamContainer>
                        <p>1º</p>
                        <p>Escolha seu clube</p>
                        <label className='choose-your-team'>
                            
                            </label>
                            <select id="times" ref={selectRef} onChange={(e)=> setSlTeam(e.target.value)}>
                            <option value="Selecione seu time">Selecione seu time</option>
                            <option value="Flamengo">Flamengo</option>
                            <option value="Palmeiras">Palmeiras</option>
                            <option value="Santos">Santos</option>
                            <option value="São Paulo">São Paulo</option>
                            <option value="Vasco">Vasco</option>
                            <option value="Fluminense">Fluminense</option>
                            <option value="Botafogo">Botafogo</option>
                            <option value="Grêmio">Grêmio</option>
                            <option value="Internacional">Internacional</option>
                            <option value="Corinthians">Corinthians</option>
                            <option value="Atlético Mineiro">Atlético Mineiro</option>
                            <option value="Bahia">Bahia</option>
                            <option value="Ceará">Ceará</option>
                            <option value="Coritiba">Coritiba</option>
                            <option value="Athletico Paranaense">Athletico Paranaense</option>
                            <option value="Red Bull Bragantino">Red Bull Bragantino</option>
                            <option value="Sport Recife">Sport Recife</option>
                            <option value="Fortaleza">Fortaleza</option>
                            <option value="Goiás">Goiás</option>
                            <option value="Ceará SC">Ceará SC</option>
                            </select>
                    </ChooseTeamContainer>
                    <ChestContainer>
                        <p>2º</p>
                        <p> Abra o seu Baú </p>
                        <Image src='/chest.png' width='362' height='266' alt="Baú dourado" />
                        <button disabled={slTeam == "Selecione seu time" ? true : playedGames >= 10 && !openingChest ? false : true} onClick={open}>
                            { slTeam == "Selecione seu time" ? "Selecione seu time" : playedGames >= 10 && !openingChest ? "Abrir" : "Nenhum baú a abrir"}
                            
                        </button>
                    </ChestContainer>
                </div>
                <div className="cards">
                {/* { openChest && <ConfettiExplosion/>} */}
                <SoccerCard alt_text={cards[selectedCards[1]].alt} turned={openChest == true ? false : true} name={cards[selectedCards[0]].name} source={cards[selectedCards[1]].source} />
                <SoccerCard alt_text={cards[selectedCards[1]].alt} turned={openChest == true ? false : true} name={cards[selectedCards[1]].name} source={cards[selectedCards[1]].source}/>
                </div>
            </Container>
        </>
        
    )
}


const Container = styled.div`
    display: flex;
    margin-left:200px;
    font-size: 2rem;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    select{
      font-family: 'Poppins';
      width: 235px;
      height: 42px;
      color:white;
      border-radius: 40px;
      border: 2px solid #B4B4B4;
      background: rgba(217, 217, 217, 0.00);
      padding:10px;
      text-align: center;
      
      cursor: pointer;
      option{
        cursor: pointer;
      }

      *{
        color:black;
        font-family: 'Poppins';
      }
    }

    .cards{
        display: flex;
        gap: 20px;
    }

    .main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    

    button {
        background: transparent;
        border: 2px solid white;
        font-family: 'Poppins';
        &:disabled{
            cursor:not-allowed;
            background-color: ${finishColorDisabled};
        }
    }
`

const ChooseTeamContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    font-family: 'Poppins';
    
    p{
        color: white;
    }
    button {
        background: transparent;
        border: 2px solid white;
    }
`

const ChestContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
     
     P {
        margin-bottom: 1rem;
        font-family: 'Poppins';
        color: white;
     }

     button {
        background-color:#f09000;
        border: 0;
     }
`