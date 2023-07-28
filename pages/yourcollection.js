import SoccerCard from "../components/SoccerCard";
import styled from "styled-components";

const Container = styled.div`
    display: flex;

`

function yourCollection () {
    return ( 
        <>
            <h1> Sua Coleção </h1>
            <Container>
                <SoccerCard />
                <SoccerCard />
                <SoccerCard />
            </Container>
                
        </>
    )
}

export default yourCollection;