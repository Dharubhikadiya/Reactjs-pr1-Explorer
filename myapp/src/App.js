import logo from './logo.svg';
import './App.css';
import Projectclass from './Projectclass';
import data from './Data';
import Projectfunction from './Projectfunction';
import { useState } from 'react';

function App() {
  const [no, setNo] = useState(0);

  const add = () => {
    setNo(
      no + 1
    )
  }

  const [Number, setNumber] = useState(0);

  const Add = () => {
    setNumber(
      Number + 1
    )
  }
  return (
    <>
      <Projectclass record={data} button={add} no={no}/>
      <Projectfunction record={data} btn={Add} Number={Number}/>
    </>
  );
}

export default App;
