import { useState } from 'react'
import Apbar from './components/Apbar/index.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Add_student from './components/Add_student/Add_student.jsx'
import Student_his from './components/Student_history/Student_his.jsx'
function App() {

  return (
    <div className="">
      <div className='row gx-0'>
        <div className='col-2'>
          <Apbar />
        </div>
        <div className='col-10 px-4'>
          <Navbar />
          <Student_his/>
        </div>
      </div>
    </div>
  )
}

export default App
