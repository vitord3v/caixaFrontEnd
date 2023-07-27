import { styled } from "styled-components";

export default function GamePage()
{
    return(
        <PageContainer>
            <div className="your-bets">
                <h1>Suas Apostas</h1>
                <h2>
                    0/10
                </h2>
            </div>
            <div className="tooltip">
                <h1>
                    Faça 10 apostas no timemania e abra um baú com NFT’s exclusivos!
                </h1>
                <img src="" alt="Baú de ouro para abrir sua caixa" />
            </div>
            
        </PageContainer>
    );
}

const PageContainer = styled.main`



`;