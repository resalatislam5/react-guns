import './App.css';
import Header from './components/Header/Header';
import AllGuns from './components/AllGuns/AllGuns';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handlePlus = () =>{
    setCount(count + 1)
  }
  return (
    <div className="App">
        <Header count ={count}></Header>
        <AllGuns handlePlus ={handlePlus}></AllGuns>
    </div>
  );
}

export default App;
