import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './Navbar'
import Signup from './components/Signup'
import PrivateComponet from './components/PrivateComponet'
import Login from './components/Login'
import Addproduct from './components/Addproduct'
import Product from './components/Product'
import Updateproduct from './components/Updateproduct'

const App = () => {
  return (
    <div>
  
      <Router>
        <Navbar/>
       <Routes>
        <Route element={<PrivateComponet/>}>
        <Route path='/' element={<Product/>}/>
        <Route path='/add' element={<Addproduct/>}/>
        <Route path='/update/:id' element={<Updateproduct/>}/>
        <Route path='/logout' element={<h1>logout component</h1>}/>
        <Route path='/profile' element={<h1>Profile component</h1>}/>
        </Route>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
       </Routes>
      </Router>
    </div>
  )
}

export default App