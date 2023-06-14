import { Select, Skeleton } from 'antd'
import React, { useEffect, useState } from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { useSelector } from 'react-redux'
import './Navbar.css'

import { useLocation } from 'react-router-dom'

export default function Navbar() {
  const [title, setTitle] = useState('Dashboard')
  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case '/Statistika':
        setTitle("Dashboard");
        break;
      case "/Oquvchilar":
        setTitle("O'quvchilar")
        break;
      case "/Oqituvchilar":
        setTitle("O'qituvchilar")
        break;
      case "/Bildirishnoma":
        setTitle("Bildirishnoma")
        break;
      case "/Moliya":
        setTitle("Moliya")
        break;
      case "/Guruhlar":
        setTitle("Guruhlar")
        break;
      default:
        setTitle("Amal IT Group")
        break;
    }

  }, [location.pathname]);

  const selector = useSelector(state => state.titleReducer)
  return (
    <div className=''>
      <div className='flex flex-row justify-between items-center pt-3'>
        <h1 className='nav_title'>
          {title}
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
              <Skeleton.Avatar style={{ width: "70px", height: "70px" }} size={"default"} shape={"circle"} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
