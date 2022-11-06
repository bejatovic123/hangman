import { useState } from 'react';
import { HangManDrawing } from './HangManDrawing';
import { HangManWord } from './HangManWord';
import { Keyboard } from './Keyboard';

import words from './wordList.json';

function App() {
  //getting a random word out of the json wordlist
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter),
  );

  console.log(wordToGuess);

  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      <div style={{ fontSize: '2rem', textAlign: 'center' }}>Lose Win</div>
      {/* passing down the length of the incorectletters and using them to generate the man */}
      <HangManDrawing numberOfGuesses={incorrectLetters.length} />

      <HangManWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: 'stretch' }}>
        {' '}
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
