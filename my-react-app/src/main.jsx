import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import ConverterApp from './App.jsx'
import FlashcardsApp from './Flashcards2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 1. This is your navigation menu visible on all pages */}
      <nav style={{ padding: '10px', background: '#f0f0f0', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Converter</Link>
        <Link to="/flashcards">Flashcards</Link>
      </nav>

      {/* 2. This decides which component to show based on the URL */}
      <Routes>
        <Route path="/" element={<ConverterApp />} />
        <Route path="/flashcards" element={<FlashcardsApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)