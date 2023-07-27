import { styled } from "styled-components";
import { textColor } from "../colors/colors";
import chest from '../img/chest.png';

export default function GamePage()
{
    return(
        <PageContainer className="sajddhaksjdh">
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
                <img src={chest} alt="Baú de ouro para abrir sua caixa" />
            </div>
        </PageContainer>
    );
}



const PageContainer = styled.main`
    .your-bets{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        h1{
            color: ${textColor};
            font-family: Poppins;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
        h2{
            color: ${textColor};
            font-family: Poppins;
            font-size: 64px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
        }
    }

    .tooltip{
        display: flex;
        gap:30px;
    }
`;