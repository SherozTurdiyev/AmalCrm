import { useState } from 'react'
import Statistics from './components/Statistics'
import Apbar from './components/Apbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Statistics/> */}
      <Apbar/>
    </div>
  )
}

export default App
