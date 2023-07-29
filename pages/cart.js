import styled from 'styled-components'
import SoccerCard from '../components/SoccerCard'
import { useContext, useRef, useState } from 'react';
import BingoContext from '../Context/BingoContext';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   width: 100%;
   margin-left: 150px;
   align-items: center;
   justify-content: center;
`



export default function Cart() {
    const {selectedNumbers,setSelectedNumbers,games,setGames,playedGames,setPlayedGames,setSelectedTeam,selectedTeam} = useContext(BingoContext);

    function finish()
    {
        setGames([]);
        setSelectedNumbers([]);
        setPlayedGames(playedGames + games.length);
    }
    return (
        <Container>
            <GameHeader><h1>Jogo</h1><h2>Time</h2></GameHeader>
            {games.map(game =>{
                const teamName = game[game.length];
                console.log(teamName);
                game.pop();
                return(
                    <Game>{game.map(n => {return n.toString() + ' - '})}{teamName}</Game>
                );
            })}
        </Container>
    )
}

const Game = styled.div`
    width: 100%;
    max-width: 680px;
    border: 1px solid #FFF;
    border-radius: 20px;
    color: white;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    font-family: 'Poppins';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
`;

const GameHeader = styled.div`
    width: 100%;
    max-width: 680px;
    border-radius: 20px;
    color: white;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;

    *{
        color:white;
        font-family: 'Poppins';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    }
`;