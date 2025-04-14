import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import GamePage from './pages/GamePage/GamePage';
import TelevisionPage from './pages/TelevisionPage/TelevisionPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {

  return (
    <>
      <h1>Chess Game</h1>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/game">Game</Link>
        <Link to="/stream">Stream</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/stream" element={<TelevisionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
