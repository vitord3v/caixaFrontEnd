import { useContext, useState } from "react";
import { styled } from "styled-components";
import { bingoColor, bingoColorDisabled } from "../colors/colors";
import BingoContext from "../Context/BingoContext";

export default function Cell({name})
{
    const [selected,setSelected] = useState(false);
    const {selectedNumbers,setSelectedNumbers} = useContext(BingoContext);

    function changeState()
    {
        if(!selected && selectedNumbers.length < 10)
        {
            setSelectedNumbers([...selectedNumbers,name]);
            setSelected(true);
        }
        else{
            setSelectedNumbers(selectedNumbers.filter(n => n !== name));
            setSelected(false);
        }

        console.log(selectedNumbers);
    }

    return(
        <SCell selected_amount={selectedNumbers.length} is_selected={selected.toString()} onClick={changeState}>
            <p className="inner">{name}</p>
        </SCell>
    );
}

// ${(props) => !props.is_selected ? 'white' : Number(props.selected_amount) < 10 && props.is_selected ? bingoColor : 'yellow'};
const SCell = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.is_selected == 'true' ? bingoColor : Number(props.selected_amount) < 10 ? 'white' : bingoColorDisabled };
  display: flex;
  justify-content: center; 
  align-items: center;
  border: 0;
  cursor:  ${(props) => props.is_selected == 'true' ? 'pointer' : Number(props.selected_amount) < 10 ? 'pointer' : 'not-allowed' };;
  
  .inner{
    color: ${(props) => props.is_selected == 'false' ? 'black' : 'white'};;
    font-size: 19px;
    font-weight: bold;
    font-family: 'Poppins';
    user-select: none;
  }
`;