import './App.css'
import Card from './components/Card.jsx';

function App() {

  return (
    <>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <Card />
        <Card />
        <Card />
      </div>      
    </>
  )
}

export default App
