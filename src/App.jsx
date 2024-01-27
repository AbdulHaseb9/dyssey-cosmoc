import './App.css'
import { About } from './components/About'
import { Astronaut } from './components/Astronaut'
import { Commited } from './components/Commited'
import { Community } from './components/Community'
import { Company } from './components/Company'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Joincommunity } from './components/Joincommunity'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Astronaut />
      <Company />
      <Community />
      <Commited />
      <About />
      <Joincommunity />
      <Footer />
    </>
  )
}

export default App
