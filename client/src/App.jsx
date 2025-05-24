import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* We'll add /about and /contact pages later */}
      </Routes>
    </>
  )
}
