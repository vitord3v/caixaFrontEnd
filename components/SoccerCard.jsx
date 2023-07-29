import Image from 'next/image';
import styled from 'styled-components';
import back from '../img/back.png';

function SoccerCard ({name, turned,source,alt_text}) {

    return (
        <Card turned={turned.toString()}>
            <div className='front'>
                <Image src={ source ? source.toString() : '/soccer-player.svg'} width='216' height='240' alt={alt_text} />
                <p>{name}</p>
            </div>
            <div className='back'>
                <Image src={back} width='216' height='240' alt={alt_text}/>
            </div>
        </Card>
    )
}

export default SoccerCard;

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
    }

    p{
        margin-top: 10px;
        font-family: 'Poppins';
        font-size: 20px;
        color: white;
        
    }

    .front{
        border: 2px solid white;
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
            bottom: 30px;
        }
    }

    .back{
        border: 2px solid white;
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