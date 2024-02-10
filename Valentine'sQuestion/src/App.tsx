import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {

  const [clicks, setClicks] = useState(0)
  const [yes, setYes] = useState(false)
  const [msg, setMessage] = useState("Namora comigo?")
  const messages = [
    "Não.",
    "<- Esse é o sim",
    "Tem certeza?",
    "Isso é sério?",
    "Aceita pff 😭"
  ]

  const handleClicksNo = () => clicks < 5 ? setClicks(clicks + 1) : setClicks(clicks)

  const handleClicksYes = () => {
    setYes(true)
    setMessage("Uhuu! Parabéns aos pombinhos!!!")
  }
  return (
    <>
      <main className={`${yes ? 'congrats' : ''}`}>
        <figure>
          <img src="./love.gif" alt="" />
        </figure>
        <h1>{msg}</h1>
        <div className="buttons">
          {!yes &&
            <div>
              <Button onClick={handleClicksNo} clicks={16} resize={false}>
                {messages[clicks]}
              </Button>

              <Button onClick={handleClicksYes} clicks={clicks} resize={true}>
                {clicks < 5 ? "SIM!!" : "Claro que sim."}
              </Button>
            </div>
          }

        </div>
        <figure>
          {yes && <img src="./uhuu.gif" alt="" />}
        </figure>
      </main>
    </>
  )
}

export default App
