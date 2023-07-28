import Image from 'next/image';
import styled from 'styled-components'

const Card = styled.div`
    max-width: 216px;
    max-height: 240px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button {
        color: white;
        background-color: transparent;
        border: 1px solid white;
    }
`

function SoccerCard () {
    return (
        <Card>
            <Image src='/soccer-player.svg' width='216' height='240' />
            <button>
                Obter
            </button>
        </Card>
    )
}

export default SoccerCard;