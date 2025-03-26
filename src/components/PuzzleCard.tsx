import React from 'react';
import { useGame } from '../hooks/useGame';

interface PuzzleCardProps {
  puzzle: {
    question: string;
    options: string[];
    answer: string;
  };
}

const PuzzleCard: React.FC<PuzzleCardProps> = ({ puzzle }) => {
  const { checkAnswer, randomizedOptions } = useGame();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{puzzle.question}</h2>
      <div className="grid grid-cols-2 gap-4">
        {randomizedOptions.map((option, index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => checkAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PuzzleCard;
