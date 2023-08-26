
import './App.css';
import GamePlay from './components/GamePlay';
import StartGame from './components/StartGame';
import React,{useState} from 'react';


function App() {
  const [isGame,setIsGame] = useState(false);

  const toggleGame = ()=>{
    setIsGame(prev => !prev);
  }
  return (
    <>
    {
      isGame ? <GamePlay/> : <StartGame toggle={toggleGame} />
    }
    
    </>
  );
}

export default App;

