import React from 'react';
import { useGame } from '../../hooks/useGame';
import { GameHeader } from '../GameHeader';
import PuzzleCard from '../PuzzleCard';

const GameScreen: React.FC = () => {
  const { currentPuzzle, checkAnswer, isAnswerCorrect } = useGame();

  if (!currentPuzzle) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-400 to-blue-500 text-white">
        <GameHeader />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-lg">No puzzles available for this level yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-400 to-blue-500 text-white">
      <GameHeader />
      <div className="flex-grow flex items-center justify-center p-4">
        <PuzzleCard puzzle={currentPuzzle} />
      </div>
      {isAnswerCorrect === true && (
        <div className="text-center text-green-500 text-xl font-semibold mb-4">
          Correct!
        </div>
      )}
      {isAnswerCorrect === false && (
        <div className="text-center text-red-500 text-xl font-semibold mb-4">
          Incorrect!
        </div>
      )}
      <footer className="text-center py-4 text-sm">
        © {new Date().getFullYear()} Flymoji Quest. All rights reserved.
      </footer>
    </div>
  );
};

export default GameScreen;
