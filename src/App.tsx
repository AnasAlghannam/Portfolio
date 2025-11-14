import { Navbar } from './components/navbar'
import Home from './pages/Home'
import './index.css'
import { Footer } from './components/footer'

function App() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="grow" >
          <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App