import React from 'react';

type HangmanWordPRops = {
  guessedLetters: string[];
  wordToGuess: string;
};

export function HangManWord({ guessedLetters, wordToGuess }: HangmanWordPRops) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '.25em',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}
    >
      {/*----------WORDS SPLIT into Individual letters, map through all of them and display them */}
      {wordToGuess.split('').map((letter, index) => (
        <span style={{ borderBottom: '.1em solid black' }} key={index}>
          <span
            style={{
              // Conditionaly rendering  letters if the guessed letter is included in the word
              visibility: guessedLetters.includes(letter)
                ? 'visible'
                : 'hidden',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
