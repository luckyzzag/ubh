import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import ChapterPage from './components/ChapterPage'
import LinksPage from './components/LinksPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chapter/:chapterNumber/page/:pageNumber" element={<ChapterPage />} />
          <Route path="/links" element={<LinksPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App