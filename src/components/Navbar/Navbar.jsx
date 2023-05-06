import React from 'react'
import {IoMdNotificationsOutline} from 'react-icons/io'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className=''>
      <div className='d-flex w-100 justify-content-between navbar'>
        <h1 className='nav_title'>
          Dashboard
        </h1>

        <div className='nav_right'>
          <select className='p-2' aria-label="Default select example">
            <option value="EN" selected>EN</option>
            <option value="UZ">UZ</option>
          </select>

          <div className='not_icon'>
            <IoMdNotificationsOutline/>
          </div>
          
          <div className='user_info_nav'>
            <div>
              <h5>Nabila A</h5>
              <p>Admin</p>
            </div>
            <div className='img_rounded'></div>
          </div>

        </div>
      </div>
    </div>
  )
}
