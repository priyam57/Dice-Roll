import React from 'react';
import styled from 'styled-components';

const RollDice = ({currentDice,rollDice}) => {

  return (
    <DiceContainer>
        <div className='dice' onClick={rollDice}>
            <img src={`./images/dice_${currentDice}.png`} alt='dice'/>

        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    margin-top:48px;

    .dice{
        cursor:pointer;

    }

    p{
        font-size:24px;

    }
`;
