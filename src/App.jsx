import './App.css'
import { Astronaut } from './components/Astronaut'
import { Company } from './components/Company'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Astronaut />
      <Company />
    </>
  )
}

export default App
