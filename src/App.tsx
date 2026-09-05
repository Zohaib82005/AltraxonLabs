import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technology from './components/Technology'
import Stats from './components/Stats'
import Solutions from './components/Solutions'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technology />
        <Stats />
        <Solutions />
      </main>
      <Footer />
    </div>
  )
}

export default App