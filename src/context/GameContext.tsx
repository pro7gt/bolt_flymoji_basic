import React, { createContext, useState, useContext, useEffect } from 'react';

interface Puzzle {
  question: string;
  options: string[];
  answer: string;
}

interface Level {
  levelNumber: number;
  difficulty: string;
  puzzles: Puzzle[];
  isUnlocked: boolean;
}

interface GameContextType {
  lives: number;
  score: number;
  coins: number;
  currentLevel: number;
  levels: Level[];
  currentPuzzle: Puzzle | null;
  isAnswerCorrect: boolean | null;
  setLevel: (level: number) => void;
  checkAnswer: (answer: string) => void;
  resetGame: () => void;
  unlockLevel: (levelIndex: number) => void;
  nextPuzzle: () => void;
  randomizeOptions: (options: string[]) => string[];
  randomizedOptions: string[];
}

const GameContext = createContext<GameContextType | undefined>(undefined);

const initialLevels: Level[] = [
  {
    levelNumber: 1,
    difficulty: 'Very Easy',
    puzzles: [
      { question: '🎡', options: ['Ferris Wheel', 'Car', 'Bike', 'Swing', 'Slide', 'Train'], answer: 'Ferris Wheel' },
      { question: '🎈', options: ['Balloon', 'Kite', 'Cloud', 'Plane', 'Bird', '伞'], answer: 'Balloon' },
      { question: '🍬', options: ['Candy', 'Chocolate', 'Cookie', 'Cake', 'Pie', 'Donut'], answer: 'Candy' },
      { question: '🎢', options: ['Rollercoaster', 'Slide', 'Swing', 'Trampoline', 'Seesaw', 'Climbing Frame'], answer: 'Rollercoaster' },
      { question: '🤡', options: ['Clown', 'Magician', 'Juggler', 'Acrobat', 'Mime', 'Ringmaster'], answer: 'Clown' },
      { question: '🍿', options: ['Popcorn', 'Candy', 'Chips', 'Pretzel', 'Nachos', 'Fries'], answer: 'Popcorn' },
      { question: '🎠', options: ['Carousel', 'Swing', 'Slide', 'Seesaw', 'Merry-go-round', 'Roundabout'], answer: 'Carousel' },
      { question: '🎟️', options: ['Ticket', 'Card', 'Paper', 'Token', 'Pass', 'Voucher'], answer: 'Ticket' },
      { question: '🧸', options: ['Prize', 'Toy', 'Gift', 'Present', 'Souvenir', 'Trinket'], answer: 'Prize' },
      { question: '🎯', options: ['Dart', 'Arrow', 'Target', 'Bullseye', 'Archery', 'Shooting'], answer: 'Dart' },
      { question: '💡', options: ['Light', 'Bulb', 'Lamp', 'Lantern', 'Candle', 'Torch'], answer: 'Light' },
      { question: '🎪', options: ['Tent', 'House', 'Building', 'Pavilion', 'Shelter', 'Big Top'], answer: 'Tent' },
      { question: '🍦', options: ['Ice Cream', 'Cake', 'Pie', 'Pudding', 'Gelato', 'Sorbet'], answer: 'Ice Cream' },
      { question: '🌭', options: ['Hot Dog', 'Burger', 'Sandwich', 'Wrap', 'Taco', 'Burrito'], answer: 'Hot Dog' },
      { question: '🍋', options: ['Lemonade', 'Juice', 'Water', 'Soda', 'Tea', 'Punch'], answer: 'Lemonade' },
      { question: '🎨', options: ['Paint', 'Drawing', 'Art', 'Sketch', 'Illustration', 'Artwork'], answer: 'Paint' },
      { question: '✨', options: ['Sparkle', 'Glitter', 'Shine', 'Glimmer', 'Glow', 'Radiance'], answer: 'Sparkle' },
      { question: '🎶', options: ['Music', 'Song', 'Melody', 'Tune', 'Rhythm', 'Harmony'], answer: 'Music' },
      { question: '😂', options: ['Laugh', 'Cry', 'Smile', 'Giggle', 'Chuckle', 'Snicker'], answer: 'Laugh' },
      { question: '😊', options: ['Smile', 'Sad', 'Angry', 'Happy', 'Content', 'Pleased'], answer: 'Smile' },
      { question: '🌟', options: ['Star', 'Sun', 'Moon', 'Planet', 'Comet', 'Galaxy'], answer: 'Star' },
      { question: '🍭', options: ['Lollipop', 'Candy', 'Gum', 'Sweet', 'Caramel', 'Toffee'], answer: 'Lollipop' },
      { question: '🥤', options: ['Drink', 'Juice', 'Soda', 'Water', 'Beverage', 'Smoothie'], answer: 'Drink' },
      { question: '🪙', options: ['Coin', 'Money', 'Cash', 'Currency', 'Change', 'Dollar'], answer: 'Coin' },
      { question: '⬆️', options: ['Up', 'Down', 'Left', 'Right', 'Top', 'Above'], answer: 'Up' },
      { question: '⬇️', options: ['Down', 'Up', 'Right', 'Left', 'Bottom', 'Below'], answer: 'Down' },
      { question: '➡️', options: ['Right', 'Left', 'Up', 'Down', 'East', 'West'], answer: 'Right' },
      { question: '⬅️', options: ['Left', 'Right', 'Down', 'Up', 'West', 'East'], answer: 'Left' },
      { question: '😄', options: ['Happy', 'Sad', 'Angry', 'Excited', 'Joyful', 'Cheerful'], answer: 'Happy' },
      { question: '🎉', options: ['Celebrate', 'Party', 'Joy', 'Festive', 'Event', 'Carnival'], answer: 'Celebrate' },
      { question: '✨', options: ['Shine', 'Glow', 'Sparkle', 'Glitter', 'Radiance', 'Glimmer'], answer: 'Shine' },
      { question: '💫', options: ['Dizzy', 'Spin', 'Whirl', 'Twirl', 'Rotate', 'Swirl'], answer: 'Dizzy' },
      { question: '🎵', options: ['Song', 'Music', 'Tune', 'Melody', 'Rhythm', 'Harmony'], answer: 'Song' },
      { question: '🥁', options: ['Drum', 'Beat', 'Rhythm', 'Percussion', 'Snare', 'Tom'], answer: 'Drum' },
      { question: '🎺', options: ['Trumpet', 'Horn', 'Brass', 'Bugle', 'Trombone', 'Tuba'], answer: 'Trumpet' },
      { question: '🎸', options: ['Guitar', 'Acoustic', 'Electric', 'Bass', 'Strings', 'Fender'], answer: 'Guitar' },
      { question: '🎤', options: ['Microphone', 'Mic', 'Audio', 'Sound', 'Voice', 'Record'], answer: 'Microphone' },
    ],
    isUnlocked: true,
  },
  {
    levelNumber: 2,
    difficulty: 'Easy',
    puzzles: [
      { question: 'What does a cow say?', options: ['Meow', 'Woof', 'Moo', 'Oink', 'Neigh', 'Roar'], answer: 'Moo' },
      { question: 'What is the opposite of black?', options: ['White', 'Red', 'Blue', 'Green', 'Yellow', 'Purple'], answer: 'White' },
    ],
    isUnlocked: false,
  },
  {
    levelNumber: 3,
    difficulty: 'Medium',
    puzzles: [
      { question: 'What is the capital of France?', options: ['Berlin', 'Paris', 'Rome', 'Madrid', 'London', 'Vienna'], answer: 'Paris' },
      { question: 'What is 2 + 2?', options: ['3', '4', '5', '6', '7', '8'], answer: '4' },
    ],
    isUnlocked: false,
  },
  {
    levelNumber: 4,
    difficulty: 'Hard',
    puzzles: [
      { question: 'Who painted the Mona Lisa?', options: ['Van Gogh', 'Da Vinci', 'Picasso', 'Rembrandt', 'Monet', 'Michelangelo'], answer: 'Da Vinci' },
      { question: 'What is the chemical symbol for water?', options: ['H2O', 'CO2', 'O2', 'N2', 'NaCl', 'CH4'], answer: 'H2O' },
    ],
    isUnlocked: false,
  },
  {
    levelNumber: 5,
    difficulty: 'Very Hard',
    puzzles: [
      { question: 'What is the speed of light in a vacuum (m/s)?', options: ['300,000,000', '150,000,000', '200,000,000', '250,000,000', '350,000,000', '400,000,000'], answer: '300,000,000' },
      { question: 'Solve: (4 + 8) / 2 * 3', options: ['18', '24', '12', '6', '9', '15'], answer: '18' },
    ],
    isUnlocked: false,
  },
  {
    levelNumber: 6,
    difficulty: 'Expert',
    puzzles: [
      { question: 'What is the integral of 1/x from 1 to e?', options: ['0', '1', 'e', '2', '3', '4'], answer: '1' },
      { question: 'What is the capital of Australia?', options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane', 'Perth', 'Adelaide'], answer: 'Canberra' },
    ],
    isUnlocked: false,
  },
];

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lives, setLives] = useState<number>(3);
  const [score, setScore] = useState<number>(0);
  const [coins, setCoins] = useState<number>(0);
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const [levels, setLevels] = useState<Level[]>(initialLevels);
  const [currentPuzzle, setCurrentPuzzle] = useState<Puzzle | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [randomizedOptions, setRandomizedOptions] = useState<string[]>([]);

  useEffect(() => {
    loadGameState();
  }, []);

  useEffect(() => {
    saveGameState();
  }, [lives, score, coins, currentLevel, levels, currentPuzzle]);

  useEffect(() => {
    if (levels[currentLevel]) {
      const puzzle = levels[currentLevel].puzzles[0];
      setCurrentPuzzle(puzzle);
      setRandomizedOptions(randomizeOptions([...puzzle.options]));
    }
  }, [currentLevel, levels]);

  const loadGameState = () => {
    const storedState = localStorage.getItem('flymojiGameState');
    if (storedState) {
      const { lives: storedLives, score: storedScore, coins: storedCoins, currentLevel: storedLevel, levels: storedLevels } = JSON.parse(storedState);
      setLives(storedLives);
      setScore(storedScore);
      setCoins(storedCoins);
      setCurrentLevel(storedLevel);
      setLevels(storedLevels);
    }
  };

  const saveGameState = () => {
    const gameState = {
      lives,
      score,
      coins,
      currentLevel,
      levels,
    };
    localStorage.setItem('flymojiGameState', JSON.stringify(gameState));
  };

  const setLevel = (level: number) => {
    setCurrentLevel(level);
  };

  const checkAnswer = (answer: string) => {
    if (currentPuzzle && answer === currentPuzzle.answer) {
      setScore(score + 10);
      setCoins(coins + 5);
      setIsAnswerCorrect(true);
      setTimeout(() => {
        setIsAnswerCorrect(null);
        nextPuzzle();
      }, 1000);
    } else {
      setLives(lives - 1);
      setIsAnswerCorrect(false);
      setTimeout(() => {
        setIsAnswerCorrect(null);
      }, 1000);
      if (lives === 1) {
        resetGame();
      }
    }
  };

  const nextPuzzle = () => {
    if (!currentPuzzle) return;

    const currentPuzzleIndex = levels[currentLevel].puzzles.indexOf(currentPuzzle);
    if (currentPuzzleIndex < levels[currentLevel].puzzles.length - 1) {
      setCurrentPuzzle(levels[currentLevel].puzzles[currentPuzzleIndex + 1]);
      setRandomizedOptions(randomizeOptions([...levels[currentLevel].puzzles[currentPuzzleIndex + 1].options]));
    } else {
      // Move to the next level
      if (currentLevel < levels.length - 1 && levels[currentLevel + 1].isUnlocked) {
        setCurrentLevel(currentLevel + 1);
        setCurrentPuzzle(levels[currentLevel + 1].puzzles[0]);
        setRandomizedOptions(randomizeOptions([...levels[currentLevel + 1].puzzles[0].options]));
      } else {
        // Game completed or no more unlocked levels
        console.log('Game completed or no more unlocked levels!');
      }
    }
  };

  const resetGame = () => {
    setLives(3);
    setScore(0);
    setCoins(0);
    setCurrentLevel(0);
    setLevels(initialLevels);
  };

  const unlockLevel = (levelIndex: number) => {
    setLevels(prevLevels => {
      const newLevels = [...prevLevels];
      newLevels[levelIndex].isUnlocked = true;
      return newLevels;
    });
  };

  const randomizeOptions = (options: string[]): string[] => {
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  };

  const value: GameContextType = {
    lives,
    score,
    coins,
    currentLevel,
    levels,
    currentPuzzle,
    isAnswerCorrect,
    setLevel,
    checkAnswer,
    resetGame,
    unlockLevel,
    nextPuzzle,
    randomizeOptions,
    randomizedOptions,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
