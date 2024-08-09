import React from 'react'
import "./App.css";
import Light from './Light';
import Darks from './Darks';


function App() { 
  return (
    <div className="maincont">
    <Darks className='dark' />
    <Light className='light' />    
    </div>
  )
}

export default App
