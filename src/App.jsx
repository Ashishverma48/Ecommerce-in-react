import { useState } from 'react'

import './App.css'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Details from './pages/Details/Details'




function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='product/:id' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
    // <Home/>
    
  )
}

export default App
