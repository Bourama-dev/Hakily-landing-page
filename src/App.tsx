import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import BlueprintGrid from './components/BlueprintGrid'
import usePixelPageView from './hooks/usePixelPageView'
import VSL from './pages/VSL'
import Confirmation from './pages/Confirmation'
import Offer from './pages/Offer'
import CompanyInfo from './pages/CompanyInfo'
import SiteFooter from './components/SiteFooter'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const targetId = decodeURIComponent(hash.slice(1))
    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [pathname, hash])

  return null
}

function AppRoutes() {
  usePixelPageView()

  return (
    <>
      <BlueprintGrid />
      <ScrollToHash />
      <main className="pb-20 md:pb-0">
        <Routes>
          <Route path="/" element={<VSL />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/mentions-legales" element={<CompanyInfo kind="mentions" />} />
          <Route path="/confidentialite" element={<CompanyInfo kind="privacy" />} />
          <Route path="/conditions" element={<CompanyInfo kind="terms" />} />
        </Routes>
      </main>
      <SiteFooter />
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
