import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from './components/Navbar';
import HomePage from './components/HomePage';
import Marketplace from './components/MarketPlace';
import About from './components/About';
import Faq from './components/Faq';
import APIbtn from './components/APIbtn';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <MyNavbar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/apibtn" element={<APIbtn />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
