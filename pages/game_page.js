import Image from "next/image";
import { styled } from 'styled-components'
import OpenChest from "../components/OpenChestContainer";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
    color: black;

    div {
        p {
            color: white;
        }
    }

`

const BetContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
        margin-bottom: 2rem;
        font-size: 32px;
    }

    p {
        font-size: 64px;
    }

    
`

const ChestContainer = styled.div`
    padding: 1rem;
    border:1px solid white;
    border-radius: 40px;
    max-width:650px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        
    }
`

export default function GamePage() {
    return(
        <>
        <Container>
            <BetContainer>
                <div>
                    <h1>Suas Apostas</h1>
                    <p>
                        0/10
                    </p>
                </div>
            </BetContainer>
            
            <ChestContainer>
                <p>
                    Faça 10 apostas no timemania e abra um baú com NFT’s exclusivos!
                </p>
                <Image src='/chest.png' width='169' height='124' alt="Baú de ouro para abrir sua caixa" />
            </ChestContainer>
            
        </Container>
        <OpenChest />
        </>
    );
}

