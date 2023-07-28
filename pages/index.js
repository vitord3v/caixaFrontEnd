import Image from "next/image";
import { styled } from 'styled-components'
import OpenChest from "../components/OpenChest";
import Bingo from "../components/Bingo";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 100px;
    color: white;

`

const BetContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
        margin-bottom: 2rem;
        font-size: 32px;
        color:white;
        font-family: 'Poppins';
    }

    p {
        font-size: 64px;
        font-family: 'Poppins';
    }

    .inner2{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    
`

const ChestContainer = styled.div`
    padding: 1rem;
    border:1px solid white;
    border-radius: 40px;
    max-width:650px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-family: 'Poppins';
        font-size: 14px;
    }

    h1{
        font-family: 'Poppins';
    }
    
`

export default function Home() {
    return(
        <>
        <Container>
            <BetContainer>
                <div className="inner2">
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
                <OpenChest />
            </ChestContainer>
            
        </Container>

        
        <Bingo/>
        </>
    );
}

