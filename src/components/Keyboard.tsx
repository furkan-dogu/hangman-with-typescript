import styles from "../styles/Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "ç",
  "d",
  "e",
  "f",
  "g",
  "ğ",
  "h",
  "ı",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "ö",
  "p",
  "r",
  "s",
  "ş",
  "t",
  "u",
  "ü",
  "v",
  "y",
  "z",
];

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean
};

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false
}: KeyboardProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))",
        gap: "0.5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            key={key}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            onClick={() => addGuessedLetter(key)}
            disabled={isInactive || isActive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
