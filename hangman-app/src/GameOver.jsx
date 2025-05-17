import React from 'react';

function GameOver({ word, guessed, wrongGuesses, onReset }) {
  const won = word.split('').every((letter) => guessed.includes(letter));

  return (
    <div>
      <h2>{won ? '🎉 You Win!' : '😢 Game Over'}</h2>
      <p>The word was: <strong>{word}</strong></p>
      <p>Wrong Guesses: {wrongGuesses}</p>
      <button onClick={onReset} style={{ padding: '10px 20px', fontSize: '1rem', marginTop: '1rem' }}>
        Play Again
      </button>
    </div>
  );
}

export default GameOver;
