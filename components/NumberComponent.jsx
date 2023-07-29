import { useContext } from "react";
import ColorsContext from "../Context/ColorsContext";
import { darkColor } from "../colors/colors";

export default function NumberComponent({number})
{
    return (

        <SCNComponent>
            <h1>{number}</h1>
        </SCNComponent>

    );
}

const SCNComponent = styled.div`
background-color: ${contrastColor};
color: ${darkColor};
width: 47px;
height: 47px;
border-radius: 50%;
`;
