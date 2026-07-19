import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VSL from './pages/VSL'
import Confirmation from './pages/Confirmation'
import Offer from './pages/Offer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VSL />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/offer" element={<Offer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
