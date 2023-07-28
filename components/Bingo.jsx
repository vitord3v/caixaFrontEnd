import styled from 'styled-components'
import Cell from './Cell';
import BetGame from './BetGame';


const Grid = styled.div`
  margin-top: 2rem;
  margin-left: 200px;
  max-width: 700px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 10px;
  box-sizing: border-box;
`;


const Container = styled.div`
    display: flex;
    gap: 10rem;
    align-items: center;
    justify-content:center;
    position: relative;
    
    
    .choose-your-team{
      margin-bottom: 1rem;
      margin-left: 10px;
      font-family: 'Poppins';
    }

    div {
      
    }

    button {
      background-color: transparent;
      border: 4px solid white;
      font-family: 'Poppins';
    }

`;

const MainContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`;


export default function Bingo() {
    const cells = Array.from({ length: 80 }, (_, i) => i + 1);
    return (
      <MainContainer>
      
      <Container>
      <BetGame />
            <Grid>
              {cells.map((cell) => (
                <Cell name={cell} key={cell}></Cell>
              ))}
              
            </Grid>
            <form>
              <label className='choose-your-team'>
                  Escolha seu clube
              </label>
                <select name="" id="">
                  <option value="Vasco de gama">Vasco de gama</option>
                </select>
            </form>
      </Container>
      </MainContainer>
  
    );
  }