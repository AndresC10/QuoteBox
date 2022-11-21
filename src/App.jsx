import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from "./json/colors.json";

function App() {

  const getRandomFromArray = arr => {
    const indexRandom = Math.floor(arr.length * Math.random())
    return arr[indexRandom]
  }

  const [quote, setQuote] = useState(getRandomFromArray(quotes))
  const [colorRandom, setColorRandom] = useState(getRandomFromArray(colors))

  const handleClick = () => {
    setQuote(getRandomFromArray(quotes))
    setColorRandom(getRandomFromArray(colors))
  }

  const objStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div className="App" style={objStyle}>
      <QuoteBox
        quoteRandom={quote}
        handleClick={handleClick}
        colorRandom={colorRandom}
      />
    </div>
  )
}

export default App
