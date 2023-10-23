import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BTDatVe } from './BTDatVe/BTDatVe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="description" tabIndex="1">
      <BTDatVe/>
    </div>
  )
}

export default App
