import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Service from './pages/Service'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import Error from './pages/Error'
const App = () => {
  return (
    <div>
      {/*       
      <a href="/service">Service</a>
      <br/>
      <a href="/product-list">Product-List</a>
      <br/>
      <a href="/product-detail">Product-Detail</a> */}
      {/* Header can be placed here*/}

      <Link to='/service'>Service</Link>
      <br/>
      <Link to='/product-list'>ProductList</Link>
      <br/>
      <Link to='/product-detail'>ProductDetail</Link>


      <Routes>
        <Route path='/service' element={<Service/>} />
        <Route path='/product-list' element={<ProductList/>} />
        <Route path='product-detail' element= {<ProductDetail/>}/>
        <Route path='*' element={<Error />}/>
      </Routes>

      {/* footer can be placed here*/}
    </div>
  )
}

export default App