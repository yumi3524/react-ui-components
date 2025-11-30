import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './showcase/pages/Home'
import { Gallery } from './showcase/pages/Gallery'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
