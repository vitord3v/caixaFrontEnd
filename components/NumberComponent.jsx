import { useContext } from "react";
import ColorsContext from "../Context/ColorsContext";


export default function NumberComponent({number})
{
    const {backgroundColor,textColor,bingoColor,finishColorDisabled,bingoColorDisabled,contrastColor,darkColor,sidebarColor,contrastColor2} = useContext(ColorsContext);
    const SCNComponent = styled.div`
    background-color: ${contrastColor};
    color: ${darkColor};
    width: 47px;
    height: 47px;
    border-radius: 50%;
`;
    return (

        <SCNComponent>
            <h1>{number}</h1>
        </SCNComponent>

    );
}

