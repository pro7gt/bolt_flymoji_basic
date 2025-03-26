import React from 'react';
import { Link } from 'react-router-dom';
import { useGame } from '../hooks/useGame';
import { Heart, Coins } from 'lucide-react';

export const GameHeader: React.FC = () => {
  const { lives, score } = useGame();

  return (
    <header className="bg-white bg-opacity-20 py-4 px-6 flex items-center justify-between">
      <div>
        <Link to="/" className="text-xl font-bold flex items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Emoji_u2708.svg/1200px-Emoji_u2708.svg.png" alt="Flymoji Quest Logo" className="h-6 w-6 mr-2" />
          Flymoji Quest
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Heart className="mr-1" /> {lives}
        </div>
        <div className="flex items-center">
          <Coins className="mr-1" /> {score}
        </div>
      </div>
    </header>
  );
};
