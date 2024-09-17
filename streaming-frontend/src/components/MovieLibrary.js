
import React from 'react';
import { Link } from 'react-router-dom';

const MovieLibrary = () => {
  return (
    <div className="movie-list">
      <div className="movie-item">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Big_Buck_Bunny_2008.jpg/1920px-Big_Buck_Bunny_2008.jpg" alt="Big Buck Bunny" />
        <h3><Link to="/player?video=bbb">Big Buck Bunny</Link></h3>
      </div>
      <div className="movie-item">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sintel_poster.jpg/1920px-Sintel_poster.jpg" alt="Sintel" />
        <h3><Link to="/player?video=sintel">Sintel</Link></h3>
      </div>
    </div>
  );
};

export default MovieLibrary;
