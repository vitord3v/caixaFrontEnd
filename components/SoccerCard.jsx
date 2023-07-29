import Image from 'next/image';
import styled from 'styled-components';
import back from '../img/back.png';

import { backgroundColor } from '../colors/colors';
import { contrastColor } from '../colors/colors';

function SoccerCard ({name, turned,source,alt_text,quantidade, show}) {

    return (
        <Container>
        <Card turned={turned.toString()}>
            <div className='front'>
                <Image src={ source !=='' ? source.toString() : '/placeholder.png'} width='216' height='240' alt={alt_text} />
                <p>{name}</p>
                <h2>Qtd: {quantidade}</h2>
            </div>
            <div className='back'>
                <Image src={back} width='216' height='240' alt={alt_text}/>
            </div>
        </Card>
        {show && 
        <Buttoncerto>Sacar</Buttoncerto>
        }
        </Container>
        
    )
}

export default SoccerCard;

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap: 20px;
`

const Buttoncerto = styled.button`
    width: 140px;
    height: 42px;
    border-radius: 40px;
    display: flex;
    color: white;
    border: 2px solid white !important;
    background-color:${backgroundColor};
    align-items: center;
    
    justify-content: center;
    font-size: 16px;
`

const Card = styled.div`
    max-width: 216px;
    width: 216px;
    
    box-sizing: border-box;
    align-items: center;
    border-top: 0;
    border-radius: 40px;
    position: relative;
    transition: all .5s;
    *{
        transition: all .5s;
    }
    flex-grow: 0;
    flex-shrink: 0;
    height: 320px;
    img{
        position: absolute;
        user-select: none;
        pointer-events: none;
        border-radius:40px;
    }

    p{
        margin-top: 10px;
        font-family: 'Poppins';
        font-size: 20px;
        color: ${contrastColor};
    }

    .front{
        border: 2px solid ${contrastColor};
        box-sizing: border-box;
        border-radius: 40px;
        border-top: 0;
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        width: 100%;
        height:100%;
        backface-visibility: hidden;
        transform:${(props) => props.turned == 'true' ? ' rotateY(180deg)' : 'rotateY(0deg)'};
        img{
            width: 218px;
            max-width: 218px;
            transform:${(props) => props.turned == 'true' ? ' rotateY(180deg)' : 'rotateY(0deg)'};
            backface-visibility: hidden;
        }
        p{
            transform:${(props) => props.turned == 'true' ? ' rotateY(180deg)' : 'rotateY(0deg)'};
            backface-visibility: hidden;
            position: absolute;
            bottom: 42px;
        }
        h2{
            transform:${(props) => props.turned == 'true' ? ' rotateY(180deg)' : 'rotateY(0deg)'};
            backface-visibility: hidden;
            position: absolute;
            bottom: 18px;
            color:#858585;
            font-family: 'Poppins';
        }
    }

    .back{
        border: 2px solid ${contrastColor};
        box-sizing: border-box;
        border-radius: 40px;
        transform:${(props) => props.turned == 'false' ? ' rotateY(180deg)' : 'rotateY(0deg)'};
        backface-visibility: hidden;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        width: 100%;
        height:100%;
        
        img{
            width: 88px;
            height: 88px;
            backface-visibility: hidden;
            transform:${(props) => props.turned == 'false' ? ' rotateY(180deg)' : 'rotateY(0deg)'};
        }
    }

`