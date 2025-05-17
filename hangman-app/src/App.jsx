import React, { useState } from 'react';
import Hangman from './Hangman';
import GameOver from './GameOver';
import words from './words.json';

const getRandomWordObj = () => words[Math.floor(Math.random() * words.length)];

function App() {
  const [current, setCurrent] = useState(getRandomWordObj());
  const [guessed, setGuessed] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const maxWrong = 6;

  const handleGuess = (letter) => {
    if (guessed.includes(letter) || gameOver) return;

    const newGuessed = [...guessed, letter];
    setGuessed(newGuessed);

    if (!current.word.includes(letter)) {
      const newWrong = wrongGuesses + 1;
      setWrongGuesses(newWrong);
      if (newWrong >= maxWrong) {
        setGameOver(true);
      }
    } else {
      const allCorrect = current.word.split('').every((l) => newGuessed.includes(l));
      if (allCorrect) {
        setGameOver(true);
      }
    }
  };

  const resetGame = () => {
    setCurrent(getRandomWordObj());
    setGuessed([]);
    setWrongGuesses(0);
    setGameOver(false);
    setShowHint(false);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🕹️ Hangman Game</h1>

      {!gameOver && (
        <>
          <button onClick={() => setShowHint(true)} style={{ marginBottom: '1rem' }}>
            Show Hint
          </button>
          {showHint && <p><strong>Hint:</strong> {current.hint}</p>}
        </>
      )}

      {!gameOver ? (
        <Hangman
          word={current.word}
          guessed={guessed}
          onGuess={handleGuess}
          wrongGuesses={wrongGuesses}
          maxWrong={maxWrong}
        />
      ) : (
        <GameOver
          word={current.word}
          guessed={guessed}
          wrongGuesses={wrongGuesses}
          onReset={resetGame}
        />
      )}
    </div>
  );
}

export default App;
