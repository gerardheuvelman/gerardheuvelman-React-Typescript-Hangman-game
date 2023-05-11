import { KeyboardEvent, useCallback, useEffect, useState } from "react"
import words from "./wordList.json"
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";

function getWord(): string {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {

  const [wordToguess, setWordToGuess] = useState(getWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters: string[] = guessedLetters.filter(
    letter => !wordToguess.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToguess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner)
      return
    setGuessedLetters(currentLetters => [...currentLetters, letter])
  },
    [guessedLetters, isLoser, isWinner])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }

  }, [guessedLetters])


  useEffect (() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }


  })

  return <div style={{
    maxWidth: "800 px",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    margin: " 0 auto",
    alignItems: "center"
  }}>
    <div style={{ fontSize: "2rem", textAlign: "center", }} >
      {isWinner && "winner!! Refresh to try again."}
      {isLoser && "Loser!! Refresh to try again."}

    </div>
    <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
    <HangmanWord
      reveal={isLoser}
      guessedLetters={guessedLetters}
      wordToGuess={wordToguess}
    />
    <div style={{
      alignSelf: "stretch"
    }}>
      <Keyboard
        disabled={isLoser || isWinner}
        activeLetters={guessedLetters.filter(letter => wordToguess.includes(letter))}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </div>





  </div>
}

export default App
