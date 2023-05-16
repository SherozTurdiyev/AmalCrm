import { useState } from 'react'
import Apbar from './components/Apbar/index.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Schart from './components/StudentChart/Schart.jsx'
function App() {

  return (
    <div className="">
      <div className='row gx-0'>
        <div className='col-2'>
          <Apbar />
        </div>
        <div className='col-10 px-4'>
        <Navbar/>
        <Schart/>
        </div>
      </div>
    </div>
  )
}

export default App
