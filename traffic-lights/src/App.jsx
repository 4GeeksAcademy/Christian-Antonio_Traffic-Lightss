import { useState } from 'react'
import './App.css'

const App = () => {

  const [selectedColor, setSelectedColor] = useState("light");
  const [style, setStyle] = useState("light")

  const changeStyle = () => {
    if (style !== "light") setStyle("light");
    else setStyle("dark");
  }

  return (
    <>
      <div className='stick'></div>
      <div className='semaforo'>
        <div
          onClick={() => {
            setSelectedColor("green")
          }
          }
          className={'green light' + (selectedColor === 'green' ? ' glow' : "")}
        >
        </div>
        <div
          onClick={() => {
            setSelectedColor("yellow")
          }
          }
          className={'yellow light' + (selectedColor === 'yellow' ? ' glow' : "")}
        >
        </div>
        <div
          onClick={() => {
            setSelectedColor("red")
          }
        }
          className={'red light' + (selectedColor === 'red' ? ' glow' : "")}
        >
        </div>
      </div>
    </>
  )
}

export default App
