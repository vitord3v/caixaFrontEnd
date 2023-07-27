import styled from 'styled-components'

const OpenChestContainer = styled.div`
    margin-top: 1rem;
    margin-left: 1000px;
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
        color: white;
    }
    
    button {
        padding:0.5rem;
        border:0;
        background-color: gray;
        border-radius: 10px;
    }
`
function OpenChest () {
    return (
        <OpenChestContainer>
            <p>Você tem 1 baú </p>
            <div>
                <button>Abrir</button>
            </div>
        </OpenChestContainer>
    )
} 

export default OpenChest;
