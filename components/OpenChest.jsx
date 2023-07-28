import styled from 'styled-components'
import { backgroundColor } from '../colors/colors';
import { useContext } from 'react';
import BingoContext from '../Context/BingoContext';
import { useRouter } from 'next/router';

const OpenChestContainer = styled.div`
    bottom: -80px;
    right: 0;
    display: flex;
    align-items: center;
    font-family: 'Poppins';
    gap: 1rem;
    position: absolute;

    p {
        color: white;
        font-family: 'Poppins';
    }
    
    button {
        border:0;
        width: 117px;
        height: 39px;
        border-radius: 30px;
        font-weight: 500;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: gray;
        font-family: 'Poppins';
        transition: all 200ms;
        &:hover{
            background-color: lightgray;
            color: ${backgroundColor};
        }
    }
`
function OpenChest () {
    const {selectedNumbers,setSelectedNumbers,games,setGames,playedGames,setPlayedGames} = useContext(BingoContext);
    const router = useRouter();
   if(playedGames >= 10)
   {
        return (
            <OpenChestContainer>
                <p>Você tem {playedGames < 10 ? 0 : Math.floor( playedGames / 10 )} baú(s)</p>
                <button onClick={()=> router.push('/openchest')}>Abrir</button>
            </OpenChestContainer>
        )
   }
} 

export default OpenChest;
