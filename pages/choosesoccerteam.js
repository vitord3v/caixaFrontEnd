import styled from 'styled-components'
import SoccerCard from '../components/SoccerCard'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-left: 2rem;
    color: white;

    
        h1 {
            color: white;
            margin-bottom: 1rem;
        }

        button {
            background-color: transparent;
            border: 2px solid white;
            margin-bottom: 2rem;
        }
    
`

const SoccerCardContainer = styled.div`
    display:flex;
    gap: 2rem;
`
function chooseSoccerTeam () {
    return (
        <Container>
            <div>
                <h1>
                    Escolha seu clube
                </h1>
                <button>
                    Vasco da gama
                </button>
            </div>
            <SoccerCardContainer>
                <SoccerCard />
                <SoccerCard />
            </SoccerCardContainer>
        </Container>
    )
}

export default chooseSoccerTeam