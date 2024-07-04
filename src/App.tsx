import { useState } from "react"
import words from "./wordList.json"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  }) 

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  console.log(wordToGuess);

  return (
    <div className="container">
      <div className="lose-win">
        Lose Win
      </div>
    </div>
  )
}

export default App