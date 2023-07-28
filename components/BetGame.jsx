import styled from 'styled-components'

const BetContainer = styled.div`
    display: flex;

    p {
        color:white;
        margin-left: 180px;
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