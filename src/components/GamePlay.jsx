import React,{useState} from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RollDice from './RollDice';
import { Button, OutlineButton } from '../styled/Button';
import Rules from './Rules';

const GamePlay = () => {
  const[score,setScore] = useState(0);

  const[selected,setSelected] = useState();

  const[currentDice,setCurrentDice] = useState(1);

  const[error,setError] = useState('')

  const[rules,setRules] = useState(false);

  const generateRandom = (min,max)=>{
    return Math.floor(Math.random() * (max - min) + min);
}

const rollDice = ()=>{

  if(!selected){
    setError('you have not selected any number');
    return;
  }
  

  const randomNumber =   generateRandom(1,7);
   setCurrentDice((prev) => randomNumber)

  

  if(selected === randomNumber){
    setScore(prev => prev + randomNumber)
  }
  else{
    setScore(prev => prev - 2)
  }
  setSelected(undefined)
}

  const resetScore = ()=>{
    setScore(0);
  }
  return (
    <MainContainer>
        <div className='top_section'> 
        <TotalScore score={score}/>
        <NumberSelector selected={selected} setSelected={setSelected} error={error} setError={setError}/>
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice}/>
        <div className='btns'>
          <OutlineButton onClick={resetScore}>Reset</OutlineButton>
          <Button onClick={()=>setRules((prev)=>!prev )}>{rules ? "hide" : "show"} Rules</Button>
        </div>
        {rules && <Rules/>}
    </MainContainer>
  )
}


export default GamePlay;

const MainContainer = styled.main`
   padding-top:70px;

   .top_section{
    display:flex;
    justify-content:space-between;
    align-items:end;
   }

   .btns{
    margin-top:40px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:15px;
    margin-right:285px;
   }
`;