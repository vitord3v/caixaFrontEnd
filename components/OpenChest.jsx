import styled from 'styled-components'
import { backgroundColor } from '../colors/colors';

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
    return (
        <OpenChestContainer>
            <p>Você tem 1 baú </p>
            <button>Abrir</button>
        </OpenChestContainer>
    )
} 

export default OpenChest;
