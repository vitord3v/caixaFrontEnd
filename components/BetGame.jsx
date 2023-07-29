import { useContext } from 'react';
import styled from 'styled-components'
import BingoContext from '../Context/BingoContext';
import { contrastColor, contrastColor2 } from '../colors/colors';
import ColorsContext from '../Context/ColorsContext';

const BetContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  position: absolute;
  top: -25px;
  left:0px;

  @media (max-width: 768px) {
       width: calc(100% - 20px);

       
    }

    p {
        color:${contrastColor};
        font-family: 'Poppins';
        font-size: 23px;
    }

    button{
        margin-left: 35px;
        width: 220px;
        height: 42px;
        border-radius: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${contrastColor};
        border: 2px solid ${contrastColor} !important;
        padding: 0;
        transition: all 200ms;

        @media (max-width: 768px) {
            padding: 1rem;
            font-size: 14px;

        }

        &:disabled{
        color: ${contrastColor2};
      }

        &:enabled{
          &:hover{
          color: ${contrastColor2};
        }
        }
    }
`
function BetGame () {
    const {selectedNumbers,setSelectedNumbers,games,setGames,playedGames,setPlayedGames} = useContext(BingoContext);
    const {backgroundColor,textColor,bingoColor,finishColorDisabled,bingoColorDisabled,contrastColor,darkColor,sidebarColor,contrastColor2} = useContext(ColorsContext);
    function randomize()
    {
        let numbersArray = [];

        while (numbersArray.length < 10) {
            let randomNumber = Math.floor(Math.random() * (80 - 0 + 1)) + 0;

            if (!numbersArray.includes(randomNumber)) {
                numbersArray.push(randomNumber);
            }
        }
        setSelectedNumbers(numbersArray);
    }

    return (
        <BetContainer>
            <p>Sorteio: 3090</p>
            <p>Data: 27/08</p>   
            <button onClick={randomize}>Escolher aleatório</button>   
        </BetContainer>
    )
}

export default BetGame;