export default function NumberComponent({number})
{
    return (

        <SCNComponent>
            <h1>{number}</h1>
        </SCNComponent>

    );
}

const SCNComponent = styled.div`
    background-color: white;
    color: black;
    width: 47px;
    height: 47px;
    border-radius: 50%;
`;