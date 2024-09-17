
import React, { useState } from 'react';

const Player = ({ videoUrl = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4", title = "Sintel" }) => {
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);

  return (
    <div className="video-container">
      <h2>{title}</h2>
      <video
        src={videoUrl}
        controls
        width="800"
        style={{ borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
        volume={volume}
        playbackRate={playbackRate}
      ></video>
      <div className="custom-controls">
        <label>Volume:</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />
        <label>Playback Speed:</label>
        <select value={playbackRate} onChange={(e) => setPlaybackRate(e.target.value)}>
          <option value="0.5">0.5x</option>
          <option value="1">1x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
        <button onClick={() => document.querySelector('video').requestFullscreen()}>
          Full Screen
        </button>
      </div>
    </div>
  );
};

export default Player;
