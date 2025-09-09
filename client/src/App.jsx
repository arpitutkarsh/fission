import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { DarkModeProvider } from './Context/Context.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DarkModeProvider>
      <Navbar />
      <Hero />
      </DarkModeProvider>
    </>
  )
}

export default App
