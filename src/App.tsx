import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlueprintGrid from './components/BlueprintGrid'
import usePixelPageView from './hooks/usePixelPageView'
import VSL from './pages/VSL'
import Confirmation from './pages/Confirmation'
import Offer from './pages/Offer'

function AppRoutes() {
  usePixelPageView()

  return (
    <>
      <BlueprintGrid />
      <Routes>
        <Route path="/" element={<VSL />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/offer" element={<Offer />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
