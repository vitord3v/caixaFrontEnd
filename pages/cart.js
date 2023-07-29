import styled from 'styled-components'
import SoccerCard from '../components/SoccerCard'
import { useContext, useRef, useState } from 'react';
import BingoContext from '../Context/BingoContext';
import { backgroundColor, bingoColor, contrastColor, contrastColor2, darkColor } from '../colors/colors';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   width: 100%;
   align-items: center;
   justify-content: center;
   margin-top: 150px;
   margin-bottom:100px;

   .nogames{
    font-family: 'Poppins';
    font-size: 20px;
    position: fixed;
    left: 50%;
    top: 50%;
    color: ${contrastColor};
    white-space: nowrap !important;
    transform: translate(-50%,-50%);
   }

   .finish{
    transition: all 200ms;
    border: 1px solid rgba(0,0,0,0);
        color: black ;
        max-width: 722px;
        background-color: ${bingoColor};
        &:hover{
            border: 1px solid ${bingoColor};
            background-color: ${contrastColor};
        }
    }
`




export default function Cart() {
    const { selectedNumbers, setSelectedNumbers, games, setGames, playedGames, setPlayedGames, setSelectedTeam, selectedTeam } = useContext(BingoContext);
    const router = useRouter();
    function items() {
        let arr = [];

        for (let index = 0; index < games.length ; index++) {
            console.log(games[index]);
            arr.push((
                <Game key={index}>
                    <p>{games[index].slice(0, 10).join(' - ')}   
                    </p>
                    <p>{games[index][10]}</p>
                </Game>
            ));
        }

        return arr;
    }
    function finish() {
        Swal.fire({
            title: `<span style="font-family: 'Poppins', sans-serif;font-size: 20px;color:${contrastColor}">Confirmar o envio destes ${games.length} jogos?</span>`,
            showCancelButton: true,
            confirmButtonColor: `${contrastColor2}`,
            cancelButtonColor: `${bingoColor}`,
            confirmButtonText: 'Sim',
            color:contrastColor,
            buttonsStyling:true,
            cancelButtonText: 'Cancelar',
            background:backgroundColor,
            width: 300,
            heightAuto: false,
        }).then((result) => {
            if(result.isConfirmed)
            {
                setGames([]);
                setSelectedTeam("Selecione seu time")
                setSelectedNumbers([]);
                setPlayedGames(playedGames + games.length);
                toast.info(`Jogos feitos com sucesso!`, {
                    position: "bottom-left",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                });
                router.push("/");
            }

        });
       
    }
    return (
        <Container>
            { games && games.length > 0 && <GameHeader><h1>Jogo</h1><h2>Time</h2></GameHeader>}
            {items()}
            {games && games.length > 0 &&  <button onClick={finish} className='finish'>Apostar nestes números</button>}
            {!games || games.length == 0 && <h1 className='nogames'>Não há nenhum jogo</h1>}
        </Container>
    )
}


const Game = styled.div`
    overflow: hidden;
    width: 100%;
    max-width: 680px;
    border: 1px solid #FFF;
    border-radius: 20px;
    color: ${contrastColor};
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    font-family: 'Poppins';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    padding-right: 20px;
    p{
        color: ${contrastColor};
    }
`;

const GameHeader = styled.div`
    overflow: hidden;
    width: 100%;
    max-width: 680px;
    border-radius: 20px;
    color: ${contrastColor};
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;

   

    *{
        color:${contrastColor};
        font-family: 'Poppins';
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
    }
`;