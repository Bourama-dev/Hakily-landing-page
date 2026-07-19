import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlueprintGrid from './components/BlueprintGrid'
import VSL from './pages/VSL'
import Confirmation from './pages/Confirmation'
import Offer from './pages/Offer'

function App() {
  return (
    <BrowserRouter>
      <BlueprintGrid />
      <Routes>
        <Route path="/" element={<VSL />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/offer" element={<Offer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
