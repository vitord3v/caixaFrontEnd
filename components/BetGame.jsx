import styled from 'styled-components'

const BetContainer = styled.div`
  display: flex;
  gap: 30px;
  position: absolute;
  top: -10px;
  left:200px;

    p {
        color:white;
        font-family: 'Poppins';
        font-size: 23px;
    }
`
function BetGame () {
    return (
        <BetContainer>
            <p>Sorteio: 3090</p>
            <p>Data: 27/08</p>      
        </BetContainer>
    )
}

export default BetGame;