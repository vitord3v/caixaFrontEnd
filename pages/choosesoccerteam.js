import styled from 'styled-components'
import SoccerCard from '../components/SoccerCard'
import { useRef, useState } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-left: 2rem;
    margin-top: 150px;
    color: white;
    select{
      font-family: 'Poppins';
      width: 235px;
      height: 42px;
      color:white;
      border-radius: 40px;
      border: 2px solid #B4B4B4;
      background: rgba(217, 217, 217, 0.00);
      padding:10px;
      text-align: center;
      
      cursor: pointer;
      option{
        cursor: pointer;
      }

      *{
        color:black;
        font-family: 'Poppins';
      }
    }
    
        h1 {
            color: white;
            margin-bottom: 1rem;
            font-family: 'Poppins';
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

    @media (max-width:1000px) {
        display: flex;
        flex-direction: column;
    }
`
export default function ChooseSoccerTeam() {
    const selectRef = useRef();
    const [slTeam,setSlTeam] = useState("Selecione seu time");
    return (
        <Container>
            <div>
                <h1>
                    Escolha seu clube
                </h1>
                <label className='choose-your-team'>
                </label>
                <select id="times" ref={selectRef} onChange={(e) => setSlTeam(e.target.value)}>
                    <option value="Selecione seu time">Selecione seu time</option>
                    <option value="Flamengo">Flamengo</option>
                    <option value="Palmeiras">Palmeiras</option>
                    <option value="Santos">Santos</option>
                    <option value="São Paulo">São Paulo</option>
                    <option value="Vasco">Vasco</option>
                    <option value="Fluminense">Fluminense</option>
                    <option value="Botafogo">Botafogo</option>
                    <option value="Grêmio">Grêmio</option>
                    <option value="Internacional">Internacional</option>
                    <option value="Corinthians">Corinthians</option>
                    <option value="Atlético Mineiro">Atlético Mineiro</option>
                    <option value="Bahia">Bahia</option>
                    <option value="Ceará">Ceará</option>
                    <option value="Coritiba">Coritiba</option>
                    <option value="Athletico Paranaense">Athletico Paranaense</option>
                    <option value="Red Bull Bragantino">Red Bull Bragantino</option>
                    <option value="Sport Recife">Sport Recife</option>
                    <option value="Fortaleza">Fortaleza</option>
                    <option value="Goiás">Goiás</option>
                    <option value="Ceará SC">Ceará SC</option>
                </select>
            </div>
            <SoccerCardContainer>
                <SoccerCard turned={false} name='Silêncio no maraca' source='/soccer-player.svg' alt_text='' />
                <SoccerCard turned={false} name='Dinamite' source='/dinamite.png' alt_text='' />
            </SoccerCardContainer>
        </Container>
    )
}