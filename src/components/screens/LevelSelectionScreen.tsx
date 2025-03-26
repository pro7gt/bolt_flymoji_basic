import React from 'react';
import { Link } from 'react-router-dom';
import { useGame } from '../../hooks/useGame';
import { GameHeader } from '../GameHeader';

const LevelSelectionScreen: React.FC = () => {
  const { levels, currentLevel, unlockLevel } = useGame();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-400 to-blue-500 text-white">
      <GameHeader />
      <div className="flex-grow flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Select Level</h2>
        <div className="grid grid-cols-3 gap-4">
          {levels.map((level, index) => (
            <Link
              to="/game"
              key={index}
              className={`bg-white text-purple-600 font-bold py-2 px-4 rounded shadow hover:bg-purple-100 transition-colors duration-200 ${
                level.isUnlocked ? '' : 'opacity-50 cursor-not-allowed'
              }`}
              onClick={() => unlockLevel(index)}
              style={{ pointerEvents: level.isUnlocked ? 'auto' : 'none' }}
            >
              Level {index + 1}
            </Link>
          ))}
        </div>
      </div>
      <footer className="text-center py-4 text-sm">
        © {new Date().getFullYear()} Flymoji Quest. All rights reserved.
      </footer>
    </div>
  );
};

export default LevelSelectionScreen;
