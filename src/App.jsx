import { useState } from 'react'
import About_Student from './components/About_Student/About_Student'
import Add_student from './components/Add_student/Add_student'
import LessonCard from './components/LessonCard/LessonCard'
import Navbar from './components/Navbar/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <About_Student/> */}
      {/* <LessonCard/> */}
      {/* <Add_student/> */}
      <Navbar/>
    </div>
  )
}

export default App
