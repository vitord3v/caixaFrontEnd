import Image from "next/image";
import styled from "styled-components";
import SoccerCard from "../components/SoccerCard";

const Container = styled.div`
    display: flex;
    margin-left:200px;
    font-size: 2rem;
    

    button {
        background: transparent;
        border: 2px solid white;
    }
`

const ChooseTeamContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    

    button {
        background: transparent;
        border: 2px solid white;
    }
`

const ChestContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
     
     P {
        margin-bottom: 1rem;
     }

     button {
        background-color:#f09000;
        border: 0;
     }
`

function openChest () {
    return (
        <>
            <Container>
                <div>
                    <ChooseTeamContainer>
                        <p>
                            1
                        </p>
                        <p>Escolha seu time</p>
                        <button>
                        Vasco da Game
                        </button>
                    </ChooseTeamContainer>
                    <ChestContainer>
                        <p> 2 </p>
                        <p> Abra o seu Bau </p>
                        <Image src='/chest.png' width='362' height='266' />
                        <button>
                            Abrir
                        </button>
                    </ChestContainer>
                </div>
                <SoccerCard />
            </Container>
        </>
        
    )
}

export default openChest;