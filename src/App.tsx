import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Approach from './components/Approach'
import WhatWeBuild from './components/WhatWeBuild'
import Technology from './components/Technology'
import WhyUs from './components/WhyUs'
import InnovationLab from './components/InnovationLab'
import Stats from './components/Stats'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <WhatWeBuild />
        <Technology />
        <WhyUs />
        <InnovationLab />
        <Stats />
      </main>
      <FinalCta />
      <Footer />
    </div>
  )
}

export default App