import Image from "next/image";
import styled from 'styled-components'
import OpenChest from "../components/OpenChest";
import Bingo from "../components/Bingo";
import { useContext } from "react";
import BingoContext from "../Context/BingoContext";
import { contrastColor } from "../colors/colors";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    margin-bottom: 100px;
    color: ${contrastColor};
    margin-top: 100px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 50px;
    }
`

const BetContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
        margin-bottom: 2rem;
        font-size: 32px;
        color:${contrastColor};
        font-family: 'Poppins';
    }

    p {
        font-size: 64px;
        font-family: 'Poppins';
        color: ${contrastColor};
    }

    .inner2{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        h1{
            white-space: nowrap;
            margin-left: 20px;
        }
    }

    @media (max-width: 768px) {
        margin-top: 100px;
    }
`;

const PageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 140px;
    margin-top: 50px;
    overflow:hidden;

    @media (max-width: 768px) {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        margin-bottom: 150px;
    }
`;

const ChestContainer = styled.div`
    padding: 1rem;
    border:1px solid ${contrastColor};
    border-radius: 40px;
    max-width:650px;
    
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    p {
        font-family: 'Poppins';
        font-size: 14px;
        color: ${contrastColor};
    }

    h1{
        font-family: 'Poppins';
    }

    @media (max-width: 768px) {
        
        flex-direction: column;
        height: auto;
    }
`

export default function Home() {
    const {selectedNumbers,setSelectedNumbers,games,setGames,playedGames,setPlayedGames} = useContext(BingoContext);
    return(
        <PageContainer>
        <Container>
            <BetContainer>
                <div className="inner2">
                    <h1>Suas Apostas</h1>
                    <p>
                        {playedGames.toString()}/10
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
        </PageContainer>
    );
}
