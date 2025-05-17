import React from 'react';

const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

function Hangman({ word, guessed, onGuess, wrongGuesses, maxWrong }) {
  const displayWord = word
    .split('')
    .map((letter) => (guessed.includes(letter) ? letter : '_'))
    .join(' ');

  return (
    <div>
      <p>Wrong Guesses: {wrongGuesses} / {maxWrong}</p>
      <h2 style={{ letterSpacing: '10px', fontSize: '2rem' }}>{displayWord}</h2>
      <div style={{
        marginTop: '1rem',
        maxWidth: '400px',
        margin: '1rem auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => onGuess(letter)}
            disabled={guessed.includes(letter)}
            style={{
              margin: '3px',
              padding: '8px 12px',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Hangman;
