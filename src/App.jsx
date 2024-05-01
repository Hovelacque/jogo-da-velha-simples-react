import Velha from './components/Velha'
import './App.css';
import { useState } from 'react';

function App() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="containerGlobal">
      <div className="gameGlobal">
        {Array.from({ length: 9 }).map((_, index) =>
          <Velha key={index} current={current == index} change={setCurrent}/>
        )}
      </div>
    </div>
  )
}

export default App
