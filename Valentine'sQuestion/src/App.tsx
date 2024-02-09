import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {

  const [clicks, setClicks] = useState(0)
  const messages = [
    "Não.",
    "<- Esse é o sim",
    "Tem certeza?",
    "Isso é sério?",
    "Aceita pff 😭"
  ]

  const handleClicksNo = () => clicks < 5 ? setClicks(clicks + 1) : setClicks(clicks)

  const handleClicksYes = () => {

  }
  return (
    <>
      <main>
        <h1>Namora comigo?</h1>
        <div className="buttons">
          <Button onClick={handleClicksNo} clicks={16} resize={false}>
            {messages[clicks]}
          </Button>
          <Button onClick={handleClicksYes} clicks={clicks} resize={true}>
            {clicks < 5 ? "SIM!!" : "Claro que sim."}
          </Button>
        </div>
      </main>
    </>
  )
}

export default App
