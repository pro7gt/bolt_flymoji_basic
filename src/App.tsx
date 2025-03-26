import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/screens/HomeScreen';
import LevelSelectionScreen from './components/screens/LevelSelectionScreen';
import GameScreen from './components/screens/GameScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import HowToPlayScreen from './components/screens/HowToPlayScreen';
import HighScoresScreen from './components/screens/HighScoresScreen';
import { GameProvider } from './context/GameContext';
import './index.css';

function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/level-selection" element={<LevelSelectionScreen />} />
          <Route path="/game" element={<GameScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="/how-to-play" element={<HowToPlayScreen />} />
          <Route path="/high-scores" element={<HighScoresScreen />} />
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;
