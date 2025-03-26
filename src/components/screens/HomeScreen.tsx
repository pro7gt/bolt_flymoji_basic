import React from 'react';
import { Link } from 'react-router-dom';
import { useGame } from '../../hooks/useGame';
import { GameHeader } from '../GameHeader';

const HomeScreen: React.FC = () => {
  const { resetGame } = useGame();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-400 to-blue-500 text-white">
      <GameHeader />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Flymoji Quest</h1>
          <p className="text-lg mb-8">Solve emoji puzzles and conquer the worlds!</p>
          <Link to="/level-selection">
            <button className="bg-white text-purple-600 font-bold py-2 px-4 rounded shadow hover:bg-purple-100 transition-colors duration-200">
              Start Game
            </button>
          </Link>
          <div className="mt-4">
            <button
              className="text-sm text-white hover:text-gray-200 transition-colors duration-200"
              onClick={resetGame}
            >
              Reset Game
            </button>
          </div>
        </div>
      </div>
      <footer className="text-center py-4 text-sm">
        © {new Date().getFullYear()} Flymoji Quest. All rights reserved.
      </footer>
    </div>
  );
};

export default HomeScreen;
