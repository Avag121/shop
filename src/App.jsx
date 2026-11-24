import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import Home from './components/Pages/Home.jsx'
import About from './components/Pages/About.jsx'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<p>Products</p>} />
      </Routes>

    </>
  )
}

export default App
