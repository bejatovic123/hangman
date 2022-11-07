import React from 'react';

type HangmanWordPRops = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangManWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordPRops) {
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
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? 'visible'
                  : 'hidden',
              color:
                !guessedLetters.includes(letter) && reveal ? 'red ' : 'black',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
