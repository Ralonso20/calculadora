import './App.css';
import calculatorLogo from './images/calculator-logo.png';
import Visor from './components/Visor.js';
import { Button, ClearButton } from './components/Button.js';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {
  const [input, setInput] = useState('');
  const addInput = (val) => { setInput(input + val); };
  const calcOperation = () => {
    if (input) {
      setInput(evaluate(input));
    }else{
      alert('Porfavor ingrese valores para realizar los calculos.');
    }
  }
  return (
    <div className="App">
      <header className='header-calc-logo'>
        <img
          className='calc-logo'
          src={calculatorLogo}
          alt='Calc Logo'
        />
      </header>

      <div className='main-container'>
        <div className='calc-container'>
          <Visor visorValue={input} />
          <div className='row'>
            <Button clickManage={addInput}>1</Button>
            <Button clickManage={addInput}>2</Button>
            <Button clickManage={addInput}>3</Button>
            <Button clickManage={addInput}>+</Button>
          </div>
          <div className='row'>
            <Button clickManage={addInput}>4</Button>
            <Button clickManage={addInput}>5</Button>
            <Button clickManage={addInput}>6</Button>
            <Button clickManage={addInput}>-</Button>
          </div>
          <div className='row'>
            <Button clickManage={addInput}>7</Button>
            <Button clickManage={addInput}>8</Button>
            <Button clickManage={addInput}>9</Button>
            <Button clickManage={addInput}>*</Button>
          </div>
          <div className='row'>
            <Button clickManage={calcOperation}>=</Button>
            <Button clickManage={addInput}>0</Button>
            <Button clickManage={addInput}>.</Button>
            <Button clickManage={addInput}>/</Button>
          </div>

          <ClearButton clearManage={() => { setInput('') }}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
