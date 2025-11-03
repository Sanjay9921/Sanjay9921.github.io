import { useState } from 'react'
import './App.css'

// Layouts
import NavbarLayout from './components/common/Layout/Navbar/Navbar'
import FooterLayout from './components/common/Layout/Footer/Footer'


// Sections
import Home from './components/sections/Home/Home'
import About from './components/sections/About/About'
import Projects from './components/sections/Projects/Projects'
import Contact from './components/sections/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarLayout/>
      <Home/>
      <About/>
      <Projects/>
      <FooterLayout/>
    </>
  )
}

export default App
