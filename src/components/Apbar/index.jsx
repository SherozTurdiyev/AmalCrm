import React from 'react';
import './apbar.css'
import {
  HomeOutlined,
  UserOutlined,
  MessageOutlined,
} from '@ant-design/icons';

import { ImUserTie } from 'react-icons/im'
import { RiUser2Fill } from 'react-icons/ri'
import { BsCalendarDate } from 'react-icons/bs'
import { BiCubeAlt } from 'react-icons/bi'
import { FaHandHoldingUsd } from 'react-icons/fa'
import { TbHexagonLetterA } from 'react-icons/tb'

import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate()
  const menuList = [
    // {label : `${collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}`},
    { label: "CRM", key: '/', icon: <TbHexagonLetterA style={{ fontSize: "30px", background: '#FB7D5B', padding: '3px', boxSizing: 'border-box' }} className='rounded-lg' /> },
    { label: "Statistika", key: "Statistika", icon: <HomeOutlined style={{ fontSize: "25px", marginRight: '5px' }} /> },
    { label: "O'quvchilar", key: "Oquvchilar", icon: <ImUserTie style={{ fontSize: "25px", marginRight: '5px' }} /> },
    { label: "O'qituvchilar", key: "Oqituvchilar", icon: <RiUser2Fill style={{ fontSize: "25px", marginRight: '5px' }} /> },
    { label: "Bildirishnoma", key: "Bildirishnoma", icon: <BsCalendarDate style={{ fontSize: "25px", marginRight: '5px' }} /> },
    { label: "Moliya", key: "Moliya", icon: <FaHandHoldingUsd style={{ fontSize: "25px", marginRight: '5px' }} /> },
    { label: "Guruhlar", key: "Guruhlar", icon: <BiCubeAlt style={{ fontSize: "25px", marginRight: '5px' }} /> },
    { label: "Ota-onalar uchun", key: "Ota_Onalar", icon: <UserOutlined style={{ fontSize: "25px", marginRight: '5px' }} /> },
    { label: "Xabarlar", key: "Habarlar", icon: <MessageOutlined style={{ fontSize: "25px", marginRight: '5px' }} /> },
  ]

  function handler(v){
    navigate(`/${v.key}`)
  }

  return (
    <div style={{ width: 229, }}>
      <Menu
        mode="inline"
        theme='dark'
        style={{ background: "#4D44B5", fontWeight: '500', height: '100vh', fontSize: '17px' }}
        items={menuList}
        onClick={handler}
      />
    </div>
  );
};

export default App;