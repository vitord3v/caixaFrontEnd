import SoccerCard from "../components/SoccerCard";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 2rem;
    margin-left: 300px;

    h1 {
        color: white;
    }

`

function yourCollection () {
    return ( 
        <>
        <Container>
            <h1> Sua Coleção </h1>
            
                <SoccerCard />
                <SoccerCard />
                <SoccerCard />
            </Container>
                
        </>
    )
}

export default yourCollection;