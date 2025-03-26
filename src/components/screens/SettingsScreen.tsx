import React from 'react';
import { GameHeader } from '../GameHeader';

const SettingsScreen: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-400 to-blue-500 text-white">
      <GameHeader />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Settings</h2>
          <p className="text-lg mb-8">Customize your game experience here.</p>
          {/* Add settings options here */}
        </div>
      </div>
      <footer className="text-center py-4 text-sm">
        © {new Date().getFullYear()} Flymoji Quest. All rights reserved.
      </footer>
    </div>
  );
};

export default SettingsScreen;
