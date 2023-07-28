import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { bingoColor, bingoColorDisabled } from "../colors/colors";
import BingoContext from "../Context/BingoContext";

export default function Cell({name})
{
    const {selectedNumbers,setSelectedNumbers,setSelectedTeam,selectedTeam} = useContext(BingoContext);

  

    function changeState()
    {
        if(selectedNumbers.includes(name) == false && selectedNumbers.length < 10)
        {
            setSelectedNumbers([...selectedNumbers,name]);
        }
        else{
            setSelectedNumbers(selectedNumbers.filter(n => n !== name));
        }
    }

    return(
        <SCell selected_amount={selectedNumbers.length} is_selected={selectedNumbers.includes(name).toString()} onClick={changeState}>
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