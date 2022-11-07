import { useCallback, useEffect, useState } from 'react';
import { HangManDrawing } from './HangManDrawing';
import { HangManWord } from './HangManWord';
import { Keyboard } from './Keyboard';

import words from './wordList.json';

function App() {
  //______________GENERATE RANDOM WORD FROM JSON ____________
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  // filling the array with letters from keyboard
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  //IF the letter is not included in the word we try to guess
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter),
  );

  console.log(wordToGuess);

  //useCallback used to rerender only when the GueesedLetters change
  const addGuessedLetter = useCallback(
    (letter: string) => {
      // if the guessedletters<string["a","v"]> includes the key:a we pressed return nothing
      if (guessedLetters.includes(letter)) return;
      //otherwise update the curentLetters spread them and add the key value(the letter) on the end of the array
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters],
  );

  //it should render only when the guessedLetters change
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };
    //calling the above "HANDLER"  listens on key and the key needs to match the letters form a-z
    document.addEventListener('keypress', handler);

    //cleaning up keypress and the handler
    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters]);

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
      {/* passing down the guessed letter and the actual word to be guessed*/}
      <HangManWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: 'stretch' }}>
        {/*passing the logic filter of the array of letters if they are included and the ones that are not included*/}
        <Keyboard
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter),
          )}
          inactiveLetters={incorrectLetters}
          //this will udate the letters
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
