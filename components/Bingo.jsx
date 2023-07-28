import styled from 'styled-components'

const Grid = styled.div`
  margin-top: 2rem;
  margin-left: 200px;
  max-width: 700px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 10px;
`;

const Cell = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 14px;
`;

const Container = styled.div`
    display: flex;
    gap: 10rem;
    align-items: center;
    justify-content:center;
    
    p {
      margin-bottom: 1rem;
      margin-left: 10px;
    }

    div {
      
    }

    button {
      background-color: transparent;
      border: 4px solid white;
    }

`


export default function Bingo() {
    const cells = Array.from({ length: 100 }, (_, i) => i + 1);
    return (
      <Container>
            <Grid>
              {cells.map((cell) => (
                <Cell key={cell}>{cell}</Cell>
              ))}
              
            </Grid>
            <div>
              <p>
                  Escolha seu clube
              </p>
              <button> Vasco de gama </button>
            </div>
      </Container>
    );
  }