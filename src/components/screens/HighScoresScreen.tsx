import React from 'react';
import { GameHeader } from '../GameHeader';

const HighScoresScreen: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-400 to-blue-500 text-white">
      <GameHeader />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">High Scores</h2>
          <p className="text-lg mb-8">Check out the top players!</p>
          {/* Add high scores list here */}
        </div>
      </div>
      <footer className="text-center py-4 text-sm">
        © {new Date().getFullYear()} Flymoji Quest. All rights reserved.
      </footer>
    </div>
  );
};

export default HighScoresScreen;
