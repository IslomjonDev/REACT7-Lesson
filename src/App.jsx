import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Carrers from './pages/carrers/Carrers'
import Blog from './pages/blog/Blog'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/carrers' element={<Carrers/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
     </>
  )
}

export default App
