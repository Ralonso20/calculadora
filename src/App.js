import './App.css';
import calculatorLogo from './images/calculator-logo.png';
import Visor from './components/Visor.js';
import { NumerButton, ClearButton } from './components/Button.js';
function App() {
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
          <Visor visorValue='5' />
          <div className='row'>
            <NumerButton numberValue='1' />
            <NumerButton numberValue='2' />
            <NumerButton numberValue='3' />
            <NumerButton numberValue='+' />
          </div>
          <div className='row'>
            <NumerButton numberValue='4' />
            <NumerButton numberValue='5' />
            <NumerButton numberValue='6' />
            <NumerButton numberValue='-' />
          </div>
          <div className='row'>
            <NumerButton numberValue='7' />
            <NumerButton numberValue='8' />
            <NumerButton numberValue='9' />
            <NumerButton numberValue='*' />
          </div>
          <div className='row'>
            <NumerButton numberValue='=' />
            <NumerButton numberValue='0' />
            <NumerButton numberValue=',' />
            <NumerButton numberValue='/' />
          </div>

          <ClearButton />
        </div>
      </div>
    </div>
  );
}

export default App;
