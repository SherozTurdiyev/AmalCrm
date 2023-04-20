import { useState } from 'react'
import TeachCard from './components/TeacherCard/TeachCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TeachCard/>
    </div>
  )
}

export default App
