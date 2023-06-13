import { Select, Skeleton } from 'antd'
import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className=''>
      <div className='flex flex-row justify-between items-center pt-3'>
        <h1 className='nav_title'>
          Dashboard
        </h1>

        <div className='nav_right'>
          <Select
            defaultValue={"uz"}
            style={{ width: 70 }}
            options={[
              { id: 1, value: "uz", label: "UZ" },
              { id: 2, value: "ru", label: "RU" }
            ]}
          />
          <div className='not_icon'>
            <IoMdNotificationsOutline className='text-2xl' />
          </div>

          <div className='flex items-center gap-3'>
            <div>
              <h5 className='m-0'>Nabila A</h5>
              <p className='m-0'>Admin</p>
            </div>
            <div className='img_rounded'>
              <Skeleton.Avatar   style={{width:"70px" , height:"70px"}} size={"default"} shape={"circle"} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
