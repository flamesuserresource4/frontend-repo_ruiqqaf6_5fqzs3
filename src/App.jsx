import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Studio from './components/Studio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Showcase />
      <Studio />
      <Contact />
    </div>
  )
}

export default App
