import './App.css'
// Named Imports 
import { addNums } from './Utils.jsx';
// Default Imports
import squareNum from './Utils.jsx';
// Importing Images 
import TateCobra from './assets/tate.webp';

function App() {

  return (
    <>
      <p>The Sum of 2 and 3 is {addNums(2, 4)}</p>
      <p>The Square of 5 is {squareNum(6)}</p>
      <img width="500px" src={TateCobra} alt="CobraTate" />
    </>
  )
}

export default App
