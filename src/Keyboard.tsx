import React from 'react';
import styles from './Keyboard.module.css';

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetters,
  disabled = false,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px,1fr))',
        gap: '.5rem',
      }}
    >
      {KEYS.map((key) => {
        //if the key is included in the word
        const isActive = activeLetters.includes(key);
        //if the key isn't included in the word
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            //add the key letter into the array if it dosnt already exist in the array
            onClick={() => addGuessedLetter(key)}
            //conditionaly passing a class name  to the button
            className={`${styles.btn} ${isActive ? styles.active : ''}
            ${isInactive ? styles.inactive : ''}`}
            //if it is active or inactve disable the button
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
