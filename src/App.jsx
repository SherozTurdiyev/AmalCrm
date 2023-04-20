import { useState } from 'react'
import About_Student from './components/About_Student/About_Student'
import LessonCard from './components/LessonCard/LessonCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <About_Student/>
      {/* <LessonCard/> */}
    </div>
  )
}

export default App
