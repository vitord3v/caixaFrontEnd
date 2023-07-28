import styled from 'styled-components'
import Cell from './Cell';
import BetGame from './BetGame';
import { bingoColor, finishColorDisabled } from '../colors/colors';
import { useContext, useEffect, useRef } from 'react';
import BingoContext from '../Context/BingoContext';

export default function Bingo() {
  const cells = Array.from({ length: 80 }, (_, i) => i + 1);
  const selectRef = useRef();
  const {selectedNumbers,setSelectedNumbers,games,setGames,playedGames,setPlayedGames,setSelectedTeam,selectedTeam} = useContext(BingoContext);
  function bet()
  {
    setGames([...games,[...selectedNumbers]])
    setSelectedNumbers([]);
  }

  function finish()
  {
    setGames([]);
    setSelectedNumbers([]);
    setPlayedGames(playedGames + games.length);
  }

  return (
    <MainContainer>
      <Container len ={selectedNumbers.length} team={selectedTeam}>
        <BetGame />
        <Grid>
          {cells.map((cell) => (
            <Cell name={cell} key={cell}></Cell>
          ))}

        </Grid>
        <div className='main-container'>
          <form>
            <label className='choose-your-team'>
              Escolha seu clube
            </label>
            <select id="times" ref={selectRef} onChange={(e)=> setSelectedTeam(e.target.value)}>
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
          </form>
          <div className='actions'>
            <div className='btns'>
              <button title={selectedTeam == 'Selecione seu time' ? 'Selecione seu time' : 'Próximo jogo'} onClick={bet} disabled={selectedNumbers.length == 10 && selectedTeam !== "Selecione seu time" ? false : true} className='next'>Próximo jogo</button>
              <button disabled={games.length >= 9 ? false : true} onClick={finish} className='finish'>Finalizar</button>
            </div>
            <div className='values'>
              <h1>Valor aposta: <span>R$ 3,50</span></h1>
              <h1>Carrinho: <span>R$ {(games.length * 3.50).toFixed(2).toString().replace('.',',')}</span></h1>
            </div>
          </div>
        </div>
      </Container>
    </MainContainer>

  );
}

const Grid = styled.div`
  margin-top: 2rem;
  max-width: 590px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 10px;
  box-sizing: border-box;
`;


const Container = styled.div`
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content:center;
    position: relative;

    .main-container{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 130px;
    }
    
    
    .choose-your-team{
      margin-bottom: 1rem;
      margin-left: 10px;
      font-family: 'Poppins';
    }

    label{
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        color: white;
    }

    button {
      background-color: transparent;
      border: 4px solid white;
      font-family: 'Poppins';

      &:disabled{
        cursor: not-allowed;
      }
    }

    .actions{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 20px;
      .btns{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
      }
      .values{
        display: flex;
        font-family: 'Poppins';
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
       
        *{
          color: white;
          font-size: 20px;
          font-weight: 400;
        }
        span{
          font-weight: 300;
        }
      }
      button{
        width: 140px;
        height: 42px;
        border-radius: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        font-size: 16px;
        transition: all 200ms;

        &:disabled{
        color: lightgray;
      }

        &:enabled{
          &:hover{
          color: lightgray;
        }
        }
      }

      .finish{
        border: 2px solid #B4B4B4;
      }

      .next{
        background-color: ${bingoColor};
        &:disabled{
          background-color: ${finishColorDisabled};
        }
      }
    }

    select{
      font-family: 'Poppins';
      width: 235px;
      height: 42px;
      color:white;
      border-radius: 40px;
      border: ${(props) => props.len == 10 && props.team == "Selecione seu time" ? `2px solid ${bingoColor}` : "2px solid #B4B4B4"};
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

`;

const MainContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`;