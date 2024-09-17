
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Player from './components/Player';
import MovieLibrary from './components/MovieLibrary';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/player">Player</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<MovieLibrary />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
