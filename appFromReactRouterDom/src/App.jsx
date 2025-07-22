import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CompA from './Components/CompA';
import CompB from './Components/CompB';
import CompC from './Components/CompC';
import CompD from './Components/CompD';
import Home from './Components/Home';

function App () {
  return (
    <BrowserRouter>
      <>
        <ul style={{display: 'flex', flexDirection:'row', gap: '1rem', listStyle:'none', padding: '1rem'}}>
          <li><a href='/'>Home</a></li>
          <li><a href='/compa'>CompA</a></li>
          <li><a href='/compb'>compB</a></li>
          <li><a href='/compc'>compC</a></li>
          <li><a href='/compd'>compD</a></li>
          <li>This nav reloads the page coz it uses conventional anchor tags</li>
        </ul>
        <ul style={{display: 'flex', flexDirection:'row', gap: '1rem', listStyle:'none' , padding: '1rem'}}>
          <li><Link to='/'> Home  </Link></li>
          <li><Link to='/compa'> compa  </Link></li>
          <li><Link to='/compb'> compb  </Link></li>
          <li><Link to='/compc'> compc  </Link></li>
          <li><Link to='/compd'> compd  </Link></li>
          <li>This nav doesnot reloads page coz it uses Link element of RRD</li>

        </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/compa' element={<CompA />} />
          <Route path='/compb' element={<CompB />} />
          <Route path='/compc' element={<CompC />} />
          <Route path='/compd' element={<CompD />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App;