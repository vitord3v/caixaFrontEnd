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

export default function Bingo() {
    const cells = Array.from({ length: 100 }, (_, i) => i + 1);
  
    return (
      <Grid>
        {cells.map((cell) => (
          <Cell key={cell}>{cell}</Cell>
        ))}
      </Grid>
    );
  }