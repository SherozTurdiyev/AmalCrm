import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Apbar from './components/Apbar/index.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import PageLoader from './components/shared/PageLoader/PageLoader.jsx'



function App() {

  return (
    <div className="">
      <div className='row gx-0'>
        <div className='col-2 relative'>
          <div className='fixed top-0 left-0'>
            <Apbar />
          </div>
        </div>
        <div className='col-10 px-4'>
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App